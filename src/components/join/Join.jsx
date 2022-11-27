import React, { useRef } from 'react'
import "./join.scss"
// import emailjs from '@emailjs/browser';

export default function Join() {

    // const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_br0tyck', 'template_mz0f29w', form.current, '5FsF5I2-6pQcm42Ol')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

  return (
    <>
        <div className='Join' id='join-us'>
            <div className='left__j'>
            <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className='right__j'>
                <form action='' className='email__container'>
                    <input type="email" name='user_name' placeholder='Enter yout email Address' />
                    <button className='btn btn_j'> Join Now </button>
                </form>
            </div>
        </div>
    </>
  )
}
