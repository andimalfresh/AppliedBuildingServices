import React from 'react'
import styles from './cardabout.module.scss'

const CardAbout = () =>{
    return (
        <div className={styles.CardAbout}>
            <h2>This is the CardAbout Component</h2>
            <div className={styles.CardAboutText}>
                <div className= {styles.CardAboutImage}></div>
                <p>Lorem Ninja Ipsum
                Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praese</p>
            </div>
        </div>
    )
}

export default CardAbout