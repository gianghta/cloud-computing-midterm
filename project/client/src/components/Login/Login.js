import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './Login.css';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { login } from "../../actions/auth";
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleLogin(event) {
    event.preventDefault();

    props.dispatch(login(username, password))
      .then(() => {
        props.history.push('/');
        window.location.reload();
      })
      .catch(() => {
        //
      });
  }

  if (props.isLoggedIn) {
    return <Redirect to="/" />
  }
  
  return (
    <div className="Login" data-testid="Login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            {props.message && (
              <div>
                <Alert severity="error">
                  {props.message}
                </Alert>
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!validateForm()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up!"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
