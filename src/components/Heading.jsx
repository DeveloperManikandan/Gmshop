import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div>
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
            <h1 className='text-3xl lg:text-4xl font-bold text-black'>{title}</h1>
            <p className='text-xm text-gray-400'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Heading;
