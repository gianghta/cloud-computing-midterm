import React from 'react';
// import PropTypes from 'prop-types';
import './Players.css';
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, Grid, Typography} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { trimName } from '../../helpers/nameTrimmer';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Players = (props) => {
  const classes = useStyles();

  // quarterback
  function formatQuarterbackRows(quarterbacks) {
    return quarterbacks.map(qb => {
      return {
        'id': qb['_id'],
        'Player': trimName(qb['Player']),
        'Tm': qb['Tm'],
        'Yds': qb['Yds'],
        'TD': qb['TD'],
        'Int': qb['Int'],
        'QBR': qb['QBR'],
      };
    });
  }
  const quarterbackRowsProp = formatQuarterbackRows(props.players.quarterbacks);
  const quarterbackColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'Player',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'Tm',
      headerName: 'Team',
    },
    {
      field: 'Yds',
      headerName: 'Passing Yards',
      type: 'number',
      width: 150,
    },
    {
      field: 'TD',
      headerName: 'Touchdowns',
      type: 'number',
      width: 150,
    },
    {
      field: 'Int',
      headerName: 'Interceptions',
      type: 'number',
      width: 150,
    },
    {
      field: 'QBR',
      headerName: 'Quarterback Rating',
      type: 'number',
      width: 200,
    },
  ];

  // running back
  function formatRunningBackRows(runningBacks) {
    return runningBacks.map(rb => {
      return {
        'id': rb['_id'],
        'Player': trimName(rb['Player']),
        'Tm': rb['Tm'],
        'Yds': rb['Yds'],
        'Lng': rb['Lng'],
        'Y/G': rb['Y/G'],
        'Fmb': rb['Fmb'],
      };
    });
  }
  const runningBackRowsProp = formatRunningBackRows(props.players.runningBacks);
  const runningBackColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'Player',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'Tm',
      headerName: 'Team',
    },
    {
      field: 'Yds',
      headerName: 'Total Yards',
      type: 'number',
      width: 150,
    },
    {
      field: 'Lng',
      headerName: 'Longest Run',
      type: 'number',
      width: 150,
    },
    {
      field: 'Y/G',
      headerName: 'Yards per Game',
      type: 'number',
      width: 150,
    },
    {
      field: 'Fmb',
      headerName: 'Fumbles',
      type: 'number',
      width: 150,
    },
  ];

  // wide receiver
  function formatWideReceiverRows(wideReceivers) {
    return wideReceivers.map(wr => {
      return {
        'id': wr['_id'],
        'Player': trimName(wr['Player']),
        'Tm': wr['Tm'],
        'Yds': wr['Yds'],
        'Rec': wr['Rec'],
        'Ctch%': wr['Ctch%'],
        'Lng': wr['Lng'],
        'Y/G': wr['Y/G'],
      };
    });
  }
  const wideReceiverRowsProp = formatWideReceiverRows(props.players.wideReceivers);
  const wideReceiverColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'Player',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'Tm',
      headerName: 'Team',
    },
    {
      field: 'Yds',
      headerName: 'Total Yards',
      type: 'number',
      width: 150,
    },
    {
      field: 'Rec',
      headerName: 'Receptions',
      type: 'number',
      width: 150,
    },
    {
      field: 'Ctch%',
      headerName: 'Catch Percentage',
      width: 150,
    },
    {
      field: 'Lng',
      headerName: 'Longest Catch',
      type: 'number',
      width: 150,
    },
    {
      field: 'Y/G',
      headerName: 'Yards per Game',
      type: 'number',
      width: 150,
    },
  ];

  // tight end
  function formatTightEndRows(tightEnds) {
    return tightEnds.map(te => {
      return {
        'id': te['_id'],
        'Player': trimName(te['Player']),
        'Tm': te['Tm'],
        'Yds': te['Yds'],
        'Rec': te['Rec'],
        'Ctch%': te['Ctch%'],
        'Lng': te['Lng'],
        'Y/G': te['Y/G'],
      };
    });
  }
  const tightEndRowsProp = formatTightEndRows(props.players.tightEnds);
  const tightEndColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'Player',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'Tm',
      headerName: 'Team',
    },
    {
      field: 'Yds',
      headerName: 'Total Yards',
      type: 'number',
      width: 150,
    },
    {
      field: 'Rec',
      headerName: 'Receptions',
      type: 'number',
      width: 150,
    },
    {
      field: 'Ctch%',
      headerName: 'Catch Percentage',
      width: 150,
    },
    {
      field: 'Lng',
      headerName: 'Longest Catch',
      type: 'number',
      width: 150,
    },
    {
      field: 'Y/G',
      headerName: 'Yards per Game',
      type: 'number',
      width: 150,
    },
  ];

  if (!props.isLoggedIn) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <div className="Players" data-testid="Players">
      <CssBaseline />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.paper}>
            <Typography variant="h3">
              Players
            </Typography>
          </Grid>

          {/* Quarter Backs */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Quarter Backs
            </Typography>
            <div style={{ height: 500, width: '100%', marginTop: '0.5rem', }}>
              <DataGrid rows={quarterbackRowsProp} columns={quarterbackColumns} />
            </div>
          </Grid>

          {/* Running Backs */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Running Backs
            </Typography>
            <div style={{ height: 500, width: '100%', marginTop: '0.5rem', }}>
              <DataGrid rows={runningBackRowsProp} columns={runningBackColumns} />
            </div>
          </Grid>

          {/* Wide Receivers */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Wide Receivers
            </Typography>
            <div style={{ height: 500, width: '100%', marginTop: '0.5rem', }}>
              <DataGrid rows={wideReceiverRowsProp} columns={wideReceiverColumns} />
            </div>
          </Grid>

          {/* Tight Ends */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Tight Ends
            </Typography>
            <div style={{ height: 500, width: '100%', marginTop: '0.5rem', }}>
              <DataGrid rows={tightEndRowsProp} columns={tightEndColumns} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Players.propTypes = {};

Players.defaultProps = {};

function mapStateToProps(state) {
  const { isLoggedIn, user } = state.auth;
  const {
    quarterbacks,
    runningBacks,
    tightEnds,
    wideReceivers,
  } = state.players;

  return {
    isLoggedIn,
    user,
    players: {
      quarterbacks,
      runningBacks,
      tightEnds,
      wideReceivers,
    },
  };
}

export default connect(mapStateToProps)(Players);
