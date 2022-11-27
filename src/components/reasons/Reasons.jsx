import React from 'react'
import "./reasons.scss"
import image1 from "../../images/image1.png"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
import image4 from "../../images/image4.png"
import nb from "../../images/nb.png"
import adidas from "../../images/adidas.png"
import nike from "../../images/nike.png"
import tick from "../../images/tick.png"

export default function Reasons() {
    return (
        <>
            <div className='Reasons' id='reasons'>
                <div className='left_r'>
                    <img src={image1} alt='image' className='image1' />
                    <img src={image2} alt='image' className='image2' />
                    <img src={image3} alt='image' className='image3' />
                    <img src={image4} alt='image' className='image4' />
                </div>
                <div className='right_r'>
                    <span> some reasons </span>

                    <div>
                        <span className='stroke-text'> why </span>
                        <span className='choose'> choose us? </span>
                    </div>

                    <div className='details__r'>
                        <div>
                            <img src={tick} alt='img' />
                            <span style={{color: "white"}}> OVER 140+ EXPERT COACHES </span>
                        </div>
                        <div>
                            <img src={tick} alt='img' />
                            <span style={{color: "white"}}> TRAIN SMARTER AND FASTER THAN  </span>
                        </div>
                        <div>
                            <img src={tick} alt='img' />
                            <span style={{color: "white"}}> 1 FREE PROGRAM FOR NEW MEMBER </span>
                        </div>
                        <div>
                            <img src={tick} alt='img' />
                            <span style={{color: "white"}}> RELIABLE PARTNERS </span>
                        </div>
                    </div>
                    <span style={{color: "var(--gray)",fontWeight: "normal", marginTop: "1rem"}}> OUR PARTNERS </span>

                    <div className="partners">
                        <img src={nb} alt='img' />
                        <img src={adidas} alt='img' />
                        <img src={nike} alt='img' />
                    </div>
                </div>
            </div>
        </>
    )
}
