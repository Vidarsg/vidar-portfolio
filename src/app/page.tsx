"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-background text-text font-sans min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-background bg-opacity-95 backdrop-blur-sm border-b border-subtext">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-6 px-8">
          <span className="text-xl font-bold tracking-tight text-accent">Vidar</span>
          <nav className="space-x-6 text-text">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-8 pt-24 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-5xl sm:text-6xl font-bold mb-4 text-accent"
        >
          Hi, I’m Vidar.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-lg sm:text-xl text-subtext mb-8 max-w-2xl mx-auto"
        >
          I’m a Computer Science student & aspiring developer interested in web, AI, and creative problem-solving.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="inline-block px-6 py-3 border border-accent rounded-lg text-accent hover:bg-accent hover:text-background font-medium transition"
        >
          See my work
        </motion.a>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-3xl py-8 px-8 mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-accent">About Me</h2>
        <p className="text-lg text-text mb-3">
          Hi! I’m Vidar, a Computer Science student who enjoys building things that make life easier and more interesting. My interests include web development, algorithms, and the intersection of technology and creativity.
        </p>
        <p className="text-lg text-subtext mb-3">
          I’m always eager to learn new things, collaborate, and take on new challenges—both in tech and outside of it.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-3xl py-12 px-8 mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-10 text-accent">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <ProjectCard
            title="Personal Portfolio Website"
            description="The site you’re looking at! Built with Next.js, Tailwind CSS, and Framer Motion."
            link="https://vidar-portfolio.vercel.app/"
          />
          <ProjectCard
            title="Awesome App"
            description="A cool web application that solves a real problem. (Replace with your project info!)"
            link="#"
          />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-xl py-12 px-8 mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-accent">Contact</h2>
        <p className="text-lg text-subtext mb-8">
          Want to connect, collaborate, or just say hi? Feel free to reach out!
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 border border-accent rounded-lg text-accent hover:bg-accent hover:text-background font-medium transition"
        >
          Send Email
        </a>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/yourgithub" className="hover:text-accent" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" className="hover:text-accent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-4 px-8 text-subtext text-sm max-w-3xl mx-auto">
        © {new Date().getFullYear()} Vidar. Built with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </main>
  );
}

// ProjectCard component
function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a
      href={link}
      className="block border border-subtext rounded-lg p-6 bg-background hover:border-accent transition text-left"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-xl font-bold mb-2 text-accent">{title}</h3>
      <p className="text-subtext">{description}</p>
    </a>
  );
}
