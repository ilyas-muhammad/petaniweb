import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    center: {
      marginTop: 10,
    },
    image: {
      alignItems: 'center',
      width: '50%',
      marginTop: 100,
    },
  }),
);

const ServiceSection = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <img className={classes.image} src="PetaniWeb-Horizontal.png" alt="petaniweb" />
    </Box>
  );
};

export default ServiceSection;
