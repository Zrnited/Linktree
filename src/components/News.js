import React from 'react'
import { motion } from 'framer-motion'

const News = ({header, image, link}) => {
  return (
    <div className='flex flex-col gap-1 max-w-370 sm:max-w-320 lg:max-w-250'>
        <motion.img whileHover={{scale: 1.1}} className='cursor-pointer rounded-md h-218 w-auto lg:h-160 xl:h-170' src={image} alt='news-img'/>
        <h2 className='font-bold text-lg tracking-wide'>{header}</h2>
        <p className='lg:text-sm'>All of our Special Education Experts have a Degree in Special Education</p>
        <a className='underline text-blue-500 place-self-end mt-7' href={link} target={'_blank'}rel="noreferrer">Read more</a>
    </div>
  )
}

export default News