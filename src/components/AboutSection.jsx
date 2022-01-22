import React from 'react';
import home1 from "../assets/img/home1.png";
import { motion } from 'framer-motion';
import {About,Description,Hide,Image } from "../styles";
import { titleAnim,fade,imgAnim} from '../pages/animation';
import Wave from './Wave';
const AboutSection = () => {
  return (
      <About>
            <Description>
                <motion.div className='title'>
                        <Hide>
                            <motion.h2 variants={titleAnim}>We work to make</motion.h2> 
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim}>true.</motion.h2>
                        </Hide>
                        <motion.p variants={fade}>Contact us for any photography or videography ideas that you have.We have professionals with amazing skills</motion.p>
                        <motion.button variants={fade}>Contact Us</motion.button>
                </motion.div>
            </Description>
            <Image>
                <motion.img variants={imgAnim} src={home1} alt="home_image" />
            </Image>
            <Wave />
      </About>
  )
};

// Styled Components




export default AboutSection;
