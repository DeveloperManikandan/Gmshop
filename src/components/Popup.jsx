import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Shopbutton from './Shopbutton';

const Popup = ({theme ,popup, handlePopup,handleOrder}) => {
  return (
    <div>
        {
            popup && (
                <div>
        <div className={`h-screen w-screen fixed top-0 ${theme==='light'?' bg-black/50':'bg-white/50'} z-50 backdrop-blur-sm left-0`}>
            <div className={`w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md Ibg-white
  duration-200 rounded-md ${theme==='light'?'bg-white text-black':'bg-gray-800 text-white'}`}>
                <div className=' p-4 rounded-md shadow-md'>
                    <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-bold mb-4'>Order Now</h2>
                    <IoMdCloseCircleOutline className='text-2xl' onClick={handlePopup}/>
                    </div>
                    <div>
                        <input type="text" name="" placeholder='name'  className='border-black b-2 rounded-lg border py-1 px-2 w-full mb-4'/>
                        <input type="text" name="" placeholder='email' className='border-black b-2 rounded-lg border py-1 px-2 w-full mb-4'/>
                        <input type="text" name="" placeholder='address' className='border-black b-2 rounded-lg border py-1 px-2 w-full mb-4'/>
                        <div className='justify-center flex' onClick={handleOrder}>
                        <Shopbutton bgcolor={'bg-primary'} text={'place order'} textcolor={'text-white'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )
        }
    </div>
    
  )
}

export default Popup
