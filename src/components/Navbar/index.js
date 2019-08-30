import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '../Drawer'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: '#000',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  menuButton: {
    color: 'white'
  }
};


 function ButtonAppBar(props) {

  const { classes, children, className, ...other } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={clsx(classes.root, className)} {...other}>
          <IconButton edge="start" className={classes.menuButton} color="primary">
            <Drawer />
          </IconButton>
          <Typography className="Test">
            CALL TODAY 970.531.7276
          </Typography>
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