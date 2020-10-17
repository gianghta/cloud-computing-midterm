import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import './Home.css';
import { connect } from 'react-redux';
import {Container, Grid, Typography} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {DataGrid} from "@material-ui/data-grid";
import UserService from '../../services/user.service';


const useStyles = makeStyles((theme) => {
  return ({
    paper: {
      marginTop: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
});

const Home = (props) => {
  const classes = useStyles();

  const [standingsRowsProp, setStandingsRowsProp] = useState([]);

  useEffect(() => {
    async function getAllUserScores() {
      const rows = await UserService.getAllUserScores().then((response) => {
        return response.data.map(guy => {
          return {
            id: guy['user_id']['_id'],
            username: guy['user_id']['username'],
            wk1_score: guy['week-1'],
            wk2_score: guy['week-2'],
            wk3_score: guy['week-3'],
            wk4_score: guy['week-4'],
            wk5_score: guy['week-5'],
            wk6_score: guy['week-6'],
            wk7_score: guy['week-7'],
            wk8_score: guy['week-8'],
            wk9_score: guy['week-9'],
            wk10_score: guy['week-10'],
            wk11_score: guy['week-11'],
            wk12_score: guy['week-12'],
            wk13_score: guy['week-13'],
            wk14_score: guy['week-14'],
            wk15_score: guy['week-15'],
            wk16_score: guy['week-16'],
            wk17_score: guy['week-17'],
          };
        });
      });

      return rows;
    }
    getAllUserScores().then(rows => {
      setStandingsRowsProp(rows);
    });
  }, []);

  const standingsColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'username',
      headerName: 'User',
    },
    {
      field: 'wk1_score',
      headerName: 'Week 1',
      type: 'number',
    },
    {
      field: 'wk2_score',
      headerName: 'Week 2',
      type: 'number',
    },
    {
      field: 'wk3_score',
      headerName: 'Week 3',
      type: 'number',
    },
    {
      field: 'wk4_score',
      headerName: 'Week 4',
      type: 'number',
    },
    {
      field: 'wk5_score',
      headerName: 'Week 5',
      type: 'number',
    },
    {
      field: 'wk6_score',
      headerName: 'Week 6',
      type: 'number',
    },
    {
      field: 'wk7_score',
      headerName: 'Week 7',
      type: 'number',
    },
    {
      field: 'wk8_score',
      headerName: 'Week 8',
      type: 'number',
    },
    {
      field: 'wk9_score',
      headerName: 'Week 9',
      type: 'number',
    },
    {
      field: 'wk10_score',
      headerName: 'Week 10',
      type: 'number',
    },
    {
      field: 'wk11_score',
      headerName: 'Week 11',
      type: 'number',
    },
    {
      field: 'wk12_score',
      headerName: 'Week 12',
      type: 'number',
    },
    {
      field: 'wk13_score',
      headerName: 'Week 13',
      type: 'number',
    },
    {
      field: 'wk14_score',
      headerName: 'Week 14',
      type: 'number',
    },
    {
      field: 'wk15_score',
      headerName: 'Week 15',
      type: 'number',
    },
    {
      field: 'wk16_score',
      headerName: 'Week 16',
      type: 'number',
    },
    {
      field: 'wk17_score',
      headerName: 'Week 17',
      type: 'number',
    },
  ];


  return (
    <div className="Home" data-testid="Home">
      <CssBaseline />

      {!props.isLoggedIn && (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.paper}>
              <Typography variant="h3">
                Please login or register to see Fantasy Football data!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}

      {props.isLoggedIn && (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.paper}>
              <Typography variant="h3">
                Welcome back, {props.user.username}!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                League Standings
              </Typography>
              <div style={{ height: 500, width: '100%', marginTop: '0.5rem', }}>
                <DataGrid rows={standingsRowsProp} columns={standingsColumns} />
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    user,
    message,
  };
}

export default connect(mapStateToProps)(Home);
