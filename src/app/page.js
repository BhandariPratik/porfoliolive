"use client"
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, Phone, X } from "lucide-react";

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
    {
      name: "Faces Consent",
      desc: "Digital consent, prescriptions, booking and workflow platform.",
      tech: "React, Redux Toolkit, Tailwind, PostgreSQL",
      details:
        "Enterprise level healthcare workflow platform with multi-role dashboards, prescription lifecycle and AI summary generation.",
    },
    {
      name: "Enseedling",
      desc: "Job portal and e-learning multi-role platform.",
      tech: "Next.js, Zustand, Node.js, PostgreSQL",
      details:
        "Full multi-role architecture with job portal, learning modules and employer dashboards.",
    },
    {
      name: "Lifecell CRM",
      desc: "CRM system for field sales executives.",
      tech: "Next.js, Redux Toolkit, Tailwind",
      details:
        "Sales lifecycle tracking, lead management and reporting dashboards.",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Mouse Follow Gradient */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] opacity-30 bg-indigo-500"
        animate={{ x: mousePos.x - 250, y: mousePos.y - 250 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
              Pratik Bhandari
            </h1>
            <div className="hidden md:flex gap-8 text-sm text-gray-300">
              <a href="#about" className="hover:text-white transition">
                About
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
            <div>
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
                I build scalable, production-grade applications with modern web
                architecture and clean system design.
              </motion.p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium">
                  Download Resume
                </button>
                <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
                  View Projects
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-indigo-500 to-cyan-500 p-[2px]"
              >
                <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center text-5xl sm:text-6xl font-bold">
                  PB
                </div>
              </motion.div>
            </div>
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
                <p className="text-indigo-400 text-sm mt-4">
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
            <p className="text-indigo-400">
              {selectedProject.tech}
            </p>
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
              { icon: <Mail size={20} />, label: "Email", value: "pratikbhandari00722@gmail.com" },
              { icon: <Phone size={20} />, label: "Phone", value: "+91 9664698768" },
              { icon: <Github size={20} />, label: "GitHub", value: "github.com/" },
              { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              >
                {item.icon}
                <h4 className="font-semibold">{item.label}</h4>
                <p className="text-gray-400 text-sm break-all">
                  {item.value}
                </p>
              </div>
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
