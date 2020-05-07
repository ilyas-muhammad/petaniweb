import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon, { IconProps } from '@material-ui/core/Icon';
import Copyright from './component/Copyright';
import Navbar from './component/Navbar';
import ServiceSection from './component/ServiceSection';
import ProjectSection from './component/ProjectSection';
import TestimonialSection from './component/TestimonialSection';
import CourseSection from './component/CourseSection';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(10, 8),
    },
    circle: {
      width: '100%',
      position: 'static',
    },
    footer: {
      width: '100%',
      position: 'absolute',
      bottom: '-5%',
    },
    masterSection: {
      position: 'absolute',
      top: '30%',
    },
    projectSection: {
      marginTop: theme.spacing(15),
      [theme.breakpoints.up('sm')]: {
        zIndex: 2,
        position: 'absolute',
        top: '28%',
        left: '0%',
      },
    },
    projectCircle: {
      width: '100%',
      position: 'static',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    dividerEachSection: {
      marginTop: theme.spacing(10),
    },
    testiSection: {
      [theme.breakpoints.up('sm')]: {
        zIndex: 2,
        position: 'absolute',
        top: '58%',
        left: '15%',
      },
      [theme.breakpoints.down('sm')]: {
        zIndex: 2,
        position: 'absolute',
        top: '75.5%',
        left: '15%',
      },
      textAlign: 'justify',
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

const CircleOnProject = (props: IconProps) => {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="100%" viewBox="0 0 938 914">
        <g transform="translate(0 -1456)" fill="#f5802e">
          <circle cx="288" cy="288" r="288" transform="translate(0 1456)" opacity=".83" />
          <circle cx="86" cy="86" r="86" transform="translate(766 2198)" opacity=".37" />
        </g>
      </svg>
    </Icon>
  );
};

const CircleTestimonial = (props: IconProps) => {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2368 1058">
        <g transform="translate(246 -2581)" fill="#f5802e">
          <circle cx="233" cy="233" r="233" transform="translate(-446 2581)" opacity=".83" />
          <circle cx="288" cy="288" r="288" transform="translate(1846 2963)" opacity=".83" />
          <circle cx="146" cy="146" r="146" transform="translate(1551 2690)" opacity=".37" />
        </g>
      </svg>
    </Icon>
  );
};

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
      <Grid container justify="center" className={classes.masterSection}>
        <Grid item md={10} xs={10}>
          <ServiceSection />
        </Grid>
        <Grid className={classes.dividerEachSection} container justify="flex-start" item md={10} xs={10}>
          <Grid container justify="center" item md={10} xs={12}>
            <ProjectSection className={classes.projectSection} />
          </Grid>
          <Grid item xs={6}>
            <CircleOnProject className={classes.projectCircle} />
          </Grid>
        </Grid>
        <Container className={classes.root}></Container>

        {/* Testimonial Section */}
        <Grid className={classes.dividerEachSection} container justify="center" item md={12} xs={12}>
          <Grid item xs={12}>
            <CircleTestimonial />
          </Grid>
          <Grid container justify="center" item md={10} xs={10}>
            <TestimonialSection className={classes.testiSection} />
          </Grid>
        </Grid>

        {/* Course Section */}
        <Grid className={classes.dividerEachSection} container justify="center" item md={12} xs={12}>
          <Grid container justify="center" item md={10} xs={10}>
            <CourseSection />
          </Grid>
        </Grid>
        <Copyright className={classes.footer} />
      </Grid>
    </>
  );
}
