export default function Education() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-500 mb-8">
        Education
      </h2>

      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-purple-500 transition">
        <h3 className="text-2xl font-semibold mb-2">
          Indiana University Bloomington
        </h3>

        <p className="text-purple-400 mb-3">
          B.S. Computer Engineering
        </p>

        <p className="text-gray-400 mb-4">
          Expected Graduation: 2027
        </p>

        <p className="text-gray-300">
          Focused on artificial intelligence, software engineering,
          embedded systems, machine learning, and game development.
        </p>
      </div>
    </section>
  );
}