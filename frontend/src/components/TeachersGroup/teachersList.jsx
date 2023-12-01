import React from 'react'

import {teachersMem} from './../../assets/data/teachersDet'
import TeacherListCard from './teacherListCard'
const TeacherList = () => {
  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {teachersMem.map((teacher) => <TeacherListCard key={teacher.id} teacher = {teacher}/>)}
    </div>
  </>
}

export default TeacherList