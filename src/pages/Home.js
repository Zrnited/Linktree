import React from 'react'
import profileImage from '../assets/zrnited.png'
import { links } from '../components/data'
import {IoMdShareAlt} from 'react-icons/io'
import {HiDotsHorizontal} from 'react-icons/hi'
import giticon from '../assets/giticon.png'
import slackicon from '../assets/slackicon.png'
import zurilogo from '../assets/zurilogo.png';
import zurisecondlogo from '../assets/secondloogo.png';
import { AiOutlineClose } from 'react-icons/ai';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Home = () => {

  const slackUsername = 'kolawoleMayowa';

  const [sidebar, setSidebar] = React.useState(false);

  if(sidebar){
    document.body.classList.add('hide')
  } else {
    document.body.classList.remove('hide')
  }

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 640){
      setSidebar(false);
    }
  })

  React.useEffect(()=>{
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <div className='flex flex-col items-center pt-16 gap-5 pb-10 z-20'>

      {/* SIDEBAR */}

      <aside className={!sidebar ? 'hidebar w-full fixed top-0 right-0 left-0 h-auto bg-black z-10 flex flex-col items-center bg-gray-100 p-5 border shadow flex' : 'showbar w-full fixed top-0 right-0 left-0 h-auto bg-black z-10 flex flex-col items-center bg-gray-100 p-5 border shadow flex'}>
        <div className='w-full flex flex-row justify-end'>
          <button 
            className='bg-gray-100 border border-gray-400 text-black text-base rounded-full p-2 bg-white font-semibold hover:bg-gray-200 text-xl hover:border hover:border-gray-500 hover:text-gray-500 hover:rounded-full transition ease-in-out delay-100'
              onClick={()=>setSidebar(!sidebar)}
            >
              <AiOutlineClose />
          </button>
        </div>
        <h1 className='text-black uppercase'>app designed by kolawole mayowa</h1>
        
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
      </aside>

      {/* SIDEBAR ENDS */}

      <div 
        className='absolute top-12 right-6 cursor-pointer w-40 h-40 rounded-full border-2 border-dotted border-gray-300 flex items-center text-gray-400 justify-center hover:bg-gray200 transition ease-in-out delay-100 hover:shadow-outline sm:hidden'
        onClick={()=>setSidebar(!sidebar)}
        >
        <HiDotsHorizontal />
      </div>
      <div className=' hidden absolute top-12 right-6 cursor-pointer w-40 h-40 rounded-full border-2 border-dotted border-gray-300 flex items-center text-gray-400 justify-center hover:bg-gray200 transition ease-in-out delay-100 hover:shadow-outline sm:flex sm:items-center sm:justify-center lg:right-72'>
        <IoMdShareAlt />
      </div>

      {/* PROFILE SECTION */}

      <div>
        <img 
          id='profile_img'
          src={profileImage}
          alt='profile-pic'
          className='w-88 h-90 rounded-full'
        />
      </div>

      <div> 
        <h1 id='twitter' className='font-bold text-18 lg:text-xl'> Kolawole Mayowa </h1> 
      </div>

      {/* PROFILE SECTION ENDS */}

      <div className='w-full flex flex-col justify-center items-center gap-7 lg:mt-5'>
        {links.map((link, index)=>{
          return (
            <motion.div whileHover={{scale: 1.1}} key={index} data-aos='fade-up' className='bg-gray200 w-90 text-center cursor-default text-base font-semibold flex flex-col items-center gap-2 py-6 rounded-lg hover:bg-gray300 transition ease-in-out delay-100 hover:border-solid hover:border hover:border-gray-400 lg:w-85'>
              
            <a id={link.id} href={link.link} rel='noreferrer' target={'_blank'} className='tracking-wide hover:opacity-75 transition ease-in-out delay-100 sm:text-lg md:text-xl'>{link.name}</a>
            </motion.div>
          )
        })}
      </div>

      {/* ADD SOCIAL MEDIA LINKS DIV AND A FOOTER */}
        <div data-aos='flip-left' className='hidden sm:flex sm:flex-row gap-5'>
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
    </div>
  )
}

export default Home