import React from 'react';
import Heading from './Heading';
import ProductCard from './ProductCard';
import p1 from '../assets/pics/p-1.jpg';
import p2 from '../assets/pics/p-2.jpg';
import p3 from '../assets/pics/p-3.jpg';
import p4 from '../assets/pics/p-4.jpg';
import p5 from '../assets/pics/p-5.jpg';
import p6 from '../assets/pics/p-6.jpg';

const data=[
    {
        id: 1,
        img : p1,
        title : 'Boat Headphone',
        price : '$1799',
        aosDelay : '0',
    },
    {
        id: 2,
        img : p2,
        title : 'Rocky Mountain',
        price : '$420',
        aosDelay : '200',
    },
    {
        id: 3,
        img : p3,
        title :'Goggles',
        price :'$320',
        aosDelay : '400',
    },
    {
        id: 4,
        img : p4,
        title : 'Gaming Headset',
        price : '$1200',
        aosDelay : '600',
        },
        {
            id: 5,
            img : p5,
            title :'Goggles',
            price :'$320',
            aosDelay : '500',
        },
        {
            id: 6,
            img : p6,
            title : 'Gaming Headset',
            price : '$1000',
            aosDelay : '550',
            },
]

const Products = ({theme,handlePopup}) => {
  return (
    <div>
        <div className='container mb-20'>
            <Heading title={'Our Products'} subtitle={'Explore Our Products'} />
            <ProductCard data={data} theme={theme} handlePopup={handlePopup}/>
        </div>
    </div>
  )
};

export default Products
