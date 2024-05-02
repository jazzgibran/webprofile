import React from 'react';
import { Link } from 'react-router-dom';
import papImage from '../assets/img/pap.jpg';

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='w-screen text-slate-700 justify-center h-screen items-center md:order-first flex md:flex-row flex-col'>
      <div
        id='text-container'
        className="font-quicksand pr-7 font-light w-8/12 md:w-[40%] ml-[5%]  "
      >
        <h1 className="text-3xl md:text-7xl mb-2">Hello, I'm Jazz!</h1>
        <p className="text-lg md:text-3xl mb-1">
          A passionate designer with a love for coding and creating innovative solutions.
        </p>
        <Link
          to="/projects"
          className="text-lg md:text-2xl transition-all duration-300 ease-in-out hover:scale-105 inline-block underline"
          style={{ transitionProperty: 'font-size, transform' }}
        >
          check out my works <span className=''>here!</span>
        </Link>
      </div>

      <div
        id='img-container'
        className="md:w-[400px] lg:w-[500px] mb-5 md:mb-0 xl:w-[700px] w-8/12 order-first md:order-1 "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ transition: 'transform 0.3s ease' }}
        >
          <Link to="/about">
            <img
              src={papImage}
              alt="Jazz"
              className='rounded-lg shadow-lg'
            />
          </Link>
        </motion.div>
      </div>


    </motion.div>
  );
};

export default Home;
