// ProjectsPage.js
import React from 'react';
import { motion } from 'framer-motion';
import WorkCard from '../components/WorkCard';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const works = [
    {
      title: 'Ariana Grande',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2aefe51-3060-4a84-8d76-8ffd19e53ac3/dh6149o-ee665145-065b-4b2c-a3ee-0d142e7a4995.png/v1/fill/w_1280,h_1793,q_80,strp/ariana_grande_by_jazz_sama_dh6149o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5MyIsInBhdGgiOiJcL2ZcL2IyYWVmZTUxLTMwNjAtNGE4NC04ZDc2LThmZmQxOWU1M2FjM1wvZGg2MTQ5by1lZTY2NTE0NS0wNjViLTRiMmMtYTNlZS0wZDE0MmU3YTQ5OTUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ozgFqjyIDKTTJu-mQMDBqIX6akkxp-JwrVIykepKq3I',
    },
    {
      title: 'PPPORIN',
      image: 'https://i.imgur.com/LGg4pgW.png',
    },
    {
      title: 'Vaporwave',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2aefe51-3060-4a84-8d76-8ffd19e53ac3/df19cim-667c2c32-291b-468c-9769-7c54cfb6b08f.jpg/v1/fill/w_1280,h_1280,q_75,strp/uhh_by_jazz_sama_df19cim-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2IyYWVmZTUxLTMwNjAtNGE4NC04ZDc2LThmZmQxOWU1M2FjM1wvZGYxOWNpbS02NjdjMmMzMi0yOTFiLTQ2OGMtOTc2OS03YzU0Y2ZiNmIwOGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.43QUfvEdx0D85GTZ5zqbTrw5dnszCEjWPfa8CMsXZpo',
    },
    {
      title: 'K/DA Ahri',
      image: 'https://i.imgur.com/42WWKEd.jpeg',
    },
    {
      title: "Granblue Fantasy - Jeanne D'Arc",
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2aefe51-3060-4a84-8d76-8ffd19e53ac3/dhbwd5c-f5d75bd8-a60c-48c8-b0b8-4cc1f14007a0.jpg/v1/fill/w_851,h_315,q_75,strp/granblue_fantasy___jeanne_d_arc_by_jazz_sama_dhbwd5c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzE1IiwicGF0aCI6IlwvZlwvYjJhZWZlNTEtMzA2MC00YTg0LThkNzYtOGZmZDE5ZTUzYWMzXC9kaGJ3ZDVjLWY1ZDc1YmQ4LWE2MGMtNDhjOC1iMGI4LTRjYzFmMTQwMDdhMC5qcGciLCJ3aWR0aCI6Ijw9ODUxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0saoN1tzBMQPfga-mfybRhPI4v6mqOwnYJfGkvqAuZk',
    },
    {
      title: "Yuzuki Yukari",
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2aefe51-3060-4a84-8d76-8ffd19e53ac3/dhbwdrb-5814b825-1afe-403d-8c15-d4e0f14de57d.jpg/v1/fill/w_851,h_315,q_75,strp/yuzuki_yukari__by_jazz_sama_dhbwdrb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzE1IiwicGF0aCI6IlwvZlwvYjJhZWZlNTEtMzA2MC00YTg0LThkNzYtOGZmZDE5ZTUzYWMzXC9kaGJ3ZHJiLTU4MTRiODI1LTFhZmUtNDAzZC04YzE1LWQ0ZTBmMTRkZTU3ZC5qcGciLCJ3aWR0aCI6Ijw9ODUxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.w3VRXyvVh47k835o7IEj6Xj1k8S5O3DWDnwWnENBZi0',
    },
    {
      title: 'Flandre Scarlet',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2aefe51-3060-4a84-8d76-8ffd19e53ac3/df90qvb-a4b8f765-d94b-499a-aeec-b6366d83fb85.png/v1/fill/w_1192,h_670,q_70,strp/flandre_scarlet_wallpaper_by_jazz_sama_df90qvb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjJhZWZlNTEtMzA2MC00YTg0LThkNzYtOGZmZDE5ZTUzYWMzXC9kZjkwcXZiLWE0YjhmNzY1LWQ5NGItNDk5YS1hZWVjLWI2MzY2ZDgzZmI4NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RVHxkz6twW4e5xWpg7hS4q1unDVY5Tz8Kix7WHriedY', 
    },
    
    // Add more projects as needed
  ];
  const projects = [
    {
      title: 'Casual Legends App',
      role: 'Quality Assurance',
      description: 'Casual Legends is an immersive role-playing adventure game. It is an adventure RPG game similar to D&D in which you roll the dice at key moments to determine your level of success or failure. But more importantly, it is a theatre of the mind in which you co-create the story and the world with AI.',
      link: 'https://casuallegends.app/'
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row font-quicksand pt-5"
    >
      <div className='py-8 md:w-3/5 '>
        <h2 className="text-3xl mb-4 mx-5 text-slate-700">WORKS</h2>
        <div className="w-full flex flex-wrap justify-center">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
      <div className='py-8 md:w-2/5 '>
        <h2 className="text-3xl mb-4 mx-5 text-slate-700 md:text-white">PROJECTS</h2>
          <div className="w-full p-4 flex flex-wrap pl-5 justify-center md:justify-start">
          {projects.map((work, index) => (
            <ProjectCard key={index} {...work} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export  {Projects};
