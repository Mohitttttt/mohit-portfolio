const skillCategories = [
  {
    number: "01",
    title: "Programming Languages",
    description:
      "Languages for software development, algorithmic thinking and problem-solving.",
    skills: ["Python", "Java", "C++", "Go", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Building APIs, backend services and scalable application architectures.",
    skills: ["FastAPI", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Artificial intelligence, machine learning and language-model technologies.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "Scikit-learn",
      "LLMs",
      "RAG",
    ],
  },
  {
    number: "04",
    title: "Databases & Data",
    description:
      "Data storage, database querying, numerical computing and data processing.",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Pandas", "NumPy"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Cloud platforms, containerisation and application infrastructure.",
    skills: ["AWS", "Azure", "Docker", "GitHub Actions", "Linux"],
  },
  {
    number: "06",
    title: "Developer Tools",
    description:
      "Tools supporting development, collaboration and technical workflows.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Power BI"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADER */}

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
            Technical Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My technical
            <span className="text-blue-400"> toolkit.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400">
            Technologies and tools across software engineering,
            backend development, artificial intelligence and
            data systems.
          </p>
        </div>

        {/* SKILL CATEGORY CARDS */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.045]"
            >
              {/* SUBTLE HOVER EFFECT */}

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.04] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

              {/* CARD HEADER */}

              <div className="relative mb-7 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-blue-400">
                  {category.number}
                </span>

                <span className="h-px w-12 bg-white/10 transition duration-300 group-hover:w-20 group-hover:bg-blue-400/50" />
              </div>

              {/* CATEGORY TITLE */}

              <h3 className="relative text-xl font-semibold tracking-tight text-white">
                {category.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* TECHNOLOGY TAGS */}

              <div className="relative mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition duration-200 hover:border-blue-400/40 hover:bg-blue-400/[0.08] hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM NOTE */}

        <div className="mt-10 border-t border-white/10 pt-7">
          <p className="text-sm leading-7 text-gray-500">
            Focused on software engineering, backend systems,
            artificial intelligence and building practical
            technology solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
