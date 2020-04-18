import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import AppBarCollapse from './AppBarCollapse';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(0, 0, 0, 3),
    },
    flex: {
      flex: 1,
    },
    logo: {
      width: '25vh',
    },
  }),
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static" elevation={0} color="secondary">
      <Toolbar>
        <img className={classes.logo} alt="petaniweb" src="PetaniWeb-logo.png" />
        <AppBarCollapse />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
