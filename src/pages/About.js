import React from 'react';
import papImage from '../assets/img/pap.jpg';
import { motion } from 'framer-motion'
const About = () => {

  return (
    
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} className=" font-quicksand container mx-auto px-4 pt-24 flex flex-col md:flex-row">

        {/* Left Side: About Me and Professional Experience Container */}
        <div className="md:w-2/3 pr-8 order-1">
          {/* About Me Container */}
          <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-light mb-8 border-b-4 border-slate-700 pb-2">About Me</h1>
            <p className="md:text-lg leading-relaxed">
            Aspiring Graphic Designer with a passion for creative expression and a strong foundation in design principles. Self-motivated and detail-oriented individual with a knack for visual storytelling. 
            I also have experience in web development and UI design. I love turning ideas into reality and creating user-friendly interfaces.
            I am eager to leverage my skills in graphic design and front-end engineering.
            </p>
          </div>

          {/* Professional Experience and Skills Container */}
          <div className="flex flex-col gap-y-11 md:flex-row md:justify-between mb-16 bg-white p-8 rounded-lg shadow-lg">
            {/* Professional Experience */}
            <div className="md:w-1/2 pr-8">
              <h2 className="text-3xl md:text-4xl font-quicksand font-light mb-6 border-b-4 border-slate-700 pb-2">Experiences</h2>
              <ul className="list-disc ml-6">
                <li className="mb-4">Internship - Samarinda City Library and Archives Service - 2021</li>
                <li className="mb-4">Participant - Digital Talent Scholaship (Fresh Graduate Academy) – Java (Oracle)
                  - 2021</li>
                <li className="mb-4">Freelance - PT. EasyGO Indonesia – GPS Technician - 2023-Present </li>
                <li className="mb-4">Part Time – Casual Legends App - Quality Assurance, Front-end Engineer - 2024-Present</li>
              </ul>
            </div>

            {/* Skills and Expertise */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-quicksand font-light mb-6 border-b-4 border-slate-700 pb-2">Skills and Expertise</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-slate-700 bg-opacity-25 px-3 md:px-6  py-3 rounded-full md:text-lg">Adobe Photoshop</span>
                <span className="bg-slate-700 bg-opacity-25 px-3 md:px-6  py-3 rounded-full md:text-lg">Filmora</span>
                <span className="bg-slate-700 bg-opacity-25 px-3 md:px-6  py-3 rounded-full md:text-lg">Canva</span>
                <span className="bg-slate-700 bg-opacity-25 px-3 md:px-6 py-3 rounded-full md:text-lg">React JS</span>
                <span className="bg-slate-700 bg-opacity-25 px-3 md:px-6  py-3 rounded-full md:text-lg">TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Picture, Name, Location, Email, and Phone Container */}
        <div className="md:w-1/3 pl-8 flex flex-col md:order-2">
          {/* Picture */}
          <div className="w-[95%] mb-8">
            <img
              src={papImage}
              alt="Jazz"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Name, Location, Email, and Phone */}
          <div className="md:flex flex-wrap flex-row font-light md:p-3 mb-5 text-slate-800 md:text-white">
            <div className="basis-1/2 pb-8">
              <h2 className="text-2xl md:text-3xl mb-4">Name:</h2>
              <p className="text-lg">Jazz O'Gibran</p>
            </div>
            <div className="basis-1/2 pb-8">
              <h2 className="text-3xl mb-4">Location:</h2>
              <p className="text-lg">Samarinda, Indonesia</p>
            </div>
            <div className="basis-1/2 pb-8">
              <h2 className="text-3xl mb-4">Email:</h2>
              <p className="text-lg">jazz.gibran@gmail.com</p>
            </div>
            <div className="basis-1/2 pb-8">
              <h2 className="text-3xl mb-4">Phone:</h2>
              <p className="text-lg">+62 821 3292 5340</p>
            </div>
          </div>
        </div>
      </motion.div>
   
  );
};

export { About };
