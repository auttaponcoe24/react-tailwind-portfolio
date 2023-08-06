import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src="https://picsum.photos/id/5/2000" alt="" />
        <div className='w-full h-screen absolute top-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Auttapon Chucheun</h1>
                <h2 className='sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a &nbsp;
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1000,
        'Web Full-Strack',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

                </h2>
                <div className='flex justify-evenly pt-6 max-w-[200px] w-full'>
                    <FaTwitter size={20} className='cursor-pointer' />
                    <FaFacebookF size={20} className='cursor-pointer' />
                    <FaInstagram size={20} className='cursor-pointer' />
                    <FaLinkedinIn  size={20} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main