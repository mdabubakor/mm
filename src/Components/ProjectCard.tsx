import React from 'react'

import Image from 'next/image'

interface props {
    img:string;
    title: string;
   
}
const ProjectCard = ({title,img}:props) => {
  return (
    <div className='w-80 h-80 border-[1px]  border-blue-600 overflow-hidden group rounded-lg relative '>
    <Image className=' object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s] ' width={350} height={350} src={img } alt='amazon'/>
    <p className='absolute hidden  bottom-0 w-full py-1 bg-blue-700 group-hover:inline-block   text-center duration-300'>{title}</p>
  </div>
  )
}

export default ProjectCard
