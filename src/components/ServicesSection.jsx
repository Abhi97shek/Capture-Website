import React from 'react';
import clock from "../assets/img/clock.svg"
import diaph from "../assets/img/diaphragm.svg";
import money from "../assets/img/money.svg";
import teamwork from "../assets/img/teamwork.svg";
import home2 from "../assets/img/home2.png";
const ServicesSection = () => {
  return (
        <div className='services'>
            <div className='description'>
                <h2>High <span>quility</span> services</h2>
                <div className='card'>
                <div className='card'>
                    <div className='icon'>
                        <img src={clock} alt="clock-icon" />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={diaph} alt="diaphragm-icon" />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={money} alt="money-icon" />
                        <h3>Money</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={teamwork} alt="teamwork-icon" />
                        <h3>TeamWork</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </div>
                </div>
            </div>
            <div className='image'>
                <img src={home2} alt="home2Logo" /> 
            </div>
        </div>
  );
};

export default ServicesSection;
