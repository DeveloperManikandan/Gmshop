import React from 'react';
import b1 from '../assets/pics/br-1.png';
import b2 from '../assets/pics/br-2.png';
import b3 from '../assets/pics/br-3.png';
import b4 from '../assets/pics/br-4.png';
import b5 from '../assets/pics/br-5.png';

const Brand = () => {
    return (
        <div className='py-8 mt-24 bg-gray-400'>
            <div className='container'>
                <div className='grid grid-cols-5 gap-3 place-items-center'>
                    <img src={b1} alt="" className='w-[80px]'/>
                    <img src={b2} alt="" className='w-[80px]'/>
                    <img src={b3} alt="" className='w-[80px]'/>
                    <img src={b4} alt="" className='w-[80px]'/>
                    <img src={b5} alt="" className='w-[80px]'/>
                </div>
            </div>
        </div>
    )
}

export default Brand
