import React from 'react'
import './HomePage.css'
import pageVideo from '../../images/web-video.mp4'

function HomePage() {
    return (
        <div className="HomePage__main">
            <video className='videoTag' autoPlay loop muted>
                <source src={pageVideo} type='video/mp4' />
            </video>
            <div className='home__text'>
                <h1>Revolucionamos</h1>
                <p>el proceso de suministrar</p>
                <p>productos químicos en las Américas.</p>
            </div>

        </div>
    )
}

export default HomePage