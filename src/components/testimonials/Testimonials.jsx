import React, { useState } from 'react'
import { testimonialsData } from '../../dummyData/TestimonialsData'
import "./testimonials.scss"
import leftArrow from "../../images/leftArrow.png"
import rightArrow from "../../images/rightArrow.png"
import { motion } from 'framer-motion'

export default function Testimonials() {

const transition = {type: "spring", duration: 3}
const [selected, setSelected] = useState(0);
const tLength = testimonialsData.length;

  return (
    <>
        <div className='Testimonials' id='testimonials'>
            <div className='left__t'>
                <span className='one'>Testimonials</span>
                <span className='stroke-text two'>What they</span>
                <span className='two'>say about us</span>
                <motion.span 
                key={selected}
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x:0 }}
                exit={{opacity: 0, x: 100}}
                transition={transition}
                className='text'>
                    {testimonialsData[selected].review}
                </motion.span>

                <span>
                    <span style={{color: "var(--orange)"}}>
                        {testimonialsData[selected].name}
                    </span>{"  "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right__t'>
                <motion.div 
                initial={{opacity: 0, x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{ opacity: 1, x: 0 }}
                className='one_div'></motion.div>

                <motion.div 
                initial={{opacity: 0, x: 100}}
                transition={{...transition, duration: 2}}
                whileInView={{ opacity: 1, x: 0 }}
                className='two_div'></motion.div>

                <motion.img 
                key={selected}
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x:0 }}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                src={testimonialsData[selected].image} alt='img' className='right__img'/>

                <div className='arrows'>
                    <img 
                    onClick={()=> { selected === 0 ? setSelected(tLength - 1) : setSelected((prev)=> prev - 1)}}
                    src={leftArrow} alt="img" />
                    <img 
                    onClick={()=> { selected === tLength - 1 ? setSelected(0) : setSelected((prev)=> prev + 1)}}
                    src={rightArrow} alt="img" />
                </div>
            </div>
        </div>
    </>
  )
}
