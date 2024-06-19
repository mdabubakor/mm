import React, { ReactNode } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
interface props {
    text:string;
    link:string
}
const SocialLink = ({text,link}:props) => {
  return (
    <a href={link} target="blank" className=''>
    <div className="flex items-center justify-center gap-2 text-xl text-gray-400 font-semibold group">
         <p className='group-hover:text-white'>{text}</p>
         <GoArrowUpRight className=" translate-x-2 translate-y-0 group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform duration-300"/>
      </div>
    </a>
  )
}

export default SocialLink
