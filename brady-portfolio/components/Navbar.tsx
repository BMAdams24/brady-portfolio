export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-500">
          Brady Adams
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-purple-400 transition">
            Experience
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
