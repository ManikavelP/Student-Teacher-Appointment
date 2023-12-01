import React from 'react'

import starIcon from "../../assets/images/Star.png";
import {Link} from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const TeacherListCard 
= ({teacher}) => {

  const {
    name,
    avgRating,
    totalRating,
    photo,
    subject,
    totalStudents,
    school
    } = teacher
  return (
    <div>
      <div className="p-3 lg:p-5">
        <div>
          <img src={photo} alt="" className='w-full '/>
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text-[25px] lg:leading-9 text-headingColor font-[600] mt-3 lg:mt-5'>{name}
        </h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
            {subject}
          </span>

          <div className="flex items-center gap-[6px]">
            <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
              <img src={starIcon} alt="" />{avgRating}
            </span>
            <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>
              ({totalRating})
            </span>
          </div>
        </div>

        <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
          <div>
            <h3 className='text-[16px] leading-7 lg:text-[16px] lg:leading-[30px] font-semibold text-headingColor'>+
              {totalStudents} Students
            </h3>
            <p className='text-[14px] leading-6 font-[400] text-textColor'>
              At {school}
            </p>
          </div>
          <Link to='/teachers/1' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]        items-center justify-center group hover:bg-primaryColor flex hover:border-none relative ">
            <BsArrowRight 
            className="
            group-hover:text-white w-6 h-5"
            />
            </Link> 
        </div>
      </div>

    </div>
  )
}

export default TeacherListCard ;
