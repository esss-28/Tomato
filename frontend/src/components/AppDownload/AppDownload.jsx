import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
            <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
                    <img src={assets.play_store} alt="Play Store" onClick={() => openSocialMediaLink("https://play.google.com/store/games")} />
                </a>
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.app_store} alt="App Store" onClick={() => openSocialMediaLink("https://www.apple.com/in/app-store/")} />
                </a>
            </div>
        </div>
    )
}

export default AppDownload
