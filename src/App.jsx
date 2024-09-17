import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './components/Category';
import Category2 from './components/Category2';
import Services from './components/Services';
import headphone from './assets/pics/headphone.png';
import Banner from './components/Banner';
import Products from './components/Products';
import watch from './assets/pics/smartwatch2.png'
import Blogs from './components/Blogs';
import Brand from './components/Brand';
import Footer from './components/Footer';
import Popup from './components/Popup';
import AOS from "aos";
import "aos/dist/aos.css";

const data ={
    discount: "30% OFF",
title: "Fine Smile",
date: "10 Jan to 28 Jan",
image: headphone,
title2: "Air Solo Bass",
title3: "Winter Sale",
title4:
"Lorem ipsum, dolor sit amet consectetur adipisicing elit,Eaque reiciendis",
bgColor: "bg-primary",
text:"text-primary",
}

const data1 ={
  discount: "30% OFF",
title: "Fine Smile",
date: "10 Jan to 28 Jan",
image: watch,
title2: "Air Solo Bass",
title3: "Winter Sale",
title4:
"Lorem ipsum, dolor sit amet consectetur adipisicing elit,Eaque reiciendis",
bgColor: "bg-brandGreen",
text:"text-brandGreen",
}

const App = () => {
  const [popup, setPopup] = useState(false);
  const [theme,setTheme] = useState('light');
  const [order,setOrder] = useState(0);

  const handlePopup=()=>{
    setPopup(!popup);
  }

  const handleOrder =()=>{
    setOrder(order+1);
  }

  useEffect(()=>{
    AOS.init(
      {
        duration: 800,
      offset: 100, 
      easing: 'ease-in-sine',
      delay: 100,
      }
    );
    AOS.refresh();
  }, [])
  return (
    <div className={`${theme==='light'?'bg-white':'bg-gray-800'} duration-200`}>
      <Navbar theme={theme} setTheme={setTheme} handlePopup={handlePopup} order={order} setOrder={setOrder}/>
      {/* <Carousel/> */}
      <Hero theme={theme} setTheme={setTheme} handlePopup={handlePopup} />
      <Category />
      <Category2 />
      <Services theme={theme}/>
      <Banner data={data} handlePopup={handlePopup}/>
      <Products theme={theme} handlePopup={handlePopup}/>
      <Banner data={data1} handlePopup={handlePopup}/>
      <Blogs theme={theme} setTheme={setTheme}/>
      <Brand/>
      <Footer theme={theme} setTheme={setTheme}/>
      <Popup theme={theme} popup={popup} handlePopup={handlePopup} handleOrder={handleOrder}/>
    </div>
  )
}

export default App
