import React from 'react'
import profileImage from '../assets/zrnited.png'
import { links } from '../components/data'
import {IoMdShareAlt} from 'react-icons/io'
import {HiDotsHorizontal} from 'react-icons/hi'

const Home = () => {

  return (
    <div className='flex flex-col items-center pt-16 gap-5 pb-10 z-20'>
      <div className='absolute top-12 right-6 cursor-pointer w-40 h-40 rounded-full border-2 border-dotted border-gray-300 flex items-center text-gray-400 justify-center hover:bg-gray200 transition ease-in-out delay-100 hover:shadow-outline'>
        <HiDotsHorizontal />
      </div>
      
      {/* <img 
        src={shareMobile}
        alt='share-icon'
        className='absolute top-12 right-6 cursor-pointer'
        onClick={()=>{
          alert('clicked!');
        }}
      /> */}

      <div>
        <img 
          src={profileImage}
          alt='profile-pic'
          className='w-88 h-90 rounded-full'
        />
      </div>

      <div> 
        <h1 className='font-bold text-18'> Kolawole Mayowa </h1> 
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-7'>
        {links.map((link, index)=>{
          return (
            <div key={index} className='bg-gray200 w-90 text-center cursor-default text-base font-semibold flex flex-col items-center gap-2 py-6 rounded-lg hover:bg-gray300 transition ease-in-out delay-100 hover:border-solid hover:border hover:border-gray-400'>
              <button id={link.id}>
                <a href={link.link} rel='noreferrer' target={'_blank'} className='tracking-wide hover:opacity-75 transition ease-in-out delay-100'>{link.name}</a>
              </button>
              {link.additionalText && <p className='text-xs w-3/4'>{link.additionalText}</p>}
            </div>
          )
        })}
      </div>

      {/* ADD TWO MORE DIVS */}
    </div>
  )
}

export default Home