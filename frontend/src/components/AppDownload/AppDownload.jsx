import React from 'react';
import './AppDownload.css';
import play_store from '../../assets/play_store.png';
import app_store from '../../assets/app_store.png';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />FoodDel App</p>
            <div className="app-download-platforms">
                <img src={play_store} alt="Get it on Google Play" />
                <img src={app_store} alt="Download on the App Store" />
            </div>
        </div>
    );
};

export default AppDownload;
