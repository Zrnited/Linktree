import React from 'react'
import profileImage from '../assets/zrnited.png'
import { links } from '../components/data'
import {IoMdShareAlt} from 'react-icons/io'
import {HiDotsHorizontal} from 'react-icons/hi'
import giticon from '../assets/giticon.png'
import slackicon from '../assets/slackicon.png'
import zurilogo from '../assets/zurilogo.png';
import cameraLogo from '../assets/camera.png';
import zurisecondlogo from '../assets/secondloogo.png';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Home = () => {

  const [overlay, setOverlay] = React.useState(false);

  return (
    <div className='flex flex-col items-center pt-16 gap-5 pb-10 z-20'>

      <div 
        className='absolute top-12 right-6 cursor-pointer w-40 h-40 rounded-full border-2 border-dotted border-gray300 flex items-center text-gray-400 justify-center hover:bg-gray200 transition ease-in-out delay-100 hover:shadow-outline sm:hidden'
        >
        <HiDotsHorizontal />
      </div>
      <div className=' hidden absolute top-12 right-6 cursor-pointer w-40 h-40 rounded-full border-2 border-dotted border-gray300 items-center text-gray-400 justify-center hover:bg-gray200 transition ease-in-out delay-100 hover:shadow-outline sm:flex sm:items-center sm:justify-center lg:right-72'>
        <IoMdShareAlt />
      </div>

      {/* PROFILE SECTION */}

      <div 
        className='relative cursor-pointer'
        onMouseOver={()=>setOverlay(true)}
        onMouseLeave={()=>setOverlay(false)}
        >
        <img 
          id='profile__img'
          src={profileImage}
          alt='profile-pic'
          className='w-88 h-90 rounded-full'
        />
        {overlay && <div className='absolute top-0 bottom-0 w-full rounded-full flex items-center justify-center bg-overlay transition ease-in-out delay-100'>
            <img 
              src={cameraLogo}
              alt='camera-logo'
              className='mt-12'
            />
        </div>}
      </div>

      <div> 
        <h1 id='twitter' className='font-bold text-18 lg:text-xl'> Kolawole Mayowa </h1> 
        <h1 id='slack' className='hidden'> Kolawole Mayowa </h1> 
      </div>

      {/* PROFILE SECTION ENDS */}

      <div className='w-full flex flex-col justify-center items-center gap-7 lg:mt-5'>
        {links.map((link, index)=>{
          return (
              <motion.a 
                whileHover={{scale: 0.9}}
                id={link.id} 
                href={link.link} 
                key={index}
                rel='noreferrer' 
                target={'_blank'} 
                className='cursor-pointer tracking-wide hover:opacity-75 bg-gray200 w-90 text-center text-base font-semibold flex flex-col items-center gap-2 py-4 rounded-lg hover:bg-gray300 transition ease-in-out delay-100 lg:w-85 sm:text-lg md:text-xl lg:py-6'
                >
                  {link.name}
              </motion.a>
          )
        })}

        <motion.a 
          href='/contact'
          id='contact'
          className='cursor-pointer tracking-wide hover:opacity-75 bg-gray200 w-90 text-center text-base font-semibold flex flex-col items-center gap-2 py-4 rounded-lg hover:bg-gray300 transition ease-in-out delay-100 lg:w-85 sm:text-lg md:text-xl lg:py-6'
          whileHover={{scale: 0.9}}
        >
          Contact
        </motion.a>
      </div>

      {/* ADD SOCIAL MEDIA LINKS DIV AND A FOOTER */}
        <div className='hidden sm:flex sm:flex-row gap-5'>
          <a href='https://slack.com/kolamayh' target={'_blank'} rel="noreferrer">
            <img 
              id='slack'
              src={slackicon}
              alt='git-icon'
            />
          </a>
        
          <a href='https://github.com/Zrnited'target="_blank" rel="noreferrer">
            <img 
              src={giticon}
              alt='slack-icon'
            />
          </a>
        </div>
      

      <footer className='hidden sm:flex sm:flex-col w-90 mt-20'>
        <div className='w-full h-2 bg-gray200 mb-4'></div>
        <div className='sm:flex sm:flex-row w-full gap-4 items-center justify-between'>
          <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
            <img 
              src={zurilogo}
              alt='zuri-logo'
              className='sm:w-4/5 lg:w-full'
            />
          </a>
          <p className='lg:text-lg'>HNG Internship 9 Frontend Task</p>
          <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
            <img 
              src={zurisecondlogo}
              alt='zuri-logo'
              className='sm:w-4/5 lg:w-full'
            />
          </a>
        </div>
      </footer>

      <footer className='flex w-full sm:hidden '>
        <div className={'hidebar w-full h-auto z-10 flex flex-col items-center p-5'}>
          <div className='w-full flex flex-row justify-end'>
            </div>

              <div className='flex flex-row gap-5 mt-5'>
                <a href='https://slack.com/Mayowa' target={'_blank'} rel="noreferrer">
                  <img 
                    id='slack'
                    src={slackicon}
                    alt='git-icon'
                  />
                </a>
              
                <a href='https://github.com/Zrnited'target="_blank" rel="noreferrer">
                  <img 
                    src={giticon}
                    alt='slack-icon'
                  />
                </a>
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-2'>
              <div className='w-full h-2 bg-gray-500 mt-4'></div>
              <div className='flex flex-row w-90 items-center justify-center gap-4'>
                <div className='w-1/2 flex justify-center items-center'>
                  <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
                    <img 
                      src={zurilogo}
                      alt='zuri-logo'
                      className='w-2/3'
                    />
                  </a>
                </div>
                
                <div className='w-1/2 flex justify-end items-center'>
                  <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
                    <img 
                      src={zurisecondlogo}
                      alt='zuri-logo'
                      className='w-2/3'
                    />
                  </a>
                </div>
              </div>
              <p className='text-base mt-2'>HNG Internship 9 Frontend Task</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Home