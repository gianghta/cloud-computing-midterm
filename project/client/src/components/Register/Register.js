import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './Register.css';
import { connect } from 'react-redux';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {Redirect} from "react-router";
import {register} from "../../actions/auth";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    marginBottom: theme.spacing(2),
  },
}));

const Register = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [successful, setSuccessful] = useState(false);

  function validateForm() {
    return email.length > 0 && username.length > 0 && password.length > 0 && password === passwordConfirm;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccessful(false);

    props.dispatch(register(username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  }

  if (props.isLoggedIn) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <div className="Register" data-testid="Register">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            {!successful && (
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
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
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password-confirm"
                  label="Confirm Password"
                  name="password-confirm"
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                />
              </div>
            )}

            {props.message && (
              <div className={classes.alert}>
                <Alert severity={successful ? 'success' : 'error'}>
                  {props.message}
                </Alert>
              </div>
            )}

            {!successful && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!validateForm()}
              >
                Sign Up
              </Button>
            )}

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign In!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

Register.propTypes = {};

Register.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Register);
