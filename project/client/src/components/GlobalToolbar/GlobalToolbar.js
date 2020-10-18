import React from 'react';
// import PropTypes from 'prop-types';
import './GlobalToolbar.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from 'react-redux';
import {logout} from "../../actions/auth";


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const GlobalToolbar = (props) => {
  const classes = useStyles();

  function logOut() {
    props.dispatch(logout());
  }

  return (
    <div className="GlobalToolbar" data-testid="GlobalToolbar">
      <CssBaseline/>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Cincinnati's Best Fantasy Football
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>

            {props.isLoggedIn && (
              <Link variant="button" color="textPrimary" href="/players" className={classes.link}>
                Players
              </Link>
            )}

            {props.isLoggedIn && (
              <Link variant="button" color="textPrimary" href="/my-team" className={classes.link}>
                My Team
              </Link>
            )}
          </nav>

          {props.isLoggedIn ? (
            <Button href="/login" color="primary" variant="outlined" className={classes.link} onClick={logOut}>
              Log Out
            </Button>
          ) : (
            <Button href="/login" color="primary" variant="outlined" className={classes.link}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

GlobalToolbar.propTypes = {};

GlobalToolbar.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(GlobalToolbar);
