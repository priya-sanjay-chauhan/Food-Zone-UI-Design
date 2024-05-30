import React, { useState } from 'react'
import data from './data.json'
import Button from './Button'

const SearchResult = ({data}) => {
  
  return (
    <div className=' grid grid-cols-2 lg:grid-cols-3 gap-8 text-white justify-items-center '>
        {data?.map(({ name, price, text, image, type })=>{
            return <div className="bg-[url('/images/Card.png')]  flex my-4 gap-8 border rounded-2xl p-4 w-[16rem] md:w-[21rem]  border-none" key={name}>
            <div>
              <img src={image} alt="Image here..." />
            </div> 
      
            <div>
              <div className='w-[8rem] h-[6rem] md:w-[11rem]'>
                <h2>{name}</h2>
                <h2 className='text-[0.6rem] md:text-xs font-light md:font-normal '>{text}</h2>
                {/* <p>{type}</p> */}
              </div>
              <div className='flex justify-end items-end '>
                <Button>${price}.00</Button>
              </div>
            </div>
          </div>
            
        })}
    </div>
  )
}

export default SearchResult