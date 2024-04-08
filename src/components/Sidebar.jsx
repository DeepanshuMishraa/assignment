import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faBars, faBell, faBook, faCircleHalfStroke, faClock, faClockFour, faCommentDollar, faHand, faLock, faMoon, faSearch, faShapes, faSortDown, faUserPlus, faX} from '@fortawesome/free-solid-svg-icons';
import profile from '../assets/profile.jpg';
import { Clock9 } from 'lucide';

const Sidebar = () => {

  const [dark,setDark] = useState(false);

  const [bar,setBar] = useState(false);
  return (
    <main className={`${dark && "dark"} min-h-screen`}>
    <div className='bg-gray-100 dark:text-neutral-300 dark:bg-neutral-900'>
    <FontAwesomeIcon icon={faBars}  onClick={()=>setBar(!bar)}  className='p-1 px-2  bg-gray-100 lg:hidden' />
    </div>
    {bar && <div className="max-lg:w-[22rem]  bg-gray-100 h-screen font-mons overflow-y-auto fixed left-0 top-0 z-50">
    <FontAwesomeIcon icon={faBars}  onClick={()=>setBar(!bar)}  className='p-1 px-2   bg-gray-100 lg:hidden' />
<div className="profile p-4 flex items-center justify-between">
  <div className="flex items-center gap-4">
    <img src={profile} height={30} width={30} className='rounded-full'/>
    <h1 className='font-bold font-sans text-gray-600'>rofero team</h1>
  </div>
  <div className='flex gap-4'>
    {/* <button onClick={()=>setDark(!dark)} className='bg-red-800 p-2'>
      {dark ? 'Light':'Dark'}
    </button> */}
    <FontAwesomeIcon icon={faMoon} className='bg-gray-200 rounded p-2 cursor-pointer hover:bg-white duration-150' />
  <FontAwesomeIcon icon={faBell} className='bg-gray-200 p-2 rounded cursor-pointer hover:bg-white duration-150' />
  </div>
</div>
<div className='search-box relative'>
  <div className="relative ml-2 mr-2 flex items-center">
    <input type="text" placeholder='Ask your AI assistant' className='flex-grow p-2 pl-10 rounded border-none focus:outline-none font-mono placeholder-gray-600 text-gray-600' />
    <FontAwesomeIcon icon={faHand} className='text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2' />
    <button className=" bg-transparent border-none outline-none px-2 border bg-white ml-2 rounded p-2">
      <FontAwesomeIcon icon={faSearch} className='text-gray-600 ' />
    </button>
  </div>
  <div className='box border bg-gray-200 mt-4 rounded-md p-2 ml-2 mr-2'>
      <div className="">
          <h1 className='font-semibold px-1 font-sans text-md text-gray-600'>Your team used 8/50 free docs</h1>
          <p className='text-xs px-1 text-gray-600'>Upgrade to create unlimited docs</p>
      </div>
  </div>
  <div className='tab-1'>
      <div className='mt-4 ml-6 text-gray-600'>
          <h1 className='p-1 mr-6'><FontAwesomeIcon icon={faClockFour} className='mr-2' />Catch Up</h1>
          <h1 className='p-1 mr-6'><FontAwesomeIcon  className="mr-2" icon={faCommentDollar} />Discussions</h1>
      </div>
  </div>
  <div className='tab-2 mt-4'>
      <div className='ml-6'>
          <h1 className='font-bold text-gray-600'>Favourites</h1>
          <p className='py-4 text-gray-600'>👋 Getting Started</p>
      </div>
  </div>
  <div className='my-channels'>
      <div className='ml-6 mt-4 text-gray-600'>
          <h1 className='font-bold'>My Channels</h1>
          <div>
          <h2 className='py-4'><FontAwesomeIcon icon={faSortDown} className='mr-4 text-gray-400' /><FontAwesomeIcon icon={faLock} className='mr-2' />My private channel</h2>
          <p className='  bg-gray-200 rounded p-2 ml-4'>👋 Getting started</p>
          </div>
          <div className='text-gray-600 mt-4'>
              <h1><FontAwesomeIcon icon={faSortDown} className='mr-3' rotation={270} /><FontAwesomeIcon icon={faBook} className='mr-2' />Engineering</h1>
          </div>
          <div className='text-gray-600 mt-4'>
              <h1><FontAwesomeIcon icon={faSortDown} className='mr-3' rotation={270} /><FontAwesomeIcon icon={faBook} className='mr-2' />Product</h1>
          </div>
      </div>
  </div>
  <div className='tab-3 flex flex-col mt-[10rem]  ml-8'>
      <div className='mb-4 space-y-2'>
      <h1 className='p-1'><FontAwesomeIcon icon={faUserPlus} className='mr-1' />Add People</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faCircleHalfStroke} className='mr-1' />Templates</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faShapes} className='mr-1' />Shared with me</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faArchive} className='mr-1' />Archive</h1>
      </div>
  </div>
