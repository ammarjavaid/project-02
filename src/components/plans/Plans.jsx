import React from 'react'
import "./plans.scss"
import {plansData} from "../../dummyData/PlansData"
import whiteTick from "../../images/whiteTick.png"

export default function Plans() {
  return (
    <>
        <div className='plans__container'>

            <div className='blur plans__blur_1'></div>
            <div className='blur plans__blur_2'></div> 

            <div className='plans__header'>
                <span className='stroke-text'> READY TO START </span>
                <span> YOUR JOURNEY </span>
                <span className='stroke-text'> NOW WITHUS </span>
            </div>

            <div className='plans'>
                {
                    plansData.map((plan, i)=>(
                        <div className='plan' key={i}>
                            { plan.icon }
                            <span> {plan.name} </span>
                            <span style={{fontSize:"3rem", fontWeight: "bold"}}> $ {plan.price} </span>

                            <div className='features'>
                                {
                                    plan.features.map((feature, i)=>(
                                        <div className='feature'>
                                            <img src={whiteTick} alt='img' />
                                            <span key={1}> {feature} </span>
                                        </div>
                                    ))
                                }
                            </div>

                            <div>
                                <span> See more benefits  </span>
                            </div>
                            <button className='btn'> Join Now </button>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
