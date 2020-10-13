import React from 'react';
// import PropTypes from 'prop-types';
import './MyTeam.css';
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, Grid, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const MyTeam = (props) => {
  const classes = useStyles();

  if (!props.isLoggedIn) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <div className="MyTeam" data-testid="MyTeam">
      <CssBaseline />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.paper}>
            <Typography variant="h3">
              My Team
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MyTeam.propTypes = {};

MyTeam.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;

  return {
    isLoggedIn,
    user,
  };
}

export default connect(mapStateToProps)(MyTeam);
