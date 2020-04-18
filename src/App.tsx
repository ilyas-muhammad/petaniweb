import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Copyright from './component/Copyright';
import Navbar from './component/Navbar';
import ServiceSection from './component/ServiceSection';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon, { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(10, 8),
    },
    circle: {
      width: '100%',
      position: 'relative',
      [theme.zIndex.drawer]: -5,
    },
    footer: {
      width: '100%',
      position: 'absolute',
      bottom: '-5%',
    },
    masterServiceSection: {
      position: 'absolute',
      top: '30%',
    },
  }),
);

function CircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2558 1073" z-index="-1">
        <g transform="translate(93 34)" fill="#f5802e">
          <circle cx="394" cy="394" r="394" transform="translate(2107 -244)" opacity=".6" />
          <circle cx="93" cy="93" r="93" transform="translate(-103 643)" opacity=".37" />
        </g>
      </svg>
    </Icon>
  );
}

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <CircleIcon className={classes.circle} />
      </Grid>
      <Grid container justify="center" className={classes.masterServiceSection}>
        <Grid item md={10} xs={10}>
          <ServiceSection />
        </Grid>
        <Container className={classes.root} maxWidth="lg">
          <Typography>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No.
          </Typography>
        </Container>
        <Copyright className={classes.footer} />
      </Grid>
    </>
  );
}
