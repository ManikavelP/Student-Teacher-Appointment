import React from "react";
import teacherImg from "../../assets/images/teacherImg01.jpg";
import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import TeachersAbout from "./TeacherAbout";
import Feedback from "./Feedback";

const TeacherDetails = () => {
  const [tab,setTab] = useState('about');
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 ">
              <figure className="max-w-[300px] max-h-[300px]">
                <img src={teacherImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Mathematics
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Mrs. Sarah Thompson
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor ">
                    (320)
                  </span>
                </div>
                <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] ">
                  "Dedicated teacher committed to creating an engaging learning
                  environment that sparks curiosity and fosters student growth
                  through active participation and lifelong learning."
                </p>
              </div>
            
            
            
            </div>
           <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
            <button
             className={`${
              tab == "about" && "border-b border-solid border-primaryColor"
             } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
             onClick={() => setTab("about") }
             >
              About
             </button>
             <button
             className={`${
              tab == "Feedback" && "border-b border-solid border-primaryColor"
             } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
             onClick={() => setTab("feedback") }
             >
              Feedback
             </button>
           </div>

           <div className="mt-[50px]">
            {
              tab == 'about' && <TeachersAbout/>
            }
            {
              tab == 'feedback' && <Feedback/>
            }

           </div>

          </div>
          <div></div>
        </div>


      </div>
    </section>
  );
};

export default TeacherDetails;
