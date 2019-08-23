import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '../Drawer'
import styles from './Navbar.module.scss'
import NavBarSwitch from '../NavBarSwitch'


export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static" className={styles.Navbar}>
        <Toolbar>
          <IconButton>
            <Drawer />
          </IconButton>
          <Typography className={styles.title}>
            APPLIED BUILDING SERVICES
          </Typography>
          <NavBarSwitch className={styles.toggleSwitch} /> 
        </Toolbar>
        
      </AppBar>
    </div>
  )
}