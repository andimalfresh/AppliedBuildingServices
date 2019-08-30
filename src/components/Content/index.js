import React from 'react'
import CardAbout from '../CardAbout'
import CardContact from '../CardContact'

const Content = () => {
    return (
         <div className="appContent">
            <div className="topGallery">
                <a rel="noopener noreferrer" target="_blank" href="te +19705317626">
                    <img src={require('../../ABSlogo.jpg')} alt="Business Logo" />
                </a> 
            </div>
            <div className="cardContainer">
                <CardAbout />
                <CardContact />
            </div>
         </div>
    )
}


export default Content 