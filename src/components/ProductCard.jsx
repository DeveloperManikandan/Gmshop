import React from 'react';
import Shopbutton from './Shopbutton'; 

const ProductCard = ({data,theme ,handlePopup}) => {
  return (
    <div className='mb-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                data.map((item,index)=>{
                    return (
                        <div key={index} data-aos="slide-up" data-aos-delay={300*index} > 
                            <div className='relative group' >
                                <img src={item.img} alt="" className='object-cover rounded-lg'/>
                            <div className='hidden group-hover:flex absolute top-1/2  -translate-x-1/2 duration-200  -translate-y-1/2 h-full w-full group-hover:backdrop-blur-sm
                            justify-center items-center left-1/2' onClick={handlePopup}>
                                <Shopbutton text={'Add to cart'} bgcolor={'bg-primary'} textcolor={'text-white'} />
                            </div>
                            </div>
                            <div className='leading-7'>
                                <h2 className={`${theme === 'light' ?'text-black':'text-gray-400'} text-lg font-semibold`}>{item.title}</h2>
                                <p className={`${theme === 'light' ?'text-black':'text-gray-400'} text-sm font-bold`}>{item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductCard
