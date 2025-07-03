import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    label: "Phone",
    value: "+91 8884226913",
    href: "tel:+91 8884226913",
    icon: <FaPhone size={30} />,
  },
  {
    label: "Email",
    value: "adityakognur@gmail.com",
    href: "mailto:adityakognur@gmail.com",
    icon: <FaEnvelope size={30} />,
  },
  {
    label: "LinkedIn",
    value: "Aditya Kognoor",
    href: "https://www.linkedin.com/in/aditya-kognoor-b91190291/",
    icon: <FaLinkedin size={30} />,
  },
  {
    label: "GitHub",
    value: "adityakognur",
    href: "https://github.com/adityakognur",
    icon: <FaGithub size={30} />,
  },
  {
    label: "LeetCode",
    value: "aditya_kognoor",
    href: "https://leetcode.com/u/aditya_kognoor/",
    icon: <SiLeetcode size={30} />,
  },
];

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-black to-blue-500 text-white px-6 py-12 flex flex-col overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {" "}
      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Contact Me
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {contacts.map((contact, i) =>
          contact.label === "Email" ? (
            <a
              key={i}
              href={contact.href}
              className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="text-cyan-400 mb-3">{contact.icon}</div>
              <h2 className="text-xl font-semibold text-emerald-300 mb-1">
                {contact.label}
              </h2>
              <p className="text-gray-200 text-lg">{contact.value}</p>
            </a>
          ) : (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="text-cyan-400 mb-3">{contact.icon}</div>
              <h2 className="text-xl font-semibold text-emerald-300 mb-1">
                {contact.label}
              </h2>
              <p className="text-gray-200 text-lg">{contact.value}</p>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Contact;
