import React from 'react'
import { SiInformatica } from 'react-icons/si'

 interface props {
    text:string;
    icon:React.ReactNode;
 }
const Title = ({text, icon}:props) => {
  return (
    <div className='flex items-center gap-5 text-2xl group pb-6'>
        <h3 className=' font-semibold relative overflow-hidden'>{text} <span className='w-full h-[2px] absolute bottom-0 left-0 bg-blue-600 inline-block
        -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300
        '/></h3>
        <span className='text-blue-600'>{icon}</span>
      </div>
  )
}

export default Title
