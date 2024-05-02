// WorkCard.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WorkCard = ({ title, image, description = "Click the image to see in full size" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[150px] md:w-[350px] py-2 md:p-4 mx-2">
      <div className="relative">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={title}
          className="w-full md:h-[350px] h-[150px] object-cover cursor-pointer"
          onClick={toggleModal}
        />
        <p className="text-gray-700 text-center font-semibold">{title}</p>
        

        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-10 p-5 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-white rounded-lg p-8 max-w-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <Link to={image}><img src={image} alt={title} className="w-full h-full mb-4" /></Link>
              <p className="text-center text-gray-700">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
