import React from 'react';

const Shopbutton = ({text,bgcolor,textcolor,handler=()=>{}}) => {
  return (
    <button className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105 duration-300 rounded-full py-2 px-8 relative z-10`}>
        {text}
    </button>
  )
}

export default Shopbutton
