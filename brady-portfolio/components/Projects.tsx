const projects = [
  {
    title: "EnerGaia",
    description:
      "Unity-based educational physics game developed through Indiana University's TechTeach program.",
    technologies: ["Unity", "C#", "TechTeach"],
    github: "https://github.com/BMAdams24/EnerGaia---TechTeach.git",
  },
  {
    title: "Project Redwood",
    description:
      "Forestry and building simulation game featuring harvesting, construction, ownership, progression, and save systems.",
    technologies: ["Unity", "C#", "GitHub"],
    github: "https://github.com/BMAdams24/Project---Redwood.git",
  },
  {
    title: "Embedded Motion Classification",
    description:
      "TensorFlow Lite machine learning project deployed to Raspberry Pi for real-time motion classification.",
    technologies: ["Python", "TensorFlow Lite", "Raspberry Pi"],
    github: "#",
  },
  {
    title: "Estimation Destination",
    description:
      "Educational Raspberry Pi board game designed to teach estimation through interactive gameplay.",
    technologies: ["Python", "Fusion360", "Raspberry Pi"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-500 mb-10">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-900 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}