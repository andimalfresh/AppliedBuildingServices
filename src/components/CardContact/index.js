import React from 'react'
import styles from './cardcontact.module.scss'

const CardContact = () => {
    return (
        <div className={styles.CardContact}>
            <p>Call today for a Free Estimate</p>
            <ul className={styles.ContactList}>
              <li>Phone</li>
              <li>Email</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
        </div>
    ) 
}

export default CardContact