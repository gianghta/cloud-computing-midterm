import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {clearMessage} from "./actions/message";
import {logout} from "./actions/auth";
import { history } from './helpers/history';
import {getQuarterbacks, getRunningBacks, getTightEnds, getWideReceivers} from "./actions/players";

// Components
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import GlobalToolbar from "./components/GlobalToolbar/GlobalToolbar";
import Players from './components/Players/Players';
import MyTeam from './components/MyTeam/MyTeam';



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      loadingTeams: false,
    };

    // clears the message every time the location changes
    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    // get quarterbacks
    if (user && this.props.players.quarterbacks.length === 0) {
      this.props.dispatch(getQuarterbacks())
        .then(() => {
          // console.log('App - got quarterbacks');
        })
        .catch(() => {
          console.log('App - error getting quarterbacks');
        });
    }

    // get runningBacks
    if (user && this.props.players.runningBacks.length === 0) {
      this.props.dispatch(getRunningBacks())
        .then(() => {
          // console.log('App - got runningBacks');
        })
        .catch(() => {
          console.log('App - error getting runningBacks');
        });
    }

    // get wideReceivers
    if (user && this.props.players.wideReceivers.length === 0) {
      this.props.dispatch(getWideReceivers())
        .then(() => {
          // console.log('App - got wideReceivers');
        })
        .catch(() => {
          console.log('App - error getting wideReceivers');
        });
    }

    // get tightEnds
    if (user && this.props.players.tightEnds.length === 0) {
      this.props.dispatch(getTightEnds())
        .then(() => {
          // console.log('App - got tightEnds');
        })
        .catch(() => {
          console.log('App - error getting tightEnds');
        });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    // const { currentUser, showUserBoard } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <GlobalToolbar />
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/players" component={Players} />
              <Route path="/my-team" component={MyTeam} />
            </Switch>
          </Router>
        </header>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const {
    quarterbacks,
    runningBacks,
    tightEnds,
    wideReceivers,
  } = state.players;

  return {
    user,
    players: {
      quarterbacks,
      runningBacks,
      tightEnds,
      wideReceivers,
    },
  };
}

export default connect(mapStateToProps)(App);
