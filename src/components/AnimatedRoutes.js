import React from 'react'
import {
    BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes,
    useLocation,
} from "react-router-dom";
import { About } from '../pages/About';
import { Projects } from '../pages/Project';
import { Contact } from '../pages/Contact';
import Home from '../pages/Home';

import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar';

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <div>
            <div
                className={`bg-slate-700 fixed h-screen -z-10 w-1/12 md:w-2/5 right-0`}
            ></div>
            <Navbar/>
            <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
