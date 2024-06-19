import React from 'react'

interface props {
  title: string,
  link:string
}

const Skillsinput = ({title,link}:props) => {
  return (
<a href={link} target="blank">
          <p className="border border-blue-800 text-lg px-6 py-2 rounded-lg bg-transparent tracking-wide text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black duration-300">
            {title}
          </p>
        </a>
  )
}

export default Skillsinput
