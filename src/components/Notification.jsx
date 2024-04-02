import { faBell, faCancel, faCross, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Notification = () => {
  return (
    <div className="bg-blue-500 h-10 w-full flex items-center justify-between font-roboto">
      <h1 className="text-center text-white text-sm flex-grow">Enable browser notifications to avoid missing out on important activity.</h1>
      <div>
        <button className="text-xs text-white font-medium rounded p-1 text-center inline-flex items-center bg-transparent border border-gray-300 border-opacity-100 backdrop-blur-4xl hover:bg-white hover:bg-opacity-20 focus:outline-none focus:bg-white focus:bg-opacity-20 mr-2">
        <FontAwesomeIcon icon={faBell} className='mr-1' />
          Enable Notifications
        </button>

        <FontAwesomeIcon icon={faX} className='text-white font-extralight mr-2 cursor-pointer'/>
      </div>
    </div>
  );
};

export default Notification;