</div>
</div>    
}
 <div className="md:w-[20rem] lg:w-[20rem] w-[22rem] bg-gray-100 h-full font-mons max-lg:hidden">

<div className="profile p-4 flex items-center justify-between">
  <div className="flex items-center gap-4">
    <img src={profile} height={30} width={30} className='rounded-full'/>
    <h1 className='font-bold font-sans text-gray-600'>rofero team</h1>
  </div>
  <div className='flex gap-4'>
  <FontAwesomeIcon icon={faMoon} className='bg-gray-200 rounded p-2 cursor-pointer hover:bg-white duration-150' />
  <FontAwesomeIcon icon={faBell} className='bg-gray-200 p-2 rounded cursor-pointer hover:bg-white duration-150' />
  </div>
</div>
<div className='search-box relative'>
  <div className="relative ml-2 mr-2 flex items-center">
    <input type="text" placeholder='Ask your AI assistant' className='flex-grow p-2 pl-10 rounded border-none focus:outline-none font-mono placeholder-gray-600 text-gray-600' />
    <FontAwesomeIcon icon={faHand} className='text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2' />
    <button className=" bg-transparent border-none outline-none px-2 border bg-white ml-2 rounded p-2">
      <FontAwesomeIcon icon={faSearch} className='text-gray-600 ' />
    </button>
  </div>
  <div className='box border bg-gray-200 mt-4 rounded-md p-2 ml-2 mr-2'>
      <div className="">
          <h1 className='font-semibold px-1 font-sans text-md text-gray-600'>Your team used 8/50 free docs</h1>
          <p className='text-xs px-1 text-gray-600'>Upgrade to create unlimited docs</p>
      </div>
  </div>
  <div className='tab-1'>
      <div className='mt-4 ml-6 text-gray-600'>
          <h1 className='p-1 mr-6'><FontAwesomeIcon icon={faClockFour} className='mr-2' />Catch Up</h1>
          <h1 className='p-1 mr-6'><FontAwesomeIcon  className="mr-2" icon={faCommentDollar} />Discussions</h1>
      </div>
  </div>
  <div className='tab-2 mt-4'>
      <div className='ml-6'>
          <h1 className='font-bold text-gray-600'>Favourites</h1>
          <p className='py-4 text-gray-600'>👋 Getting Started</p>
      </div>
  </div>
  <div className='my-channels'>
      <div className='ml-6 mt-4 text-gray-600'>
          <h1 className='font-bold'>My Channels</h1>
          <div>
          <h2 className='py-4'><FontAwesomeIcon icon={faSortDown} className='mr-4 text-gray-400' /><FontAwesomeIcon icon={faLock} className='mr-2' />My private channel</h2>
          <p className='  bg-gray-200 rounded p-2 ml-4'>👋 Getting started</p>
          </div>
          <div className='text-gray-600 mt-4'>
              <h1><FontAwesomeIcon icon={faSortDown} className='mr-3' rotation={270} /><FontAwesomeIcon icon={faBook} className='mr-2' />Engineering</h1>
          </div>
          <div className='text-gray-600 mt-4'>
              <h1><FontAwesomeIcon icon={faSortDown} className='mr-3' rotation={270} /><FontAwesomeIcon icon={faBook} className='mr-2' />Product</h1>
          </div>
      </div>
  </div>
  <div className='tab-3 flex flex-col mt-[20rem]  ml-8'>
      <div className='mb-4 space-y-2'>
      <h1 className='p-1'><FontAwesomeIcon icon={faUserPlus} className='mr-1' />Add People</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faCircleHalfStroke} className='mr-1' />Templates</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faShapes} className='mr-1' />Shared with me</h1>
      <h1 className='p-1'><FontAwesomeIcon icon={faArchive} className='mr-1' />Archive</h1>
      </div>
  </div>
</div>
</div>    
    </main>
  )
}

export default Sidebar;
