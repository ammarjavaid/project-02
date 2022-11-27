import React from 'react'
import { programsData } from '../../dummyData/Programs'
import "./program.scss"
import RightArrow from "../../images/rightArrow.png"

export default function Program() {
  return (
    <>
        <div className='Programs' id='programs'>

            <div className='programs__header'>
                <span className='stroke-text'> Explore our </span>
                <span> Programs </span>
                <span className='stroke-text'> to shape you </span>
            </div>

            <div className='program__categories'>
                {
                    programsData.map((program)=>(
                        <div className='category'>
                            <span className='img'> {program.image} </span>
                            <span className="head"> {program.heading} </span>
                            <span className="detail"> {program.details} </span>
                            <div className='join__now'>
                                <span> Join Now </span>
                                <img src={RightArrow} alt='img' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
