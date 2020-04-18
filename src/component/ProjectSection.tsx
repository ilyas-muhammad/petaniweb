import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 9),
    },
    paper: {
      height: 520,
      width: 390,
      backgroundColor: '#383838',
      zIndex: 10,
    },
    ourProject: {
      margin: theme.spacing(0, 9),
    },
    button: {
      backgroundColor: '#6D2EF5',
      color: '#fff',
    },
    gridButton: {
      marginTop: theme.spacing(10, 0),
    },
  }),
);

const ServiceSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid {...props} container justify="center" className={classes.root} spacing={9}>
        <Grid item xs={4}>
          <Paper color="secondary" className={classes.paper} />
        </Grid>
        <Grid item xs={6} className={classes.ourProject}>
          <h1>Our Project</h1>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
          </Typography>
          <br />
          <Typography>
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
          <Grid className={classes.gridButton} container justify="flex-end">
            <Button className={classes.button}>Selengkapnya</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
