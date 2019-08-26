import React from 'react'
import Icon from '@mdi/react'
import { mdiEmail } from '@mdi/js'
import { mdiFacebook } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'
import { mdiPhone } from '@mdi/js'

const CardContact = () => {
    return (
        <div className="appContactCard">
        <p>Contact us today for a <i>Free Estimate</i></p>
            <ul className="contactList">
              <li>
                  <Icon path={mdiPhone}
                    title="Call Us !"
                    size={2}
                    horizontal
                    vertical
                    rotate={90}
                    color="black"
                    />
              </li>
              <li>
              <Icon path={mdiEmail}
                    title="Call Us !"
                    size={2}
                    color="black"
                    /></li>
              <li>
              <Icon path={mdiFacebook}
                    title="Call Us !"
                    size={2}
                    color="black"
                    />
             </li>
             <li>
                    <Icon path={mdiInstagram}
                    title="Call Us !"
                    size={2}
                    color="black"
                    />
              </li>
            </ul>
        </div>
    ) 
}

export default CardContact