import React from 'react'
import TeacherListCard from '../../components/TeachersGroup/teacherListCard'

import {teachersMem} from './../../assets/data/teachersDet';

const Teacher = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className="container text-center">
        <h2 className='heading'>Find a Teacher</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input 
          type="search"
          className='py-4 pl-4 pr-2 text-[1] bg-transparent w-full focus:outline-none cursor-pointer '
          placeholder='Search Teacher'
          />
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>
            Search
          </button>
        </div>

      </div>
       
      </section>

      <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {teachersMem.map((teacher) => <TeacherListCard key={teacher.id} teacher = {teacher}/>)}
    </div>
      </section>
    </>
    
  )
}

export default Teacher