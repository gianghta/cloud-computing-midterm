import React from 'react';
import PropTypes from 'prop-types';
import './GlobalToolbar.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";


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

const GlobalToolbar = () => {
  const classes = useStyles();

  return (
    <div className="GlobalToolbar" data-testid="GlobalToolbar">
      <CssBaseline/>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Fantasy Football
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Players
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              My Team
            </Link>
          </nav>
          <Button href="/login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

GlobalToolbar.propTypes = {};

GlobalToolbar.defaultProps = {};

export default GlobalToolbar;
