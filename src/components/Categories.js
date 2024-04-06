
import React from "react";
import logo1 from "../assets/card1.svg";
import logo2 from "../assets/card2.svg";
import logo3 from "../assets/card3.svg";
import logo4 from "../assets/card4.svg";
import logo5 from "../assets/card5.svg";
import logo6 from "../assets/card6.svg";

const Categories = () =>{
    return(
        <div className="flex justify-center my-0 mx-auto flex-col max-md:mt-[-40px] max-w-[1180px] pb-12">
           
            <h1 className=" text-[39px] font-poppins font-semibold  pt-[4.5rem] pb-8 border-box text-[#333333] text-center max-md:font-semibold max-md:text-[28px] ">Categories</h1>
            <div className=" grid 2xl:grid-cols-3  max-tg:grid-cols-1 max-2xl:grid-cols-2 gap-x-5 gap-y-5 h-[78%]">
                                    
                        <div className='flex flex-col  text-center border-[2px] h-full  cursor-pointer max-2xl:ml-[25px] max-tg:mr-[25px] max-md:flex-row  max-md:flex-nowrap max-md:h-[100px]   max-md:min-w-[250px] rounded-xl min-w-[380px] p-3 border-[#006bff]  relative '>
                        <div className=" text-white text-[0.85em] font-poppins mt-[-2.4px] mr-[-2px] p-0  font-bold bg-[#006bff] absolute w-[75px] h-[35px] box-border text-center top-0 right-0 leading-[35px] border rounded-bl-[0.75em] rounded-tr-[0.75em]">New</div>
                            <img src={logo1} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto" ></img>
                           
                            <div className="mt-[12px] font-poppins text-[#333333] font-extrabold leading-[1.2]  text-[22px]  max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Getting Started</div>
                            <p className="mx-auto mt-[0.9em] w-[15em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Learn the basics so you can start scheduling</p>
                        </div>
                    
                   
                        <div className='flex flex-col text-center border h-full  cursor-pointer max-2xl:mr-[25px] max-tg:ml-[25px] max-md:flex-row  max-md:flex-nowrap max-md:h-[100px] max-md:min-w-[250px] rounded-xl min-w-[380px] p-3 hover:shadow-md  transition-all duration-200 ease-linear  '>
                            <img src={logo2} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto"></img>
                            <div className="mt-[0.5em] font-poppins text-[#333333] font-extrabold  text-[22px] max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Using Calendly</div>
                            <p className="mx-auto mt-[0.9em] w-[16em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Discover how Calendly works, from availability to event types</p>
                        </div>
                   
                  
                        <div className='flex flex-col text-center border h-full cursor-pointer max-2xl:ml-[25px] max-tg:mr-[25px] max-md:flex-row  max-md:flex-nowrap  max-md:h-[100px] max-md:min-w-[250px]  rounded-xl min-w-[380px] p-3 hover:shadow-md  transition-all duration-200 ease-linear   '>
                            <img src={logo3} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto"></img>
                            <div className="mt-[0.5em] font-poppins text-[#333333] font-extrabold  text-[22px] max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Calendly for Mobile</div>
                            <p className="mx-auto mt-[0.9em] w-[16em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Schedule on the go with our iOS and Android mobile apps</p>
                        </div>
                    
                    
                        <div className='flex flex-col text-center border h-full cursor-pointer max-2xl:mr-[25px] max-tg:ml-[25px] max-md:flex-row  max-md:flex-nowrap max-md:h-[100px] max-md:min-w-[250px] rounded-xl min-w-[380px] p-3 hover:shadow-md  transition-all duration-200 ease-linear  '>
                            <img src={logo4} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto "></img>
                            <div className="mt-[0.5em] font-poppins text-[#333333] font-extrabold  text-[22px] max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Integrations & Automations</div>
                            <p className="mx-auto mt-[0.9em] w-[15em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Power you meeting lifecycle with tools and workflows</p>
                        </div>
                    
                    
                        <div className='flex flex-col text-center border v rounded-xl cursor-pointer max-2xl:ml-[25px] max-tg:mr-[25px] max-md:flex-row  max-md:flex-nowrap max-md:h-[100px] max-md:min-w-[250px] min-w-[380px] p-3 hover:shadow-md  transition-all duration-200 ease-linear  '>
                            <img src={logo5} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto"></img>
                            <div className="mt-[0.5em] font-poppins text-[#333333] font-extrabold  text-[22px] max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Account Settings</div>
                            <p className="mx-auto mt-[0.9em] w-[16em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Manage you subscription, single sign-on, and security </p>
                        </div>
                    
                        <div className='flex flex-col text-center border h-full cursor-pointer max-2xl:mr-[25px] max-tg:ml-[25px] max-md:flex-row  max-md:flex-nowrap max-md:h-[100px] max-md:min-w-[250px]   rounded-xl min-w-[380px] p-3 hover:shadow-md  transition-all duration-200 ease-linear '>
                            <img src={logo6} className="h-[100px] mt-[5px] max-md:h-[70px]  max-md:mt-auto"></img>
                            <div className="mt-[0.5em] font-poppins text-[#333333] font-extrabold  text-[22px] max-md:font-normal max-md:text-[20px]  max-md:mt-auto max-md:ml-1 max-md:pb-[1em]">Video Tutorials</div>
                            <p className="mx-auto mt-[0.9em] w-[16em] leading-[1.6] text-center text-[15px] font-poppins font font-light max-md:hidden">Explore our how-to videos and features overviews</p>
                        </div>
                 

                    
            
               
            </div>          
        </div>
       
    )
}

export default Categories