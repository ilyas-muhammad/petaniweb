import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    center: {
      marginTop: 10,
    },
    image: {
      alignItems: 'center',
      width: '100%',
      zIndex: 5,
    },
    about: {
      width: '60%',
      zIndex: 5,
      textAlign: 'center',
      margin: theme.spacing(5, 0),
    },
    paper: {
      height: 440,
      width: 330,
      backgroundColor: '#383838',
      zIndex: 10,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const ServiceSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid {...props} container justify="center" className={classes.root}>
        <Grid container justify="center">
          <Grid item md={6} xs={10}>
            <img className={classes.image} src="PetaniWeb-Horizontal.png" alt="petaniweb" />
          </Grid>
        </Grid>
        <Grid item md={8} xs={12} className={classes.about} justify="center">
          <Typography>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No.
          </Typography>
        </Grid>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper color="secondary" className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
