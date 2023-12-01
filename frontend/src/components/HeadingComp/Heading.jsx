import React from "react";
import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

import userImg from "../../assets/images/avatar-icon.png";


import CompanyLogo from "../../assets/images/CompanyLogo1.png";
import { BiMenu } from "react-icons/bi";


const navlink = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/teachers",
    display: "Teachers",
  },
  {   
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Heading = () => {

  const headRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = ()=>{
    window.addEventListener('scroll' , ()=>{
      if( document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headRef.current.classList.add('sticky__header')
      }else{
        headRef.current.classList.remove('sticky__header')

      }
    })
  }
  useEffect(() =>{
    handleStickyHeader()

    return() => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
  return (
    <>
      <header className="header flex items-center " ref={headRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div>

              <img src={CompanyLogo} alt="Company_logo" className="sm:w-[40%] px-5 cursor-pointer ResponsiveLogo "/>
            </div>
            <div className="navigation"  ref={menuRef} onClick={toggleMenu}>
              <ul className=" menu flex items-center  gap-[1.5rem]">
                {navlink.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[15px] leading-2 font-[600]"
                          : "text-textColor text-[15px] leading-2 font-[500] hover:text-primaryColor"
                      }
                    >
                     
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* ------------NAV RIGHT---------*/}
            <div className="flex items-center gap-4">
              <div className="hidden">
                <Link to='/'>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={userImg} alt=""  className="w-full rounded-full cursor-pointer"/>
                  </figure>
                </Link>
              </div>
              <Link to='/login'>

                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>

              </Link>

              <span className="md:hidden" onClick={toggleMenu}> 

              <BiMenu className="w-6 h-6 cursor-pointer"/>

              </span>

              </div>        
          </div>
        </div>
      </header>
    </>
  );
};
export default Heading;
