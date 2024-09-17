import React from 'react';


const Banner = ({ data ,handlePopup}) => {
    return (
        <div className='min-h-[500px] flex item-center justify-center py-15'>
            <div className="container">
                <div className={`${data.bgColor} grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl`}>
                    <div className='p-6 sm:p-8'>
                        <p data-aos="slide-right" className='text-sm'>{data.discount}</p>
                        <h1 data-aos="slide-right" className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                        <p data-aos="zoom-out" className='text-sm'>{data.date}</p>
                    </div>
                    <div className='h-full flex items-center' data-aos="zoom-in">
                        <img src={data.image} alt="" 
                        className='scale-125 w-full h-full object-cover object-center drop-shadow-2xl  hover:rotate-90 hover:scale-150 duration-300' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center p-6 sm:p-8'>
                        <p className='text-xl font-bold' data-aos="zoom-in-down">{data.title2}</p>
                        <p className='text-3xl font-bold' data-aos="zoom-in-down">{data.title3}</p>
                        <p className='text-sm tracking-wide leading-5' data-aos="zoom-in">{data.title4}</p>
                        <div data-aos="zoom-out" onClick={handlePopup}>
                            <button className={`${data.text} bg-white cursor-pointer hover:scale-105 duration-300 rounded-full py-2 px-8 relative z-10`}
                            >shop now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
