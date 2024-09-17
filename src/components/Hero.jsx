import React from 'react';
import Slider from "react-slick";
import headphone from '../assets/pics/headphone.png';
import earphone from '../assets/pics/earphone.png';
import gaming from '../assets/pics/gaming.png';
import vr from '../assets/pics/vr-4.png'
import Shopbutton from './Shopbutton';


const items = [
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-primary',
    imgSrc: headphone,
    title: 'Headphone',
    type : 'Wireless',
  },
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-brandBlue',
    imgSrc: earphone,
    title: 'Earphone',
    type : 'Wireless',
  },
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-secondary',
    imgSrc: vr,
    title: 'VisualScreen',
    type : 'Wireless',
  },
  {
    color :' text-brandYellow',
    id: 1,
    subtitle :'Beats solo',
    imgSrc: gaming,
    title: 'gaming',
    type : 'Wired',
},
];
const Hero = ({theme,setTheme,handlePopup}) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
        pauseOnhover: false,
        pauseOnFocus: true

    };
    return (
        <div className='container pt-20' id='home'>
            <div className={`p-[4%] duration-200 ${theme === 'light'?'text-black bg-gradient-to-r from-slate-300/80 to-gray-100':
                'text-white bg-gradient-to-r from-slate-900/90 to-gray-850/90'} overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px]`}>
                <Slider {...settings}>
                    {
                        items.map((item,index)=>{
                            return (
                                <div key={index} >
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        <div className='font-bold flex flex-col justify-center pt-12 gap-4 sm:pl-3 sm:pt-0 text-center sm:text-left relative z-10'>
                                            <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'
                                            data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="600">{item.subtitle}</h1>
                                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'
                                            data-aos="zoom-out" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="600">{item.type}</h1>
                                            <h1 className='text-5xl uppercase text-white sm:text-6xl lg:text-7xl font-bold dark:text-white/5
                                            sm:text-[60px] md:text-[90px] xl:text-[120px]'
                                            data-aos="zoom-out-down" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="600">{item.title}</h1>
                                            <div onClick={handlePopup} data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="200">
                                                <Shopbutton text={'Shop by category'} bgcolor={'bg-primary'} textcolor={'text-white'}/>
                                            </div>
                                        </div>
                                        <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="600">
                                            <img src={item.imgSrc} alt="product Image"  
                                            className='w-[300px] sm:w-[400px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain
                                            mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'/>
                                        </div>
                                    </div>
                                </div>    
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Hero
