import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '../Drawer'
import NavBarSwitch from '../NavBarSwitch'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};


 function ButtonAppBar(props) {

  const { classes, children, className, ...other } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={clsx(classes.root, className)} {...other}>
          <IconButton>
            <Drawer />
          </IconButton>
          <Typography className="Test">
            APPLIED BUILDING SERVICES
          </Typography>
          <NavBarSwitch className="Test" /> 
        </Toolbar>
        
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ButtonAppBar)