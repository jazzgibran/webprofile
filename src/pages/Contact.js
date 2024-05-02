import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen "
    >
      <div className="max-w-4xl w-10/12 lg:w-full bg-white shadow-lg rounded-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-800 mb-4">Contact Me</h1>
          <p className="text-slate-600">Feel free to get in touch with me via the following channels:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to='mailto:jazz.gibran@gmail.com'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 hover:cursor-pointer p-4 rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12V12M12 12l.01-.01M12 12l-.01.01M12 12l-.01-.01M12 19v.01M17.68 21.56l-5.47-1.635a1 1 0 0 1-.62-.32l-4.72-4.72a1 1 0 0 1-.32-.62L5.44 6.32a1 1 0 0 1 .71-1.71l4.72 1.68a1 1 0 0 1 .62.32l4.72 4.72a1 1 0 0 1 .32.62l1.68 4.72a1 1 0 0 1-1.71.71z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">Email</h2>
                <p className="text-white">jazz.gibran@gmail.com</p>
              </div>
            </motion.div>
          </Link>
          <Link to='https://wa.me/082132925340'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 hover:cursor-pointer p-4 rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v1a3 3 0 0 0 3 3h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5l-2-3-2 3H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3v1l4-2 4 2v-1a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">Phone</h2>
                <p className="text-white">+62 821 3292 5340</p>
              </div>
            </motion.div>
          </Link>
          <Link to='https://maps.app.goo.gl/1qT5nK8v3TfxphPK8'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 cursor-pointer p-4 rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 0 0 5 5.2M6 9l6-2m0 0l6 2m-6-2v6m6-6v6m-6-6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4l-2-4-2 4h-4a2 2 0 0 0-2 2z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">Address</h2>
                <p className="text-white">Samarinda, East Borneo, ID</p>
              </div>
            </motion.div>
          </Link>
          <Link to="https://discord.com/users/378075118972436481">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 p-4 cursor-pointer rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15s-1 0-1 1-1 1-1 1-1 0-1-1 1-1 1-1 1 0 1 1zm0 0v-4m0 0s0-1 1-1h6s1 0 1 1v4s0 1-1 1h-6s-1 0-1-1zM7 15V7m0 0s0-1 1-1h6s1 0 1 1v8s0 1-1 1H8s-1 0-1-1zm0 0s-1 0-1-1 1-1 1-1h6s1 0 1 1v1m0-5v1m0 0s-1 0-1-1 1-1 1-1h6s1 0 1 1v1m0-5v1m0 0s-1 0-1-1 1-1 1-1h6s1 0 1 1v4s0 1-1 1h-6s-1 0-1-1zM8 7s-1 0-1-1 1-1 1-1h6s1 0 1 1v1m0 5s-1 0-1-1 1-1 1-1h6s1 0 1 1v4s0 1-1 1h-6s-1 0-1-1z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">Discord</h2>
                <p className="text-white">gamaumulu.</p>
              </div>
            </motion.div>
          </Link >
          <Link to='https://github.com/jazzgibran'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 cursor-pointer p-4 rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 15v4m0 0v-4m0 4h-4m4 0h4m5-8v4m0 0v-4m0 4h-4m4 0h4m2-6v4m0 0v-4m0 4h-4m4 0h4M6 9v4m0 0V9m0 4h4m-4 0H6m5-3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2l-2 4-2-4h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 .77.36 1 1 0 0 1 .2.8l-1 4a1 1 0 0 1-1 .8H9m9 0a1 1 0 0 0-1-1"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">GitHub</h2>
                <p className="text-white">github.com/jazzgibran</p>
              </div>
            </motion.div>
          </Link>
          <Link to='https://linkedin.com/in/jazz-o-gibran-88b9122b0'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 hover:bg-slate-600 cursor-pointer p-4 rounded-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div>
                <h2 className="text-lg font-semibold text-white">LinkedIn</h2>
                <p className="text-white">Jazz O'Gibran</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export { Contact };
