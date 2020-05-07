import React from 'react';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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
    card: {
      height: 430,
      width: '100%',
      backgroundColor: '#383838',
      zIndex: 10,
    },
    media: {
      height: 135,
      width: 135,
      position: 'relative',
      left: '30%',
      top: '10%',
      marginBottom: '20%',
    },
    content: {
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(-1),
      },
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
        <Grid container item md={8} xs={12} className={classes.about} justify="center">
          <Typography>
            PetaniWeb is a team driven by user-oriented creative freelancers who will provide technology solutions for
            your company&apos;s needs.
          </Typography>
        </Grid>
        <Grid className={classes.content} container direction="row" alignItems="center" spacing={1}>
          <Grid item md={4} xs={10}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image="webdevicon.png" title="Web Development" />
              <CardContent>
                <Typography gutterBottom variant="h4" color="textSecondary" align="center">
                  Web Development
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" align="center">
                  We understands the importance of a professional website design and how to appeal to your clients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={10}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image="mobileappsicon.png" title="Web Development" />
              <CardContent>
                <Typography gutterBottom variant="h4" color="textSecondary" align="center">
                  Mobile Apps
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" align="center">
                  Keep connected with your customer everywhere. Cross platform, Android and IOS Apps of your company is
                  ready to go.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} xs={10}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image="api-icon.png" title="Web Development" />
              <CardContent>
                <Typography gutterBottom variant="h4" color="textSecondary" align="center">
                  Web Service & API
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" align="center">
                  Integrate Third Party Library, Online Payment, or make specific services of your company with
                  high-availability, reliability, fast and secure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceSection;
