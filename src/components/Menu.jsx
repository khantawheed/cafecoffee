import React, { useState, useEffect } from 'react';
import Menucard from '../layouts/Menucard';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Error fetching menu data:', error));
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menuData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#ffdcab]'>
      <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
      <div className='flex flex-wrap pb-8 gap-8 justify-center'>
        {currentItems.map((item) => (
          <Menucard key={item.id} title={item.title} img={item.image} />
        ))}
      </div>
      <div className='flex justify-center'>
        {Array.from({ length: Math.ceil(menuData.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 bg-[#ab6b2e] text-white rounded ${
              currentPage === index + 1 ? 'bg-[#ab6b2e]' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
