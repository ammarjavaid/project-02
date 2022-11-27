import React from 'react'
import Header from '../header/Header'
import "./hero.scss"
import hero__image from "../../images/hero_image.png"
import hero__image_back from "../../images/hero_image_back.png"
import Heart from "../../images/heart.png"
import Calories from "../../images/calories.png"
import NumberCounter from "number-counter"
import { motion } from 'framer-motion'

export default function Hero() {

const transition = {type: "spring", duration: 3}
const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <>
            <div className='hero' id='home'>
            <div className='blur hero__blur'></div>
                <div className='left-h'>
                    <Header />
                    <div className='the-best-add'>
                        <motion.div
                        initial={{left: mobile ? "165px" : "238px"}}
                        whileInView={{left: "8px"}}
                        transition={{...transition, type: "tween"}}
                        ></motion.div>
                        <span> the best fitness club in the town </span>
                    </div>


                    <div className='hero__text'>
                        <div>
                            <span className='stroke-text'> Shape </span>
                            <span> Your </span>
                        </div>
                        <div>
                            <span>Ideal body</span>
                        </div>
                        <div>
                            <span>
                                In here we will help you to shape and build your ideal body and live up your life to fullest
                            </span>
                        </div>
                    </div>

                    <div className='figures'>
                        <div>
                            <span>
                                <NumberCounter end={140} start={100} delay="4" prefix="+" />
                            </span>
                            <span>expert coaches</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter end={978} start={800} delay="4" prefix="+" />
                            </span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter end={50} start={0} delay="4" prefix="+" />
                            </span>
                            <span>fitness programs</span>
                        </div>
                    </div>

                    <div className='hero__buttons'>
                        <buttons className='btn'> Get Started </buttons>
                        <buttons className='btn'> Learn More </buttons>
                    </div>


                </div>

                <div className='right-h'>
                    <button className='btn'> Join Now </button>

                    <motion.div
                        initial={{right: "-1rem"}}
                        whileInView={{right: "4rem"}}
                        transition={transition}
                        className='heart__rate'>
                        <img src={Heart} alt="img" />
                        <span className='hert__1'> Heart Rate </span>
                        <span className='hert__2'> 116 bpm </span>
                    </motion.div>

                    <img src={hero__image} alt="img" className='hero_image' />
                    <img 
                        initial={{right: "11rem"}}
                        whileInView={{right: "20rem"}}
                        transition={transition}
                        src={hero__image_back} alt="img" className='hero_image_back' />

                    <motion.div 
                        initial={{right: "37rem"}}
                        whileInView={{right: "28rem"}}
                        transition={transition}
                        className='calories'>
                        <img src={Calories} alt="img" />
                        <div>
                            <span>Calories Burned</span>
                            <span style={{color: "white", fontSize: "1.5rem"}}> 220 kcal </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
