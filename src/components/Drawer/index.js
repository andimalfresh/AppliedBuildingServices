import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import MenuIcon from '@material-ui/icons/Menu'
import Icon from '@mdi/react'
import { mdiEmail } from '@mdi/js'
import { mdiGoogle } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiPhone } from '@mdi/js'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Divider />
      <List>
          <ListItem className="drawerListItem">
            <Icon path={mdiPhone}
              title="Call Us !"
              size={2}
              color="black"
            />
              <a rel="noopener noreferrer" target="_blank" href="tel:+19705319665">
                CALL
              </a>
          </ListItem>
          <ListItem className="drawerListItem">
              <Icon path={mdiEmail}
              title="Call Us !"
              size={2}
              color="black"
              />  
            <a href="mailto:wandrewpedersen@gmail.com?Subject=Development%20question..." rel="noopener noreferrer" target="_blank">
              EMAIL
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
          <Icon path={mdiGoogle}
              title="Call Us !"
              size={2}
              color="black"
              />
            <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/andimalfresh/">
              FACEBOOK
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
              <Icon path={mdiInstagram}
              title="Call Us !"
              size={2}
              color="black"
              />
            <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/andimalfresh/">
              INSTAGRAM
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
          <Icon path={mdiGoogle}
              title="Call Us !"
              size={2}
              color="black"
              />
            <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/andimalfresh/">
              GOOGLE
            </a>
          </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
      </SwipeableDrawer>
    </div>
  )
}