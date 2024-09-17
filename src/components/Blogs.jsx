import React from 'react'
import Heading from './Heading';
import watch from '../assets/pics/blog-1.jpg';
import vr from '../assets/pics/blog-2.jpg';
import lap from '../assets/pics/blog-3.jpg';

const data=[
    {
        publish :'Latest of 2024',
        title :'How to choose a perfect Smartwatch..?',
        subtitle :"If you want faster internet speeds, look for a phone with 5G support Useful if you travel frequently or need to manage two phone numbers Handy if you are prone to accidents or use your phone near water",
        img : watch,
    },
    {
        publish :'Latest of 2024',
        title :'How to choose a perfect Virtual Reality..?',
        subtitle :"If you want faster internet speeds, look for a phone with 5G support Useful",
        img : vr,
        },
        {
            publish :'Latest of 2024',
            title :'How to choose a perfect laptop..?',
            subtitle :"If you want faster internet speeds, look for a phone with 5G support Useful",
            img : lap,
        },
];
const Blogs = ({theme,setTheme}) => {
  return (
    <div>
        <div className='container' id='blogs'>
            <Heading title={'Recent NEWS'} subtitle={'Explore Our Blogs'}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 gap-y-8'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='overflow-hidden' data-aos="slide-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <div>
                                    <img src={item.img} alt={item.title} className='w-full h-[220px] object-cover hover:scale-105 rounded-2xl duration-500'/>
                                </div>
                                <div className='space-y-3 mt-2'>
                                    <h5 className={`${theme ==='light'?'text-black':'text-gray-400'} text-xs font-semibold`}>{item.publish}</h5>
                                    <p className={`${theme ==='light'?'text-black':'text-gray-400'} line-clamp-1 font-bold`}>{item.title}</p>
                                    <p className={`${theme ==='light'?'text-black':'text-gray-400'} line-clamp-2  text-sm`}>{item.subtitle}</p>
                                    </div>
                                    </div>
                        )
                })}
            </div>
        </div>
    </div>
  )
}

export default Blogs
