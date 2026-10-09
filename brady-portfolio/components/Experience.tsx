export default function Experience() {
  return (
    <section id="experience" className="px-8 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-500 mb-8">
        Experience
      </h2>

      <div className="space-y-6">
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-purple-500 transition">
          <h3 className="text-2xl font-semibold">
            TechTeach Research Project
          </h3>

          <p className="text-purple-400 mt-1">
            Educational Game Development
          </p>

          <p className="text-gray-400 mt-3">
            Contributed to the development of EnerGaia, a Unity-based
            educational video game designed to teach middle-school
            students physics concepts through interactive gameplay,
            quizzes, and player progression systems.
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-purple-500 transition">
          <h3 className="text-2xl font-semibold">
            Certified Parkour Instructor
          </h3>

          <p className="text-purple-400 mt-1">
            Leadership & Instruction
          </p>

          <p className="text-gray-400 mt-3">
            Led classes for students of varying experience levels,
            developed communication and leadership skills, and taught
            complex movement concepts in safe and engaging learning
            environments.
          </p>
        </div>
      </div>
    </section>
  );
}