"use client"
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Phone, X, Instagram } from "lucide-react";

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    // ===== EXISTING PROJECTS =====
    {
      name: "Faces Consent",
      desc: "Digital consent, prescriptions, booking and workflow platform.",
      tech: "React, Redux Toolkit, Tailwind, PostgreSQL",
      details:
        "Developed a comprehensive healthcare workflow platform used by aesthetic and medical professionals to manage client consent, prescriptions, appointments, and treatment workflows. Built dynamic role-based dashboards for practitioners, prescribers, and pharmacies, enabling secure prescription lifecycle management. Implemented advanced filtering, digital document management, and AI-powered product and client summary generation to improve operational efficiency and reduce manual work.",
    },
    {
      name: "Enseedling Job Portal",
      desc: "Job portal and e-learning multi-role platform.",
      tech: "Next.js, Zustand, Node.js, PostgreSQL",
      details:
        "Built a full-scale job portal and e-learning ecosystem connecting job seekers, employers, and educators on a single platform. Designed a secure multi-role authentication system and developed scalable backend APIs to handle job listings, applications, and course content delivery. Focused on performance optimization, scalable architecture, and smooth user experience for high user concurrency.",
    },
    {
      name: "Lifecell CRM",
      desc: "CRM system for field sales executives.",
      tech: "Next.js, Redux Toolkit, Tailwind",
      details:
        "Developed a production-grade CRM platform for field sales teams to streamline lead management, customer tracking, and sales lifecycle processes. Implemented real-time data updates, role-based dashboards, and performance tracking tools to help sales teams improve productivity and decision-making. Designed for scalability and reliability for enterprise-level usage.",

    },

    // ===== NEW PROJECTS ADDED (NOT REPLACED) =====

    {
      name: "MyWord (Backend)",
      desc: "Real-time multiplayer word game backend with AI and solo mode.",
      tech: "Node.js, Socket.io, PostgreSQL",
      details:
        "Engineered a real-time multiplayer game backend supporting gameplay with friends, random players, AI bot opponents, and solo practice mode. Built socket-based real-time game communication using Socket.io and optimized database queries for fast gameplay response. Designed scalable game session handling and matchmaking logic to support concurrent players efficiently.",
    },

    {
      name: "SmartChair Webapp",
      desc: "IoT sensor analytics admin dashboard.",
      tech: "Next.js, GraphQL, AWS Cognito",
      details:
        "Developed an IoT analytics admin platform for monitoring smart chair sensor data in real-time. Built GraphQL-based data communication for optimized data fetching and implemented secure authentication using AWS Cognito. Designed multiple modules including device health monitoring, OTA firmware updates, event tracking, and user/device lifecycle management.",
      url: "https://app.smartchair.ai",
    },

    {
      name: "Tangeebl Webapp",
      desc: "Property selling platform admin management.",
      tech: "React.js, Context API",
      details:
        "Built an admin management platform for a property marketplace mobile application. Developed modules for user management, subscription handling, property listing moderation, and business reporting dashboards. Focused on data integrity, admin workflow efficiency, and real-time data visualization for operational decision-making.",
      url: "http://admin.tangeebl.com",
    },

    {
      name: "MyWord Admin Panel",
      desc: "Word game admin dashboard and CMS management.",
      tech: "React.js, Context API",
      details:
        "Developed an administrative control panel to manage game ecosystem data including users, dictionary management, subscription plans, and CMS-driven game content such as tutorials, rules, and policy pages. Designed scalable admin workflows and optimized data handling for large user base management.",

      url: "https://admin.bobsmyword.com",
    },

    {
      name: "Conjoin webapp",
      desc: "Dating app admin dashboard.",
      tech: "React.js, Context API",
      details:
        "Built an admin dashboard for a dating platform to manage user profiles, matching logic questions, game-based engagement features, and platform analytics. Implemented modular admin tools to help platform administrators monitor activity, manage reports, and improve user engagement strategies.",
      url: "https://admin.conjoin.com",
    },
  ];


  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Mouse Follow Gradient */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[200px] opacity-30 bg-red-600"
        animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-red-500 origin-left z-50"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
              Pratik Bhandari
            </h1>
            <div className="hidden md:flex gap-8 text-lg text-gray-300">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#trust" className="hover:text-white transition">
                Expertise
              </a>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div id="about">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Fullstack Software Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl"
              >
                I build high-performance web applications that help businesses automate processes, improve user experience, and scale faster. I have 3.5+ years of experience working with startups, products, and client projects using React.js, Next.js, Node.js, and modern database systems.
              </motion.p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/resume/Pratik_Bhandari_cv.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-500 transition font-medium inline-flex items-center justify-center"
                >
                  Download Resume
                </a>

                <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
                  <a href="#projects"> View Projects</a>
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-red-600 via-red-500 to-red-400 p-[2px]"
              >
                {/* <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center text-5xl sm:text-6xl font-bold">
                  PB
                </div> */}

                <div className="w-full h-full rounded-3xl bg-black overflow-hidden">
                  <img
                    src="/profile-vercel.png" // replace with your image path
                    alt="Pratik Bhandari"
                    className="w-full h-full object-cover"
                  />
                </div>


              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TRUST SECTION */}
      <section id="trust" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-12">
            Delivering Reliable, Scalable Digital Solutions
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Focused Development",
                desc: "I build solutions that align with business goals, not just technical requirements.",
              },
              {
                title: "Scalable Architecture",
                desc: "Applications designed for long-term growth, performance and maintainability.",
              },
              {
                title: "Reliable Communication",
                desc: "Clear updates, transparent timelines and professional collaboration.",
              },
              {
                title: "Production Ready Code",
                desc: "Clean, tested and optimized code following industry best practices.",
              },
              {
                title: "Problem Solver",
                desc: "Strong debugging and analytical skills to solve complex technical challenges.",
              },
              {
                title: "Long Term Support",
                desc: "Available for future improvements, scaling and feature upgrades.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-12">
            Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition"
                onClick={() => setSelectedProject(project)}
              >
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-400 mt-3 text-sm sm:text-base">
                  {project.desc}
                </p>
                <p className="text-red-400 text-sm mt-4">
                  {project.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.8, y: 80, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            className="bg-slate-900 rounded-3xl p-6 sm:p-10 max-w-xl w-full relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {selectedProject.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {selectedProject.details}
            </p>
            <p className="text-red-400">
              {selectedProject.tech}
            </p>
            {
              selectedProject?.url &&
              <p className="text-blue-400">
                URL - {selectedProject.url}
              </p>
            }
          </motion.div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-12">
            Contact
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "pratikbhandari00722@gmail.com",
                link: "mailto:pratikbhandari00722@gmail.com",
              },
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "+91 9664698768",
                link: "tel:+919664698768",
              },
              {
                icon: <Instagram size={20} />,
                label: "Instagram",
                value: "pratik.webstudio",
                link: "https://www.instagram.com/pratik.webstudio/",
              },
              {
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
                value: "Pratik Bhandari",
                link: "https://www.linkedin.com/in/pratik-bhandari-136b5519a",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition cursor-pointer"
              >
                {item.icon}
                <h4 className="font-semibold">{item.label}</h4>
                <p className="text-gray-100 text-sm break-all">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/10 relative z-10">
        © {new Date().getFullYear()} Pratik Bhandari
      </footer>
    </div>
  );
}
