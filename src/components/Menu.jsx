import React,{ useState, useEffect } from 'react'
import Menucard from '../layouts/Menucard'

const Menu = () => {
    const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint of your API
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Error fetching menu data:', error));
  }, []);
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#ffdcab]'>
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
      {menuData.map((item) => (
          <Menucard
            key={item.id}
            title={item.title}
            img={item.image}
            // Add other props as needed
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
