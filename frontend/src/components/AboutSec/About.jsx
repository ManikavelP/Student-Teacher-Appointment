import React from 'react'
import aboutImg from "../../assets/images/teacher_6_modi.jpg"
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';
export const About = () => {
  return <section>
    <div className="container">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row sm:flex-row">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt=''/>
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
          </div>
        
         </div>

      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className='heading'>"Seamless Learning Connections, Tailored Just for You!"</h2>
        <p className='text_para  '>"Explore our Student-Teacher Appointment Web Application—a user-friendly platform streamlining connections between students and mentors. Enjoy easy scheduling, personalized guidance, and seamless academic collaboration. Reshape your access to mentorship and empower your education effortlessly."</p>
        <p className='text_para mt-[30px]'>"With our application, find, connect, and schedule with dedicated mentors for academic success. Our hassle-free platform allows students to focus on their learning journey, eliminating scheduling complexities. Say hello to a future where educational support is just a click away."</p>
       <Link to='/'><button className='btn'>Learn More</button></Link>
      </div>
    </div>
    </div>
  </section>
}
