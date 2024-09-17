import React from 'react';
import Shopbutton from './Shopbutton';
import vr from '../assets/pics/vr-4.png';
import speaker from '../assets/pics/speaker.png';
import gaming from '../assets/pics/gaming.png';

const Category2 = () => {
  return (
<div className='py-8 mb-10'>
        <div className='container'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-r from-slate-300/80 to-gray-100
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="zoom-in">
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='mb-[2px] text-4xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-80 text-4xl xl:text-5xl'>Earphone</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-primary'} textcolor={'text-white'}/>
                        </div>
                    </div>
                    <img src={gaming} alt="" className='absolute -translate-y-1/2 top-1/2 right-0 w-[320px] hover:scale-125 duration-300 '/>
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/70
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="zoom-out">
                    <div>
                        <div className='mb-4 absolute -translate-y-1/2 top-1/2 z-10'>
                            <p className='mb-[2px] text-gray-500'>Enjoy</p>
                            <p className='mb-[2px] text-4xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-50 text-4xl xl:text-5xl'>Gadget</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-white'} textcolor={'text-brandGreen'}/>
                        </div>
                    </div>
                    <img src={vr} alt="" className='absolute w-[320px] bottom-0 hover:scale-125 duration-300 hover:top-2'/>
                </div>
                <div className=' py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
                 text-white rounded-3xl relative h-[320px] flex items-end' data-aos="zoom-out">
                    <div>
                        <div className=' mb-4 absolute -translate-y-1/2 top-1/2 z-10'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='mb-[2px] text-5xl font-semibold'>with</p>
                            <p className='mb-2 font-semibold opacity-50 text-5xl xl:text-7xl'>laptop</p>
                            <Shopbutton text={'Browse'} bgcolor={'bg-white'} textcolor={'text-brandBlue'}/>
                        </div>
                    </div>
                    <img src={speaker} alt="" className=' absolute w-[320px] bottom-0 hover:scale-125 duration-300 hover:top-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category2;
