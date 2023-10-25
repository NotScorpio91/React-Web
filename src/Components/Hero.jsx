import React from 'react'
import TypingEffects from "react-typing-writer-effect";

function Hero() {
    return (
        <div className='text-white flex justify-center'>
      <div className='max-w-[800px] mt-28 w-full h-screen mx0auto text-center flex flex-col '>
        <p className='text-[#00df9a]  font-bold py-2 hover:cursor-text'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-2 md:py-6 hover:cursor-text'>Grow with data.</h1>
        <div className='flex justify-center items-center space-x-2'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold hover:cursor-text'>Fast, flexible financing for</p>
        <span className='sm:hidden block font-bold py-2  hover:cursor-text'>
        <TypingEffects
        className='sm:hidden block font-bold '
        textArray={["BTB", "BTC", "SASS"]}
        speed={200}
        size={18}
        />
        </span>
        <span 
        className='sm:block hidden font-bold py-2  hover:cursor-text'>
          <TypingEffects
        className='sm:block hidden font-bold '
        textArray={["BTB", "BTC", "SASS"]}
        speed={200}
        size={40}
        />
         </span>  
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-300 py-2'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <div className='py-4'>
        <button className='bg-white text-[#000000] hover:text-white hover:bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
