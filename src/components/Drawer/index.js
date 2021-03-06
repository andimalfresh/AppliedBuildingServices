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
import { mdiFacebook } from '@mdi/js'

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
    left: false,
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
              title="Call us Today"
              size={2}
              color="black"
            />
              <a alt="Call us" rel="noopener noreferrer" target="_blank" href="tel:+19705319665">
                CALL
              </a>
          </ListItem>
          <ListItem className="drawerListItem">
              <Icon path={mdiEmail}
              title="Send us an Email"
              size={2}
              color="black"
              />  
            <a alt="Send Us an email" href="mailto:wandrewpedersen@gmail.com?Subject=Development%20question..." rel="noopener noreferrer" target="_blank">
              EMAIL
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
          <Icon path={mdiFacebook}
              title="Add us on Facebook"
              size={2}
              color="black"
              />
            <a alt="Add Us on Facebook" rel="noopener noreferrer"  target="_blank" href="https://instagram.com/andimalfresh/">
              FACEBOOK
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
              <Icon path={mdiInstagram}
              title="Add us on Instagram"
              size={2}
              color="black"
              />
            <a alt="Add us on Instagram" rel="noopener noreferrer" target="_blank" href="https://instagram.com/andimalfresh/">
              INSTAGRAM
            </a>
          </ListItem>
          <ListItem className="drawerListItem">
          <Icon path={mdiGoogle}
              title="Check us out on Google"
              size={2}
              color="black"
              />
            <a alt="Check us out on Google" rel="noopener noreferrer" target="_blank" href="https://instagram.com/andimalfresh/">
              GOOGLE
            </a>
          </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon className={classes.menuButton} color="secondary"/></Button>
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