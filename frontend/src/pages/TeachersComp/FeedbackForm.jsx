import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useState } from 'react'


const FeedbackFormDet = () => {
  const [rating,setRating] = useState(0);
  const [hover , setHover] = useState(0);
  const [review , setReviewText] =  useState('');

  const handleSubmitReview = async e =>{
    e.preventDefault()
  }
  return (

    <form action="">
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
          How would you rate the overall experience?*
        </h3>
        <div>
          {[ ...Array(5).keys()].map((_,index) =>{
            index +=1;
            return(
              <button 
              key={index}
              className={` ${
                index <= ((rating && hover) || hover)
                ? "text-yellowColor"
                :"text-gray-500"
              }`}
              type='button'
              onClick={() => setRatin(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(index)}
              onDoubleClick={() => {
                setHover(0);
                setRating(0);
              }}
              >
                <span>
                  <AiFillStar/>
                </span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions*
        </h3>
        <textarea 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md'
        placeholder='Write your message'
        onChange={e => setReviewText(e.target.value)}
        >

        </textarea>
      </div>
      <button type='submit' 
      onClick={handleSubmitReview}
      
      className='btn'>Submit Feedback</button>
    </form>

  )
}

export default FeedbackFormDet