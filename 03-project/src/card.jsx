import React from 'react';
import './card.css'

const Card=()=>{
    return(
        <div className ='my-card'>
            <div className='header'>
                <h1 className='Header-text'>Web Design</h1>
                <h3 className='subtitle'>Crafts engineering, user-friendly websites. </h3>
                <p className='lower-subtitle'>Craft functional and scalable insights</p>
            </div>
            <div className='properties'>  
                <button className='land-page'>Landing Page</button>
                <button className='site'>Website</button>
                <button className='onpage'>On-Page</button>
            </div>
            <div className='footer'>
                <h3 className='explore-btn'>Explore</h3>
                <button className='apply-btn'>ApplyNow</button>
            </div>
        </div>
    )
}
export default Card;