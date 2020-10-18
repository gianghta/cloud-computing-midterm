import React from 'react';
// import PropTypes from 'prop-types';
import './Players.css';
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, Grid, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { trimName } from '../../helpers/nameTrimmer';
import MaterialTable from "material-table";


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
      hidden: true,
    },
    {
      field: 'Player',
      title: 'Name',
    },
    {
      field: 'Tm',
      title: 'Team',
    },
    {
      field: 'Yds',
      title: 'Passing Yards',
      type: 'numeric',
    },
    {
      field: 'TD',
      title: 'Touchdowns',
      type: 'numeric',
    },
    {
      field: 'Int',
      title: 'Interceptions',
      type: 'numeric',
    },
    {
      field: 'QBR',
      title: 'Quarterback Rating',
      type: 'numeric',
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
      hidden: true,
    },
    {
      field: 'Player',
      title: 'Name',
    },
    {
      field: 'Tm',
      title: 'Team',
    },
    {
      field: 'Yds',
      title: 'Total Yards',
      type: 'numeric',
    },
    {
      field: 'Lng',
      title: 'Longest Run',
      type: 'numeric',
    },
    {
      field: 'Y/G',
      title: 'Yards per Game',
      type: 'numeric',
    },
    {
      field: 'Fmb',
      title: 'Fumbles',
      type: 'numeric',
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
      hidden: true,
    },
    {
      field: 'Player',
      title: 'Name',
    },
    {
      field: 'Tm',
      title: 'Team',
    },
    {
      field: 'Yds',
      title: 'Total Yards',
      type: 'numeric',
    },
    {
      field: 'Rec',
      title: 'Receptions',
      type: 'numeric',
    },
    {
      field: 'Ctch%',
      title: 'Catch Percentage',
      type: 'numeric',
    },
    {
      field: 'Lng',
      title: 'Longest Catch',
      type: 'numeric',
    },
    {
      field: 'Y/G',
      title: 'Yards per Game',
      type: 'numeric',
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
      hidden: true,
    },
    {
      field: 'Player',
      title: 'Name',
    },
    {
      field: 'Tm',
      title: 'Team',
    },
    {
      field: 'Yds',
      title: 'Total Yards',
      type: 'numeric',
    },
    {
      field: 'Rec',
      title: 'Receptions',
      type: 'numeric',
    },
    {
      field: 'Ctch%',
      title: 'Catch Percentage',
      type: 'numeric',
    },
    {
      field: 'Lng',
      title: 'Longest Catch',
      type: 'numeric',
    },
    {
      field: 'Y/G',
      title: 'Yards per Game',
      type: 'numeric',
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
            <div style={{ width: '100%', marginTop: '0.5rem', }}>
              <MaterialTable
                title={'Quarterbacks'}
                isLoading={quarterbackRowsProp.length === 0}
                columns={quarterbackColumns}
                data={quarterbackRowsProp}
              />
            </div>
          </Grid>

          {/* Running Backs */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Running Backs
            </Typography>
            <div style={{ width: '100%', marginTop: '0.5rem', }}>
              <MaterialTable
                title={'Running Backs'}
                isLoading={runningBackRowsProp.length === 0}
                columns={runningBackColumns}
                data={runningBackRowsProp}
              />
            </div>
          </Grid>

          {/* Wide Receivers */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Wide Receivers
            </Typography>
            <div style={{ width: '100%', marginTop: '0.5rem', }}>
              <MaterialTable
                title={'Wide Receivers'}
                isLoading={wideReceiverRowsProp.length === 0}
                columns={wideReceiverColumns}
                data={wideReceiverRowsProp}
              />
            </div>
          </Grid>

          {/* Tight Ends */}
          <Grid item xs={12}>
            <Typography variant="h5">
              Tight Ends
            </Typography>
            <div style={{ width: '100%', marginTop: '0.5rem', }}>
              <MaterialTable
                title={'Tight Ends'}
                isLoading={tightEndRowsProp.length === 0}
                columns={tightEndColumns}
                data={tightEndRowsProp}
              />
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
