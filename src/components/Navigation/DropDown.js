import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import fire from '../../fire.js';
import { saveState } from '../../helpers/localStorage';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DropDown({ transition }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const signOut = () => {
    fire.auth().signOut()
  };


  const toHomeOrOther = (transitionTo) => {
    transition(transitionTo)
    saveState(transitionTo)
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <FontAwesomeIcon className="text-white fa-2x" icon={faBars} /> 
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link onClick={() => toHomeOrOther("HOME")} to="/">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <PostAddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </Link>
        <Link onClick={() => toHomeOrOther("OTHERPAGES")} to="/services">
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <PeopleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </StyledMenuItem>
        </Link>
        <Link onClick={() => toHomeOrOther("OTHERPAGES")} to='/about'>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </StyledMenuItem>
        </Link>
        <Link onClick={() => toHomeOrOther("OTHERPAGES")} to='/contact'>
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
