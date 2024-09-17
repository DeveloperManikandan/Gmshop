import React from 'react';
import Shopbutton from './Shopbutton';
import watch from '../assets/pics/watch.png';
import earphone from '../assets/pics/earphone.png';
import macbook from '../assets/pics/macbook.png';

const Category = () => {
  return (
    <div>
    <div className='py-8 pt-20'>
        <div className='container' id='shop'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="slide-right">
                    <div>
                        <div className='mb-4' >
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='mb-[2px] text-4xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-20 text-4xl xl:text-5xl'>Earphone</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-primary'} textcolor={'text-white'}/>
                        </div>
                    </div>
                    <img src={earphone} alt="" className='absolute bottom-0 w-[320px] hover:scale-125 duration-300 hover:top-2'/>
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="zoom-out">
                    <div>
                        <div className='mb-4' >
                            <p className='mb-[2px] text-gray-500'>Enjoy</p>
                            <p className='mb-[2px] text-4xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-50 text-4xl xl:text-5xl'>Gadget</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-white'} textcolor={'text-brandYellow'}/>
                        </div>
                    </div>
                    <img src={watch} alt="" className='absolute top-3 left- w-[320px] hover:scale-125 duration-300 hover:top-2'/>
                </div>
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="slide-left">
                    <div>
                        <div className='mb-4' >
                            <p className='mb-[2px] text-gray-700'>Enjoy</p>
                            <p className='mb-[2px] text-5xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-50 text-5xl xl:text-7xl'>laptop</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-white'} textcolor={'text-primary'}/>
                        </div>
                    </div>
                    <img src={macbook} alt="" className='absolute w-[320px] -translate-y-1/2 top-1/2 right-1 hover:scale-125 duration-300'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Category
