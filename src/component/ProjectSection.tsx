import React from 'react';
import { Grid, Card, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
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
    ourProject: {},
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
        <Grid container justify="center" item md={6} xs={12}>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image="petaniweb.ico" title="Web Development" />
            <CardContent>
              <Typography gutterBottom variant="h4" color="textSecondary" align="center">
                Petaniweb
              </Typography>
              <Typography variant="body1" color="textPrimary" component="p" align="center">
                Keep connected with your customer everywhere. Cross platform, Android and IOS Apps of your company is
                ready to go.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={5} xs={12} className={classes.typograph}>
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
