import React from 'react'
import Title from './Title'
import { MdWork } from 'react-icons/md'
import {TbBrandNextjs} from 'react-icons/tb'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <div className='wrapper'>
      <Title  text="Experiences" icon={<MdWork/>}/>
     <div className='grid grid-cols-1 md:grid-cols-2'>
        <ExperienceCard title="Nextjs" subtitle="Web Developer 2023-Present" icon={<TbBrandNextjs/>}/>
      
     </div>
    </div>
  )
}

export default Experience
