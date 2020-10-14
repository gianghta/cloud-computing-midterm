import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {clearMessage} from "./actions/message";
import {logout} from "./actions/auth";
import { history } from './helpers/history';

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
      showUserBoard: false,
      currentUser: undefined,
    };

    // clears the message every time the location changes
    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showUserBoard: user.roles.includes('ROLE_USER'),
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

  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
