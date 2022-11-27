import React from 'react'
import "./footer.scss"
import Github from "../../images/github.png"
import Instagram from "../../images/instagram.png"
import LinkedIn from "../../images/linkedin.png"
import Logo from "../../images/logo.png"

export default function Footer() {
    return (
        <>
            <div className='Footer__container'>
                <hr />

                <div className='footer'>
                    <div className='social__links'>
                        <img src={Github} alt='img' />
                        <img src={Instagram} alt='img' />
                        <img src={LinkedIn} alt='img' />
                    </div>
                    <div className='logo_f'>
                        <img src={Logo} alt='img' />
                    </div>
                </div>
                <div className='blur blur_f_1'></div>
                <div className='blur blur_f_2'></div>
            </div>
        </>
    )
}
