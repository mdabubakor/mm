import React from 'react'
import Title from './Title'
import {FaDiagramProject} from "react-icons/fa6"
import Amazon from "../Assets/amazonClone.webp"
import Cyber from "../Assets/cyberBlog.webp"
import Dashbo from "../Assets/dashboard.webp"
import Noor from "../Assets/noorShop.webp"
import Orebi from "../Assets/orebiShopping.png"
import Reac from "../Assets/reactBD.png"
import Image from 'next/image'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (
    <div className='wrapper'>
      <Title text="Projects" icon={<FaDiagramProject/>}/>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     <ProjectCard 
     img={Amazon.src}
     title="Amazone Clone"
     />
     <ProjectCard 
     img={Cyber.src}
     title="Cyber Blog"
     />
     <ProjectCard 
     img={Dashbo.src}
     title="Dashboard"
     />
     <ProjectCard 
     img={Noor.src}
     title="Noor Shop"
     />
     <ProjectCard 
     img={Orebi.src}
     title="Orebi Shopping"
     />
     <ProjectCard 
     img={Reac.src}
     title="React Blog"
     />
     

     </div>
    </div>
  )
}

export default Projects
