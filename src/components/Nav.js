import React, { useCallback, useState } from "react";
import logo from '../assets/logo.png'


const Nav = () =>{
    return(
       
        <div className=" overflow-hidden relative pt-8 w-full ">
            <div className=" bg-[#ffffff] mx-auto max-w-[1180px] flex items-center justify-between ">
            {/* left */}
            <div className="">
            <div className="flex  items-center justify-center pl-[20px]  ">  

         <img src={logo} className=" mr-[0.75em] max-w-[150px] h-[33px] cursor-pointer  "></img>
                   
          <span className="text-[#333333] max-h-[50px] text-[1.3em] pl-[0.5em] border-l-2 border-solid border-[#b2b2b2] font-poppins 
          font-semibold leading-[1.5] cursor-pointer max-md:text-[0.8em]  ">Help Center</span>
          </div>
            </div>
            {/* Right */}
        
            <div className="  max-xg:hidden max-xg:py-[17.5px]  px-0 flex flex-row items-center justify-center flex-wrap box-border">
                <div className="box-border flex flex-row">
                    <div className="flex py-[8px] px-0 border-0 my-0 ml-[12px]">
                      <div  className="flex mr-2 ">
                      <div className=" cursor-pointer mr-[4px] pr-1 font-poppins text-[14px] leading-[1.5] text-[#333333] font-normal hover:text-[#066bff]  transition-all duration-200 ease-linear">Developers</div>
                    <span >
                    <svg xmlns="http://www.w3.org/2000/svg"className="h-[13.5px] w-[13.5px] mt-1 mr-5  hover:text-[#066bff]  transition-all duration-200 ease-linear " viewBox="0 0 512 512">
                <path fill="#333333" d="M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z"/></svg>
                    </span>
                      </div>

                      <div  className="flex ">
                      <div className=" cursor-pointer mr-[4px] pr-1 font-poppins text-[14px] leading-[1.5] text-[#333333] font-normal  hover:text-[#066bff]  transition-all duration-200 ease-linear ">Report Abuse</div>
                    <span >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[13.5px] w-[13.5px] mt-1 " viewBox="0 0 512 512">
                <path fill="#333333" d="M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z"/></svg>
                    </span>
                      </div>
                   
                    </div>
                    <div className=" cursor-pointer py-[11px] px-0 border-0 my-0 ml-[12px] font-poppins text-[14px] leading-[1.15] text-[#333333] font-normal  hover:text-[#066bff]  transition-all duration-200 ease-linear ">Contact Us</div>
                    </div>
                    <div className="relative">
                        
                    </div>
                <div className="flex flex-row border-l-2 border-solid border-[#f2f2f2] pl-[1em] ml-[1em]">
                    <div className=" cursor-pointer py-[8px] px-0 border-0 my-0 mx-[12px] font-poppins text-[14px] leading-[1.15] text-[#333333] font-normal  hover:text-[#066bff]  transition-all duration-200 ease-linear">Log In</div>
                    <div className=" cursor-pointer py-[8px] px-0 border-0 my-0 mx-[12px] font-poppins text-[14px] leading-[1.15] text-[#333333] font-normal  hover:text-[#066bff]  transition-all duration-200 ease-linear">Sign Up</div>
                </div>
            </div>

            <div className="xg:hidden   ">
            <div className="  py-[17.5px]  text-center cursor-pointer">
                 <svg  className="absolute right-[15px] h-[30px] w-[30px] top-[30px]  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#333333" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                 </div>
            </div>
          
        </div>
        </div>
    )
}

export default Nav