export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:py-36">
      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>
          {/* EDUCATION BADGE */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            M.Sc. Computer Science · KIT Karlsruhe
          </div>

          {/* INTRODUCTION */}

          <p className="mb-4 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Mohit Kumar

            <span className="block text-blue-500">
              Singh.
            </span>
          </h1>

          {/* PROFESSIONAL POSITIONING */}

          <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-gray-200 sm:text-2xl">
            Software Engineer building

            <span className="text-blue-400">
              {" "}AI-powered applications and backend systems.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            I enjoy turning complex problems into practical software
            solutions. My interests include backend engineering,
            artificial intelligence, information retrieval and
            intelligent systems.

            <br />

            Currently pursuing my Master's in Computer Science at
            Karlsruhe Institute of Technology, Germany.
          </p>

          {/* ACTION BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore Projects →
            </a>

            <a
              href="/cv.pdf"
              download
              className="rounded-lg border border-white/20 bg-white/[0.03] px-7 py-3.5 font-semibold text-gray-200 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
            >
              Download CV ↓
            </a>

            <a
              href="https://github.com/Mohitttttt"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-gray-300 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
            >
              GitHub ↗
            </a>

          </div>

          {/* PROFESSIONAL INTERESTS */}

          <div className="mt-10 border-t border-white/10 pt-7">

            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Areas of Interest
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "AI Engineering",
                "Backend Systems",
                "LLM Applications",
                "Software Development",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="relative">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-blue-950/20 sm:p-8">

            {/* CARD HEADER */}

            <div className="mb-7 flex items-center justify-between">

              <span className="text-sm font-semibold tracking-widest text-gray-400">
                TECHNICAL FOCUS
              </span>

              <span className="text-xs text-blue-400">
                01 — 04
              </span>

            </div>

            {/* TECHNICAL AREAS */}

            <div className="space-y-4">

              {[
                {
                  number: "01",
                  title: "Software Engineering",
                  description:
                    "Writing maintainable code, solving problems and designing reliable applications.",
                  tags: ["Python", "Java", "C++"],
                },
                {
                  number: "02",
                  title: "Backend Engineering",
                  description:
                    "Developing APIs, backend services, databases and application architecture.",
                  tags: ["FastAPI", "REST APIs", "SQL"],
                },
                {
                  number: "03",
                  title: "Artificial Intelligence",
                  description:
                    "Building intelligent applications using machine learning, LLMs and RAG.",
                  tags: ["LLMs", "RAG", "ChromaDB"],
                },
                {
                  number: "04",
                  title: "Data & Infrastructure",
                  description:
                    "Working with data processing, containerisation and development workflows.",
                  tags: ["Docker", "SQLite", "GitHub Actions"],
                },
              ].map((item) => (

                <div
                  key={item.number}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
                >

                  <div className="flex gap-4">

                    <span className="text-sm font-semibold text-blue-500">
                      {item.number}
                    </span>

                    <div className="min-w-0 flex-1">

                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">

                        {item.tags.map((tag) => (

                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-400"
                          >
                            {tag}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* CARD FOOTER */}

            <div className="mt-7 border-t border-white/10 pt-5">

              <p className="text-xs leading-6 text-gray-500">
                Focused on building practical software solutions
                through strong engineering fundamentals and
                applied artificial intelligence.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}