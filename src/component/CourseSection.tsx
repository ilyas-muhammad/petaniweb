import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    card: {
      height: 400,
      width: 330,
      backgroundColor: '#383838',
    },
    media: {
      height: 135,
      width: 135,
      position: 'relative',
      left: '30%',
      top: '10%',
      marginBottom: '20%',
    },
    button: {
      backgroundColor: '#6D2EF5',
      color: '#fff',
    },
    typograph: {
      margin: theme.spacing(0, 0),
    },
    gridButton: {
      marginTop: theme.spacing(7),
    },
  }),
);

const ServiceSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid {...props} container>
        <Grid item md={4} xs={12} className={classes.typograph}>
          <h1>Courses</h1>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
          </Typography>
          <br />
          <Grid className={classes.gridButton} container justify="flex-start">
            <Button className={classes.button}>Selengkapnya</Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" item md={8} xs={12}>
          <img src="course-icon.png" alt="petani course" style={{ width: '80%' }} />
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
