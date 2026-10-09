export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-7xl font-bold text-purple-500 mb-4">
        Brady Adams
      </h1>

      <h2 className="text-2xl text-gray-300 mb-6">
        Computer & AI Engineering Student
      </h2>

      <p className="max-w-3xl text-lg text-gray-400 mb-8">
        Building intelligent systems, machine learning applications,
        and interactive game experiences through engineering,
        research, and software development.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
  <a
    href="https://github.com/BMAdams24"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/brmadam"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-900 transition"
  >
    LinkedIn
  </a>

  <a
    href="/BradyAdams_Resume_Fall26docx.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-900 transition"
  >
    Resume
  </a>
</div>
    </section>
  );
}