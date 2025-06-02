import React from 'react'
import frame from "../assets/Frame.png"

const EmptyTenant = () => {
  return (
    <div>
      <div className='text-center '>
        <img src={frame} alt="image" />
        <h1 className='font-nedium text-black text-[20px]'>No match found</h1>
        <p className='text-[#666] font-medium text-[16px] mb-6'>We couldn’t find any house that matches your search request.</p>
      </div>
    </div>
  );
}

export default EmptyTenant