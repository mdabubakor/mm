import React, { ReactNode } from 'react'
import { TbBrandNextjs } from 'react-icons/tb'

interface props {
    title: string,
    subtitle: string,
    icon: ReactNode
}
const ExperienceCard = ({title,subtitle,icon}:props) => {
  return (
    <div className='flex items-center gap-4'>
    <span className='w-12 h-12 rounded-full  bg-black border-[1px] border-blue-600 flex items-center justify-center'>
        <span className='text-3xl'>{icon}</span>
    </span>
    <div>
    <h3 className='text-2xl font-bold'> {title}</h3>
    <p className='text-base text-gray-500 tracking-wide font-medium'>{subtitle}</p>
    </div>
  </div>
  )
}

export default ExperienceCard
