import React from 'react';
// import Typed from 'react-typed';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df90] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-3xl font-bold md:py-2'>Grow with data. </h1>
          <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold md:py-3'>Fast, flexible financing for</p>
            <TypeAnimation
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 py-4 text-[#00df90]'
             // Same String at the start will only be typed once, initially
            sequence={[
              'Welcome to my website',
              1000,
              'We provide Fast, flexible & financing for BTB',
              1000,
              'We provide Fast, flexible & financing for BTC ',
              1000,
              'We provide Fast, flexible & financing for SASS',
              1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '2em' }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
        /> 
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Moniter your Data analytics to increase revenue BTB,
            BTC & SASS plateform </p>
          <button className='bg-[#00df90]  w-[200px] rounded-md font-medium my-6  mx-auto py-3 text-black'> Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Hero