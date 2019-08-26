import React from 'react'
import CardAbout from '../CardAbout'
import CardContact from '../CardContact'

const Content = () => {
    return (
         <div className="appContent">
            <div className="topGallery">
                <p>CALL TODAY @970.531.9665</p>  
            </div>
            <div className="cardContainer">
                <CardAbout />
                <CardContact />
            </div>
         </div>
    )
}


export default Content 