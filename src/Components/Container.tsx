import React from 'react'

const Container = ({children}:any) => {
  return (
    <div className='max-w-screen-xl mx-auto lg:pt-10'>
      {children}
    </div>
  )
}

export default Container
