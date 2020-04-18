import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { MenuOutlined as MenuIcon } from '@material-ui/icons';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    buttonCollapse: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      margin: '10px',
      boxShadow: 'none',
    },
    icon: {
      color: '#ffffff',
      opacity: 0.6,
    },
  }),
);

const ButtonAppBarCollapse = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const classes = styles();

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        {...props}
      ></Menu>
    </div>
  );
};
export default ButtonAppBarCollapse;
