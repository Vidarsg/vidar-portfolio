export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a192f] text-gray-100 font-sans">
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">Vidar Strand Gladsø</div>
        <nav className="space-x-6">
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#cv" className="hover:text-teal-400">CV</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center items-start px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-teal-400">Vidar</span>.
        </h1>
        <h2 className="text-2xl sm:text-3xl text-gray-400 mb-8">
          I’m a Computer Science student & aspiring developer.
        </h2>
        <p className="max-w-xl text-lg mb-6">
          Welcome to my personal site. Here you’ll find my projects, experience, and a bit about me.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-teal-400 rounded-lg text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] font-medium transition"
        >
          See my work
        </a>
      </section>

      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Vidar Strand Gladsø. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}