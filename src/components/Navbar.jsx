import React,{useState} from 'react';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Dark from '../assets/pics/dark-mode.png';
import Light from '../assets/pics/light-mode.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const MenuLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'Shop', href: '#shop' },
  { id: 3, name: 'Blogs', href: '#blogs' },
  { id: 4, name: 'About', href: '#about'},
]

const Navbar = ({ theme, setTheme,handlePopup,order,setOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggle_theme =()=>{
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className={`${theme==='light'?'bg-white/50':'bg-gray-800/50'} dark:text-white duration-200 left-0 right-0 z-40 fixed`}>
      <div className='py-1 '>
        <div className="container flex justify-between">
          <div className=' flex items-center gap-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>GMshops</a>
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4 '>
                {
                  MenuLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.href}
                        className={`inline-block font-semibold ${theme==='light'?'text-gray-500 hover:text-black':'text-white hover:text-gray-400'}  px-4   dark:hover:text-white duration-200`}
                      >{data.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='Search' className={`search-bar ${theme==='dark'?'hover:bg-gray-800/50 bg-gray-800/20':'bg-white/50'} duration-200`} />
              <FaSearch className={`${theme=='light'?'text-gray-500':'text-white'} dark:text-gray-400 text-xl group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200`} />
            </div>
            <button className='relative p-3' onClick={handlePopup}>
              <TiShoppingCart className={`text-2xl ${theme=='light'?'text-gray-500':'text-white'} `} />
              {
                order>0 && (
                  <div className='w-4 h-4 rounded-full bg-red-500 text-white absolute top-0 right-0 flex items-center justify-center'>
                  {order}
                </div>
                )
              }
            </button>
            <img src={theme === 'light' ? Light : Dark} alt=""
              onClick={()=>toggle_theme()}
              className={`w-12 cursor-pointer right-0 z-10 transition-all duration-300`} />
            <div>
            <div className={`md:hidden ${theme==='light'?'text-black':'text-white'}`} onClick={toggleNavbar}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          {
            isOpen && (
              <ul className={`absolute top-16 right-0 w-full p-4 border rounded-xl ${theme==='light'?'text-black bg-white/40':'text-white bg-gray-400/50 border-none'}`}>
                {
                                    MenuLinks.map((data) => (
                                      <li key={data.id}>
                                        <a href={data.href}
                                          className={`inline-block font-semibold ${theme==='light'?'text-gray-500 hover:text-black':'text-white hover:text-gray-400'}  px-4   dark:hover:text-white duration-200`}
                                        >{data.name}</a>
                                      </li>
                                    ))
                }
              </ul>
          )}
        </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;
