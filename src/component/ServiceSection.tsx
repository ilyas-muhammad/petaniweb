import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    center: {
      marginTop: 10,
    },
    image: {
      alignItems: 'center',
      width: '50%',
      zIndex: 2,
      position: 'absolute',
      top: '18%',
    },
    about: {
      width: '60%',
      zIndex: 2,
      position: 'absolute',
      top: '40%',
      textAlign: 'center',
    },
  }),
);

const ServiceSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="center">
        <img className={classes.image} src="PetaniWeb-Horizontal.png" alt="petaniweb" />
        <Typography className={classes.about}>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No.
        </Typography>
      </Box>
    </>
  );
};

export default ServiceSection;
