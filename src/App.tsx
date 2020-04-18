import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Copyright from './component/Copyright';
import Navbar from './component/Navbar';
import ServiceSection from './component/ServiceSection';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon, { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(0, 8),
    },
    circle: {
      width: '100%',
      position: 'relative',
      zIndex: -5,
    },
    footer: {
      width: '100%',
      position: 'absolute',
      bottom: '2%',
    },
  }),
);

function CircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2558 1073">
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
      <Grid xs={12}>
        <Navbar />
      </Grid>
      <Grid xs={12}>
        <CircleIcon className={classes.circle} />
      </Grid>
      <Container className={classes.root} maxWidth="lg">
        <ServiceSection />
      </Container>
      <Copyright className={classes.footer} />
    </>
  );
}
