import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './MyTeam.css';
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, FormControl, Grid, Tabs, Typography} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import {DataGrid} from "@material-ui/data-grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    width: '100%',
  },
  editContainer: {
    marginTop: '2rem',
    // border: '1px solid rgba(0, 0, 0, 0.12)',
    // borderRadius: '6px',
    paddingBottom: '1rem',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{ marginTop: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}

const MyTeam = (props) => {
  const classes = useStyles();

  // Tabs
  const [tabsValue, setTabsValue] = useState(0);
  const handleTabsChange = (event, newValue) => {
    setTabsValue(newValue);
  }

  // DataGrid for Team View
  const teamRowsProp = [
    {
      id: 0,
      Position: 'Quarterback',
      Player: props.players.quarterbacks.length > 0 ? props.players.quarterbacks.find(player => player._id === props.user.team.quarterback).Player : '',
    },
    {
      id: 1,
      Position: 'Running Back 1',
      Player: props.players.runningBacks.length > 0 ? props.players.runningBacks.find(player => player._id === props.user.team.runningBack1).Player : '',
    },
    {
      id: 2,
      Position: 'Running Back 2',
      Player: props.players.runningBacks.length > 0 ? props.players.runningBacks.find(player => player._id === props.user.team.runningBack2).Player : '',
    },
    {
      id: 3,
      Position: 'Wide Receiver 1',
      Player: props.players.wideReceivers.length > 0 ? props.players.wideReceivers.find(player => player._id === props.user.team.wideReceiver1).Player : '',
    },
    {
      id: 4,
      Position: 'Wide Receiver 2',
      Player: props.players.wideReceivers.length > 0 ? props.players.wideReceivers.find(player => player._id === props.user.team.wideReceiver2).Player : '',
    },
    {
      id: 5,
      Position: 'Tight End',
      Player: props.players.tightEnds.length > 0 ? props.players.tightEnds.find(player => player._id === props.user.team.tightEnd).Player : '',
    },
  ];
  const teamColumns = [
    {
      field: 'id',
      hide: true,
    },
    {
      field: 'Position',
      headerName: 'Position',
      width: 250,
    },
    {
      field: 'Player',
      headerName: 'Player',
      width: 250,
    }
  ];

  // Edit Team
  const [selectedQuarterback, setSelectedQuarterback] = useState(props.user.team.quarterback);
  const [selectedRunningBack1, setSelectedRunningBack1] = useState(props.user.team.runningBack1);
  const [selectedRunningBack2, setSelectedRunningBack2] = useState(props.user.team.runningBack2);
  const [selectedWideReceiver1, setSelectedWideReceiver1] = useState(props.user.team.wideReceiver1);
  const [selectedWideReceiver2, setSelectedWideReceiver2] = useState(props.user.team.wideReceiver2);
  const [selectedTightEnd, setSelectedTightEnd] = useState(props.user.team.tightEnd);

  function canUpdateTeam() {
    // if all selections are the same, return false
    if (
      props.user.team.quarterback === selectedQuarterback &&
      props.user.team.runningBack1 === selectedRunningBack1 &&
      props.user.team.runningBack2 === selectedRunningBack2 &&
      props.user.team.wideReceiver1 === selectedWideReceiver1 &&
      props.user.team.wideReceiver2 === selectedWideReceiver2 &&
      props.user.team.tightEnd === selectedTightEnd
    ) {
      return false;
    }

    // if running backs or wide receivers are the same return false
    // else, return true
    return !(selectedRunningBack1 === selectedRunningBack2 ||
      selectedWideReceiver1 === selectedWideReceiver2);
  }

  // make sure they're logged in
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
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Tabs
                value={tabsValue}
                onChange={handleTabsChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="View Team" />
                <Tab label="Edit Team" />
              </Tabs>
            </AppBar>

            {/* View Team */}
            <TabPanel value={tabsValue} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div style={{ height: 700, width: '100%', }}>
                    <DataGrid rows={teamRowsProp} columns={teamColumns} />
                  </div>
                </Grid>
              </Grid>
            </TabPanel>

            {/* Edit Team */}
            <TabPanel value={tabsValue} index={1}>
              <Container maxWidth="md">
                <form>
                  <Grid container spacing={3} justify="center" className={classes.editContainer}>

                    {/* Quarterback */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Quarterback
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedQuarterback}
                          onChange={e => setSelectedQuarterback(e.target.value)}
                        >
                          {props.players.quarterbacks.map((qb, i) => {
                            return <MenuItem value={qb._id} key={i}>{qb.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Running Back 1 */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Running Back 1
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedRunningBack1}
                          onChange={e => setSelectedRunningBack1(e.target.value)}
                        >
                          {props.players.runningBacks.map((rb, i) => {
                            return <MenuItem value={rb._id} key={i}>{rb.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Running Back 2 */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Running Back 2
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedRunningBack2}
                          onChange={e => setSelectedRunningBack2(e.target.value)}
                        >
                          {props.players.runningBacks.map((rb, i) => {
                            return <MenuItem value={rb._id} key={i}>{rb.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Wide Receiver 1 */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Wide Receiver 1
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedWideReceiver1}
                          onChange={e => setSelectedWideReceiver1(e.target.value)}
                        >
                          {props.players.wideReceivers.map((wr, i) => {
                            return <MenuItem value={wr._id} key={i}>{wr.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Wide Receiver 2 */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Wide Receiver 2
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedWideReceiver2}
                          onChange={e => setSelectedWideReceiver2(e.target.value)}
                        >
                          {props.players.wideReceivers.map((wr, i) => {
                            return <MenuItem value={wr._id} key={i}>{wr.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Tight End */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Tight End
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={selectedTightEnd}
                          onChange={e => setSelectedTightEnd(e.target.value)}
                        >
                          {props.players.tightEnds.map((te, i) => {
                            return <MenuItem value={te._id} key={i}>{te.Player}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

                  </Grid>
                  <Grid container spacing={3} justify="flex-end">
                    <Grid item>
                      <Button
                        variant="contained"
                        disabled={!canUpdateTeam()}
                      >
                        Reset Team
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!canUpdateTeam()}
                      >
                        Update Team
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </TabPanel>
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

export default connect(mapStateToProps)(MyTeam);
