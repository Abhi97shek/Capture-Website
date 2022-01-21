import React from 'react';
import clock from "../assets/img/clock.svg"
import diaph from "../assets/img/diaphragm.svg";
import money from "../assets/img/money.svg";
import teamwork from "../assets/img/teamwork.svg";
import home2 from "../assets/img/home2.png";
import { About,Description,Image } from '../styles';
import styled from 'styled-components';
const ServicesSection = () => {
  return (
        <Services>
            <Description>
                <h2>High <span>quility</span> services</h2>
                <Cards>
                <Card>
                    <div className='icon'>
                        <img src={clock} alt="clock-icon" />
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={diaph} alt="diaphragm-icon" />
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={money} alt="money-icon" />
                        <h3>Money</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </Card>
                <Card>
                    <div className='icon'>
                        <img src={teamwork} alt="teamwork-icon" />
                        <h3>TeamWork</h3>
                    </div>
                    <p>Lorem ipsum sit amet.</p>
                </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2Logo" /> 
            </Image>
        </Services>
  );
};

const Services = styled(About)`

        h2{
            padding-bottom: 5rem;
        }
        p{
            width:70%;
            padding:2rem 0rem 4rem 0rem;
        }

`;

const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;
     
`;

const Card = styled.div`
        flex-basis:20rem;
            .icon{
                display:flex;
                align-items:center;
            }
            h3{
                margin-left: 1rem;
                background-color: white;
                color: black;
                padding: 1rem;
            }

`;

export default ServicesSection;
