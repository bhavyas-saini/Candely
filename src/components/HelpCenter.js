import React from "react";
import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";
import logo4 from "../assets/4.svg";
import logo5 from "../assets/5.svg";
import logo6 from "../assets/6.svg";


const HelpCenter = () =>{
    return(
       <div className=" mx-auto pt-12 w-full   ">
         <div className=" flex items-center   overflow-hidden justify-center flex-col  mt-0    ">
            {/* First Block */}
            <h1 className="text-[#333333] text-[52px]   font-poppins font-extrabold text-center leading-[1.1] tracking-tight mb-[20px] max-md:text-[35px] max-md:font-bold max-md:max-w-[720px] ">What can we help you with? </h1>

            
            <form className="pt-4 w-full   ">          
          <div className="reltive flex justify-center">
           <div>        
           <svg className="w-6 h-6 text-[#c6c3c3] absolute  flex-none max-gg:ml-9 ml-4 mt-5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg> 
         </div>
         <input type="search" id="default-search" className="block max-gg:mx-[25px] max-gg:max-w-[610px]  text-[#666]  w-[640px]  h-[60px]  bg-white  font-normal p-[1em] text-[17px] font-poppins ps-10  border border-solid border-[#f2f2f2]  shadow-3xl rounded-[40px]  " placeholder="  Search out articles" required 
         />
        </div>
       
        </form>
         
        
        {/*Second Block  */}
        <div className=" pt-16 w-full mx-auto max-md:pt-[30px]  box-border      ">
        
         <section className="  justify-center   box-border  ml-[-50px] flex  max-md:flex-col max-md:min-w-[720px] max-md:ml-[30px] gap-y-4  ">
      
            <div className="mr-[30px] ">
            <div className="flex gap-3  ">
            <img src={logo1} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img>
            <p  className="block text-[18px] max-w-[360px]  text-[#006bff] font-[360] leading-[1.5]  hover:text-blue-800  cursor-pointer">Setting up your first event</p>
            </div>
           

            
            <div className="flex  gap-3 mt-6">
            <img src={logo2} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img>
            <p  className="block text-[18px] max-w-[360px]  text-[#006bff] font-[360] leading-[1.5]   hover:text-blue-800 cursor-pointer max-rg:max-w-[160px]">Schedule with video conferencing</p>
            </div>
         

            
            <div className="flex  gap-3 mt-6">
            <img src={logo3} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img> 
            <p className="block text-[18px] max-w-[360px]  text-[#006bff] font-[360] leading-[1.5]  hover:text-blue-800 cursor-pointer max-rg:max-w-[160px] ">Automate tasks with Workflows</p>
            </div>
            </div>

            <div>
            <div className="flex  gap-3 ">
            <img src={logo4} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img>
            <p  className="block text-[18px] max-w-[360px]  text-[#006bff] font-[360] leading-[1.5]  hover:text-blue-800  cursor-pointer">Troubleshooting availability </p>
             </div>
            

             
            <div className="flex  gap-3 mt-6">
            <img src={logo5} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img>
            <p  className="block text-[18px] max-w-[360px]  text-[#006bff] font-[360] leading-[1.5]  hover:text-blue-800  cursor-pointer">Embed options overview</p>
            </div>
            

            
            <div className="flex gap-3 mt-5">
            <img src={logo6} className="min-w-[30px] max-w-[30px] bg-no-repeat block  bg-[30px 30px]"></img>
            <p  className="block text-[18px] max-w-[360px] text-[#006bff] font-[360] leading-[1.5]  hover:text-blue-800  cursor-pointer">Using Calendly for Chrome</p>
            </div>
            


            </div>            
         
         </section>

        </div>

       
     
        </div>
       </div>
    )
}

export default HelpCenter