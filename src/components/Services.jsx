import React from 'react';
import { FaHeadphones,FaWallet ,FaCheckCircle,FaCarSide } from "react-icons/fa";

const data=[
        {
            "id": 1,
            icon :<FaCarSide  className='text-4xl md:text-5xl text-primary'/>,
            title : "Free Shipping",
            description : "Free shipping on all orders",
        },
        {
            "id": 2,
            icon :<FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
            title : "Money Back Guarantee",
            description : "30 days money back guarantee",
            },
            {
              "id": 3,
              icon :<FaWallet className='text-4xl md:text-5xl text-primary'/>,
              title : "Secure Payment",
              description : "Secure payment with all major credit cards",
            },
            {
              "id": 4,
              icon :<FaHeadphones className='text-4xl md:text-5xl text-primary'/>,
              title : "24/7 Support",
              description : "24/7 support via phone, email, or chat",
            }
    ];
const Services = ({theme}) => {
  return (
    <div>
    <div className='container'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 mt-12 md:mt-18'>
        {data.map((item, index) => (
          <div key={item.id} className={`${theme==='light'?'bg-white':'bg-gray-500 text-gray-100'} rounded-lg shadow-md p-8`}>
            <div className="flex  flex-col items-center justify-center sm:flex-row gap-4">
              {item.icon}
              <div>
                <h2 className="lg:text-xl font-bold">{item.title}</h2>
                <h2 className={`${theme==='light'?'text-gray-400':'text-gray-200'} text-sm`}>{item.description}</h2>
              </div>
              </div>
              </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services
