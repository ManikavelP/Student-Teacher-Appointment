import React from "react";
import { Link } from "react-router-dom";
import teacher1 from "../assets/images/teacher_1_modi.jpg"
import teacher2 from "../assets/images/teacher_2.jpg";
import teacher3 from "../assets/images/teacher_3.jpg";
import teacher7 from "../assets/images/teacher_7.jpg";
import Teacher from './TeachersComp/Teacher'
import avatarIcon from "../assets/images/woman.png";
import { BsArrowRightCircle } from "react-icons/bs";
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import { BsArrowRight } from "react-icons/bs";
import { About } from "../components/AboutSec/About";
import videoIcon from "../assets/images/video-icon.png";
import ServicesList from "../components/Services/ServicesList";
import TeacherList from "../components/TeachersGroup/teachersList";



const Home = () => {
  return (
    <>
      {/* section start*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[80px] items-center justify-between">
            {/* ======hero counter  ======*/}
            <div>
              <div className="lg:w-[570px]">
                <h2 className="text-[20px] leading-[40px] text-headingColor font-[500] md:text-[40px] md:leading-[60px]">
                  "Learn Together, Schedule Better!"
                </h2>
                <p className="text_para">
                  "Discover effortless scheduling with our Student-Teacher
                  Appointment Web app. Seamlessly connect students and teachers
                  for a smoother learning experience. Simplify coordination,
                  save time, and enhance educational collaboration. Start
                  scheduling smarter today!"
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              <div className="mt-[25px] lg:mt-[60px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[25px]">
                <div>
                  <h2 className="text-[35px] leading-[50px] lg:text-[40px] lg:leading-[50px] font-[500] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[35px] leading-[50px] lg:text-[40px] lg:leading-[50px] font-[500] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Appointment Location</p>
                </div>
                <div>
                  <h2 className="text-[35px] leading-[50px] lg:text-[40px] lg:leading-[50px] font-[500] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Inspiring Education</p>
                </div>
              </div>
            </div>
            {/* ======hero counter  ======*/}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={teacher7} className="w-full rounded-xl" alt="first" />
              </div>
              <div className="mt-[30px] ">
                <img
                  src={teacher2}
                  className="w-full rounded-xl mb-[30px] "
                  alt="second"
                />
                <img src={teacher3} className="w-full rounded-xl" alt="third" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section end*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
            "Providing the Best Educational Odyssey, Every Step of the Way."
            </h2>
            <p className="text_para text-center">"Unleashing the best in education—personalized, inspiring, unparalleled. Your journey to excellence starts here."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pag-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon for Find a Teacher" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Find a Teacher
                </h2>
                <p className="text-[15px] leading-7 text-textColor font-[400] mt-4 text-center">
                  
                 "Unlock Knowledge, Ignite Growth: Your Ideal Mentor Awaits!"

                </p>
                 <Link to='/teachers' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor flex hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link> 
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon for Find a Teacher" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Find a Location
                </h2>
                <p className="text-[15px] leading-7 text-textColor font-[400] mt-4 text-center">
                  
                 "Unlock Knowledge, Ignite Growth: Your Ideal Mentor Awaits!"

                </p>
                 <Link to='/teachers' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor flex hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link> 
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon for Find a Teacher" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[600] text-center">
                  Book Appointment
                </h2>
                <p className="text-[15px] leading-7 text-textColor font-[400] mt-4 text-center">
                  
                 "Unlock Knowledge, Ignite Growth: Your Ideal Mentor Awaits!"

                </p>
                 <Link to='/teachers' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto items-center justify-center group hover:bg-primaryColor flex hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start*/}

         <About/>
       {/* About Section end*/}

       <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Teaching Services</h2>
              <p className="text_para text-center">
              </p>
          </div>
          <ServicesList/>
        </div>
       </section>

       <section>
        <div className="container">
         <div className="flex items-center justify-between flex-col lg:flex-row">
         <div className="xl:w-[670px]">
          <h2 className="heading">
            Get Virtual Appointment
          </h2>
          <ul className="pl-4">
            <li className="text_para">
              1.Schedule the Appointment directly.
            </li>
            <li className="text_para">
              2.Search for Your Teacher here , and Contact their office.
            </li>
            <li className="text_para">
              3.View our Teachers who are accepting new Students , use the online scheduling tool to select an appointment time.
            </li>
          </ul>
          <Link to='/'>
            <button className="btn">Learn More</button>
          </Link>
          
          </div>

          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={teacher1} alt="" />

            <div className="w-[150px]  lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px]  lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px]  lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    10.00
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]  flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]" >
                  <img src={videoIcon} alt="" />
                </span>
              
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leaindg-[8px] lg:text-[12px] lg:leaindg-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-md cursor-pointer">
                Consultation
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                <img src={avatarIcon} alt="" className="w-[12%]" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[600] text-headingColor ">Dr. Emily</h4>
              </div>
            </div>
          </div>
        </div> 
        </div>
       </section>


       <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Teachers</h2>
              <p className="text_para text-center">world-class Teaching for everyone. Our Teaching System offers unmatched, expert educational care.
              </p>
          </div>

          <TeacherList/>
        </div>
       </section>






    </>
  );
};

export default Home;
