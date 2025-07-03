import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCogs,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import image from "../assets/my_photo.JPG";
import About from "./About";
import Projects from "./projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div
      className="bg-gray-900 text-white p-4 sm:p-6"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center mb-10"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Aditya G
        </motion.h1>
      </motion.div>

      {/* 3-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Skills */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl sm:text-3xl text-emerald-400 font-semibold mb-6 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <FaJava size={60} className="text-orange-400" />, name: "Java" },
              { icon: <FaPython size={60} className="text-yellow-300" />, name: "Python" },
              { icon: <FaJs size={60} className="text-yellow-400" />, name: "JavaScript" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                {skill.icon}
                <p className="mt-2 text-xl sm:text-2xl">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl sm:text-3xl text-teal-400 font-semibold mb-6 text-center">
            Coursework
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: "OOPs", icon: <MdOutlineComputer size={60} className="text-cyan-400" /> },
              { name: "Operating Systems", icon: <FaCogs size={60} className="text-emerald-400" /> },
              { name: "DBMS", icon: <FaDatabase size={60} className="text-yellow-300" /> },
              { name: "Machine Learning", icon: <FaRobot size={60} className="text-pink-400" /> },
              { name: "SQL", icon: <SiMysql size={60} className="text-blue-400" /> },
            ].map((course, i) => (
              <div
                key={i}
                className="w-full max-w-[150px] backdrop-blur-lg rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {course.icon}
                <p className="mt-3 text-center text-sm sm:text-base">{course.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Web Dev - MERN Stack */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-3xl p-6">
          <h2 className="text-2xl sm:text-3xl text-teal-400 font-semibold mb-6 text-center">
            Web Development (MERN Stack)
          </h2>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {[
              { icon: <SiMongodb size={60} className="text-green-500" />, name: "MongoDB" },
              { icon: <SiExpress size={60} className="text-gray-300" />, name: "Express" },
              { icon: <FaReact size={60} className="text-blue-400" />, name: "React" },
              { icon: <FaNodeJs size={60} className="text-green-400" />, name: "Node.js" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                {tech.icon}
                <p className="mt-2 text-xl sm:text-2xl">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
