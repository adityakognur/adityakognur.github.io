import { motion } from "framer-motion";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div
  className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-500 text-white px-6 py-12 flex flex-col"
>
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-cyan-400 text-center tracking-wide mb-6"
  >
    About Me
  </motion.h1>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto pr-2"
       style={{ flex: 1 }}>
    {[
      {
        title: "Introduction",
        content: `Hi, I'm Aditya, an Information Science Graduate student from MS Ramaiah Institute of Technology. I'm passionate about full-stack development, especially the MERN stack, and real-world AI applications.`,
      },
      {
        title: "Education",
        content: `🎓 B.E. in Information Science & Engineering  
🏫 MS Ramaiah Institute of Technology  
📅 Final Year`,
      },
      {
        title: "Technical Skills",
        content: `Java, Python, JavaScript  
MERN Stack (MongoDB, Express.js, React.js, Node.js)  
SQL, REST APIs  
Tailwind CSS, Git & GitHub`,
      },
      {
        title: "Coursework",
        content: `Object-Oriented Programming (OOPs)  
Operating Systems (OS)  
Database Management Systems (DBMS)  
Machine Learning  
SQL`,
      },
      {
        title: "Experience",
        content: `💼 Intern at HAL (Hindustan Aeronautics Limited)  
▸ Worked on a Flight Price Prediction system using airline data and regression models.`,
      },
      {
        title: "Hobbies & Interests",
        content: `🏏 Cricket fan (MS Dhoni ❤️)  
👨‍💻 Exploring AI tools, building projects  
👨‍👩‍👦 Spending time with family and friends`,
      },
    ].map((section, i) => (
      <motion.section
        key={section.title}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
        }}
        className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-all duration-300 hover:bg-gray-800/70"
      >
        <h2 className="text-1xl text-emerald-300 font-semibold mb-4">
          {section.title}
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
          {section.content}
        </p>
      </motion.section>
    ))}
  </div>
</div>

  );
};

export default About;
