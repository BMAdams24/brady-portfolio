export default function Skills() {
  const skills = [
    "Python",
    "C#",
    "C/C++",
    "Java",
    "Unity",
    "Git",
    "GitHub",
    "TensorFlow Lite",
    "Machine Learning",
    "Artificial Intelligence",
    "Embedded Systems",
    "Raspberry Pi",
    "Fusion 360",
    "LTSpice",
    "Problem Solving",
    "Technical Communication",
  ];

  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-500 mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-purple-950 text-purple-300 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}