import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, role, description, link }) => {
  return (
    <motion.div
      className="bg-white max-w-[450px] shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
    <Link to={link}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">Role: {role}</p>
        <p className="text-gray-700">{description}</p>
      </div>
      </Link>
    </motion.div>
    
  );
};

export default ProjectCard;
