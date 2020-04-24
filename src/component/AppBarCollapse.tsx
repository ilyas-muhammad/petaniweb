import React from 'react';
import { Button } from '@material-ui/core';
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
        color: '#fff',
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
      color: 'secondary',
    },
  }),
);

const AppBarCollapse = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse />
      <div className={classes.buttonBar} id="appbar-collapse">
        <Button className={classes.capitalize}>Home</Button>
        <Button className={classes.capitalize}>Service</Button>
        <Button className={classes.capitalize}>Project</Button>
        <Button className={classes.capitalize}>Course</Button>
        <Button className={classes.capitalize}>About Us</Button>
        <Button className={classes.capitalize}>Contact</Button>
      </div>
    </div>
  );
};
export default AppBarCollapse;
