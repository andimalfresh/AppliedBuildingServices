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
                    <a rel="noopener noreferrer" target="_blank" href="tel:+19705319665">
                        <Icon path={mdiPhone}
                            title="Call Us !"
                            size={2}
                            horizontal
                            vertical
                            rotate={90}
                            color="white"
                            />
                    </a>
                </li>
              <li>
                <a href="mailto:wandrewpedersen@gmail.com?Subject=Development%20question..." rel="noopener noreferrer" target="_blank">
                        <Icon path={mdiEmail}
                                title="Send an Email"
                                size={2}
                                color="white"
                                />
                </a>
                </li>
                <li>
                    <a rel="noopener noreferrer"  target="_blank" href="https://instagram.com/andimalfresh/">
                            <Icon path={mdiFacebook}
                                    title="Add us on Facebook"
                                    size={2}
                                    color="white"
                                    />
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer"  target="_blank" href="https://instagram.com/andimalfresh/">
                            <Icon path={mdiInstagram}
                            title="Add us on Instagram"
                            size={2}
                            color="white"
                            />
                    </a>
                </li>
            </ul>
        </div>
    ) 
}

export default CardContact