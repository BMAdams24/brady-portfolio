export default function Contact() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-purple-500 mb-8">
        Contact
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Interested in software engineering, AI, machine learning,
        embedded systems, game development, or internship opportunities?
        Feel free to connect with me.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
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
          className="px-6 py-3 border border-purple-500 rounded-lg hover:bg-purple-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}