import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Rea</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Arya.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on a upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautiful places to see on a upcoming road trip</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>
                Rea-AI Powered by Gemini may display inacurrate info, including about people, so double-check its responses. Your Privacy and Rea Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
