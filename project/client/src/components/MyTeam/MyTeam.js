import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import './MyTeam.css';
import { connect } from 'react-redux';
import {Redirect} from "react-router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Container, Grid, Tabs, Typography} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import {DataGrid} from "@material-ui/data-grid";
// import TabPanel from "@material-ui/lab/TabPanel";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  // DataGrid
  const teamRowsProp = [];
  const teamColumns = [
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
            <TabPanel value={tabsValue} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div style={{ height: 700, width: '100%', }}>
                    <DataGrid rows={teamRowsProp} columns={teamColumns} />
                  </div>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabsValue} index={1}>
              Item 2
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

  return {
    isLoggedIn,
    user,
  };
}

export default connect(mapStateToProps)(MyTeam);
