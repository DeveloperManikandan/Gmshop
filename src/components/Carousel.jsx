import React,{useState} from 'react';
import headphone from '../assets/pics/headphone.png';
import earphone from '../assets/pics/earphone.png';
import gaming from '../assets/pics/gaming.png';
import macbook from '../assets/pics/macbook.png'


const items = [
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-primary',
    imgSrc: headphone,
    title: 'Headphone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-brandBlue',
    imgSrc: earphone,
    title: 'Earphone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  {
    id: 1,
    subtitle :'Beats solo',
    color :' text-secondary',
    imgSrc: macbook,
    title: 'Earphone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
  {
    color :' text-brandYellow',
    id: 1,
    subtitle :'Beats solo',
    imgSrc: gaming,
    title: 'gaming',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
  },
];
// console.log(items);

const Carousel = () => {
const [current,setCurrent] = useState(0);
  return (
    <div className="relative h-[800px] overflow-hidden -mt-12">
      <div className="w-full transform -translate-x-1/2">
        {items.map((item, index) => (
          <div key={index} className={`absolute  w-[70%] h-full transition-all ease-in-out duration-500 
            ${index === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            ${index === (current + 1) % items.length ? 'translate-x-[50%]' : ''}
            ${index === (current - 1 + items.length) % items.length ? 'translate-x-[-100%]' : ''}
          ${item.color}`}>
            <div className="flex items-center h-full">
              <div className={`w-1/2 ${index === current ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
                <button className="mt-4 py-2 px-4 border-b border-gray-500 text-sm tracking-wide font-bold">
                  See More
                </button>
              </div>
              <img src={item.imgSrc} alt={item.title} className="w-1/2 object-contain" />
            </div>
          
            {/* <p>{JSON.stringify(item.specifications)}</p> */}
            </div>
            
        ))}
      
      </div>
    </div>
  )
}

export default Carousel
