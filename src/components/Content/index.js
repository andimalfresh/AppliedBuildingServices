import React from 'react'
import styles from './content.module.scss'
import CardAbout from '../CardAbout'
import CardContact from '../CardContact'

const Content = () => {
    return (
         <div className={styles.contentContainer}>
            <div className={styles.topGallery}>
                <p>CALL TODAY @ 970.531.9665</p>  
            </div>
            <div className={styles.cardContainer}>
                <CardAbout />
                <CardContact />
            </div>
         </div>
    )
}


export default Content 