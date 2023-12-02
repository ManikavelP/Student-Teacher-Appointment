import React, { useState } from 'react'

import women from 
"../../assets/images/woman.png";
import {AiFillStar} from 'react-icons/ai';

import FeedbackFormDet from './FeedbackForm';
const Feedbacks = () => {

  const [showFeedbackForm , setShowFeedbackForm] =useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb0[30px] ">
          All reviews (320)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img src={women} alt="" className="w-full" />
            </figure>
            <div>
              <h5 className="text-[15px] leading-6 text-primaryColor font-bold">
              Sophia
              </h5>
              <p className="text-[14px] leading-6 text-textColor ">
                Feb 14, 2020
              </p>
              <p className="text_para font-medium text-15px] ">
                Good Services , Highly Recommended👌👍
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[ ...Array(5).keys()].map((_,index) =>(
              <AiFillStar key={index} color = '#0067FF'/>
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
      <div className='text-center'>
        <button className="btn" onClick={() => setShowFeedbackForm(true)}>
          Give Feedback
        </button>
        </div>
        
        )}

        {showFeedbackForm && <FeedbackFormDet/>}
      </div>

      
    
  )
}

export default Feedbacks