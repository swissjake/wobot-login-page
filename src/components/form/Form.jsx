import React from 'react'
import arrowDown from '../../assets/arrowDown.svg'

const companySize = [
    {
        id: 1,
        size: "1-20",
        
    },
    {
        id: 2,
        size: "21-50",
        
    },
    {
        id: 3,
        size: "51-200",
        color: "white"
       
    },
    {
        id: 4,
        size: "201-500",
        
    },
    {
        id: 5,
        size: "500+",
       
    },
]

const colors = ['#F0F0F0', '#F0F0F0', '#3766E8', '#F0F0F0', '#F0F0F0'];
const textColor = ['#000', '#000', '#fff', '#000', '#000', '#000'];

const Form = () => {
  return (
    <div className='px-2 md:px-0 mt-[24px] w-[368px] mx-auto'>
       <form action="">
           <label className='w-[105px] h-[17px] text-[#545454] leading-[17px] font-inter font-medium'>Company name</label>
           <input className='block mt-[8px] mb-[28px] w-[340px] md:w-[368px] h-[37px] px-[12px] text-[14px] pt-[10px] pb-[8px] text-[#A0A0A0] font-roboto leading-[18px] border border-solid border-[#CED4DA] rounded-[6px] outline-none' type="text" placeholder='e.g. Example Inc'/>

           <label className='w-[56px] h-[17px] text-[#545454] leading-[17px] font-inter font-medium'>Industry</label>
           <div className='flex mt-[8px] mb-[29px] pl-[12px] py-[8px] justify-between items-center w-[340px] md:w-[368px] h-[37px] border border-solid border-[#CED4DA] rounded-[6px] overflow-hidden'>
               <div className='w-[320px] h-[19px] text-[#A0A0A0] font-normal text-[14px] font-roboto leading-[18px]'>Search</div>
                <img className='w-[8px] h-[6px] mr-[12px]' src={arrowDown} alt="/" />
           </div>

           <label className='w-[95px] h-[17px] font-medium leading-[17px] text-[#545454] '> Company size</label>
           <div className='mt-[8px] flex space-x-[10px]'>
               {companySize.map((item, i) => (
                   <div className={`py-[4px] px-[8px] rounded-[2px] text-[14px] leading-[17px] font-medium font-inter text-[#545454] hover:scale-110 transform duration-100 ease-out cursor-pointer`} key={item.id} style={{backgroundColor: colors[i], color: textColor[i]}} >{item.size}</div>
               ))}
           </div>
           <button className='w-[340px] md:w-full mt-[56px] mb-[40px] font-roboto rounded-[5px] font-medium leading-[16px] active:scale-105 duration-300 ease-in-out  py-[10px] text-white bg-[#3766E8] '>Get Started</button>
       </form>
    </div>
  )
}

export default Form