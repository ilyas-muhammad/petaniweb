import React from 'react';
import { Button, MenuItem } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonAppBarCollapse from './ButtonAppBarCollapse';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      right: 0,
    },
    buttonBar: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
        background: '#000',
      },
      margin: '10px',
      paddingLeft: '20px',
      right: 5,
      position: 'relative',
      width: '100%',
      background: 'transparent',
    },
    capitalize: {
      textTransform: 'capitalize',
      fontSize: '2.5vh',
    },
  }),
);

const AppBarCollapse = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        <MenuItem>Home</MenuItem>
        <MenuItem>Service</MenuItem>
        <MenuItem>Project</MenuItem>
        <MenuItem>Course</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact</MenuItem>
      </ButtonAppBarCollapse>
      <div className={classes.buttonBar} id="appbar-collapse">
        <Button className={classes.capitalize} color="inherit">
          Home
        </Button>
        <Button className={classes.capitalize} color="inherit">
          Service
        </Button>
        <Button className={classes.capitalize} color="inherit">
          Project
        </Button>
        <Button className={classes.capitalize} color="inherit">
          Course
        </Button>
        <Button className={classes.capitalize} color="inherit">
          About Us
        </Button>
        <Button className={classes.capitalize} color="inherit">
          Contact
        </Button>
      </div>
    </div>
  );
};
export default AppBarCollapse;
