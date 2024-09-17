import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";

const footerlink =[
  {
    title :'Home',
    link :'/#',
    },
    {
      title :'About',
      link :'/about',
      },
      {
        title :'Contact',
        link :'/contact',
        },
        {
          title :'Blog',
          link :'/blog',
        }
]

const Footer = ({theme,setTheme}) => {
  return (
    <div  className={`${theme==='light'?'bg-white text-black':'bg-gray-800 text-gray-400'}`} id='about'>
      <div className='container'>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 pb-10 pt-26'>
          <div className='py-8 px-2'>
          <div>
            <a href="#" className='text-primary font-semibold  tracking-wide uppercase text-2xl sm:text-3xl'>
              Gmshop
            </a>
            <h3 className="text-lg font-semibold mb-2 mt-1">About Us</h3>
            <p className={`pr-8 pt-2 text-sm`}>
            We are your go-to destination for the best products. Quality, affordability, and customer satisfaction are our priorities.&#128525;
            </p>
          </div>
          </div>
          <div className='py-8 px-2'>
          <div className='items-center'>
            <h1 className='font-bold -ml-2 mt-0 text-xl'>Important Links</h1>
            <ul className='space-y-3 mt-2'>
              {
                footerlink.map((item,index)=>{
                  return (
                    <div>
                    <li key={index} className='pl-8'>
                      <a href={item.link} className={`${theme==='light'?'text-black':'text-gray-400'} hover:text-gray-600 duration-300 font-semibold`}>
                        {item.title}
                      </a>
                      </li>
                    </div>
                  )
                })
              }
            </ul>
          </div>
          </div>
          <div className='py-8 px-2'>
            <div className='space-y-3'>
          <h3 className="mb-4 font-bold -ml-2 mt-0 text-xl">Customer Service</h3>
          <p><span><TiContacts className='inline-block text-2xl'/> : +91- 1234567894</span></p>
          <p ><span><HiOutlineMail className='inline-block text-2xl'/> : support@gmshop.com </span></p>
          <p ><span><MdOutlineAccessTime className='inline-block text-2xl'/> : Mon - Fri, 9am - 6pm</span></p>
          </div>
        </div>          
        <div className='py-8 px-2'>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Get updates on our latest offers and products.</p>
          <form className="flex">
            <input
              type="email"
              className="w-full px-3 py-2 text-gray-800 rounded-l-md"
              placeholder="user@gmail.com"
            />
            <button className="bg-blue-500 px-4 py-2 text-white rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
        </div>
        <div className="container mx-auto text-center border-t border-gray-700 mt-1 p-3">
        <p className="text-sm">© 2024 GmShop. All Rights Reserved.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
