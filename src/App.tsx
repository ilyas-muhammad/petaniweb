import React from 'react';
import Container from '@material-ui/core/Container';
import ProTip from './component/ProTip';
import Copyright from './component/Copyright';
import Navbar from './component/Navbar';
import ServiceSection from './component/ServiceSection';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(0, 8),
    },
  }),
);

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.root} maxWidth="lg">
        <ServiceSection />

        <ProTip />
      </Container>

      <Copyright />
    </>
  );
}
