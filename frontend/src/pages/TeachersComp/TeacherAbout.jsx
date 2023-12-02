import React from "react";

const TeachersAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex item-center gap-2">
          About of
        </h3>
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
          Mrs. Sarah Thompson
        </span>
        <p className="text_para">
          "Mrs. Sarah Thompson, an inspiring educator, brings innovation and
          warmth to the classroom. With a focus on cultivating a love for
          learning, she guides students to discover their potential, fostering
          an environment where curiosity thrives. Mrs. Thompson's commitment to education creates a positive impact on every student she teaches"
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                23 June, 2008
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Mathematics
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">City Central Elementary School, New York</p>
            
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                23 June, 2008
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Mathematics
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">City Central Elementary School, New York</p>
            
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              07-04-2010 - 08-12-2020
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Mathematician
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            City Central Elementary School, New York

            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea] ">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              07-04-2010 - 08-12-2020
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Mathematician
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            City Central Elementary School, New York

            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeachersAbout;
