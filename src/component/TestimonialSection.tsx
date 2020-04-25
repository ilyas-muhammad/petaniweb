import React from 'react';
import Slider from 'react-slick';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      height: '20vw',
      width: '70%',
      backgroundColor: '#383838',
    },
  }),
);

const settings = {
  dots: true,
  infinite: true,
  autoPlay: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial(props) {
  const classes = useStyles();
  return (
    <div {...props} style={{ width: '100%' }}>
      <h1>Testimonial</h1>
      <Slider {...settings}>
        <div>
          <Paper className={classes.paper} />
        </div>
      </Slider>
    </div>
  );
}
