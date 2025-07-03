import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: 'Happy Wraps – E-commerce Website',
    description:
      'A fully functional online gift-wrapping and accessories store built using the MERN stack. Includes product listings, cart, and admin panel.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'RERA GPT',
    description:
      'An AI chatbot built using Google Generative AI and Python to answer queries related to RERA rules, simplifying legal language for the real estate sector.',
    tech: ['Python', 'GenAI', 'Huggingface embedding model','Streamlit', 'FAISS'],
  },
  {
    title: "Alzheimer's Disease Detection System",
    description:
      'A deep learning-based system to detect stages of Alzheimer’s using brain MRI image classification and gait analysis. Uses Vision transformer and transformer based models.',
    tech: ['Python', 'GAIT-data', 'MRI Data','Vision-transformer'],
  },
];

const iconMap = {
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Express.js': <SiExpress className="text-gray-300" />,
  'React.js': <FaReact className="text-blue-400" />,
  'Node.js': <FaNodeJs className="text-green-400" />,
};

const Projects = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-black to-blue-500 text-white px-6 py-12 flex flex-col overflow-hidden"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-cyan-400 text-center mb-16"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,255,255,0.2)' }}
            className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg transition duration-300 hover:bg-gray-800/70"
          >
            <h2 className="text-2xl font-semibold text-emerald-300 mb-4">{project.title}</h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-cyan-800/30 px-3 py-1 rounded-full text-sm text-cyan-200"
                >
                  {iconMap[tech] || null}
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
