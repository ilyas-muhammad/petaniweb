import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0),
      },
    },
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    name: {
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
      marginTop: theme.spacing(-4),
    },
  }),
);

const TeamSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid {...props} container>
        <Grid item md={12} xs={12} container justify="center">
          <h1>Our Teammates</h1>
        </Grid>
        <Grid container justify="center" item md={12} xs={12} className={classes.root}>
          <Grid container justify="center" item xs={12} md={3}>
            <Avatar alt="Ilyas" src="ilyas.jpeg" className={classes.avatar} />
            <Grid item xs={12} className={classes.name}>
              <h3>Ilyas D Jayanto</h3>
            </Grid>
            <Grid item xs={12} className={classes.title}>
              <p>Programmer</p>
            </Grid>
          </Grid>
          <Grid container justify="center" item xs={12} md={3}>
            <Avatar alt="Aditya" src="adit.jpeg" className={classes.avatar} />
            <Grid item xs={12} className={classes.name}>
              <h3>Aditya Tegar P.</h3>
            </Grid>
            <Grid item xs={12} className={classes.title}>
              <p>Programmer</p>
            </Grid>
          </Grid>
          <Grid container justify="center" item xs={12} md={3}>
            <Avatar alt="Nadiah" src="nadiah.jpeg" className={classes.avatar} />
            <Grid item xs={12} className={classes.name}>
              <h3>Nadiah Nahdah A.</h3>
            </Grid>
            <Grid item xs={12} className={classes.title}>
              <p>Programmer</p>
            </Grid>
          </Grid>
          <Grid container justify="center" item xs={12} md={3}>
            <Avatar alt="Satria" src="satria.jpeg" className={classes.avatar} />
            <Grid item xs={12} className={classes.name}>
              <h3>Satria Perdana</h3>
            </Grid>
            <Grid item xs={12} className={classes.title}>
              <p>UI/UX Designer</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TeamSection;
