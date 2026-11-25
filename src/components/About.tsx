export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">

        {/* SECTION HEADING */}

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Engineering ideas into
            <span className="mt-1 block text-blue-400">
              practical solutions.
            </span>
          </h2>
        </div>

        {/* ABOUT CONTENT */}

        <div className="space-y-6 text-base leading-8 text-gray-400">

          <p>
            I am a Computer Science graduate currently pursuing an
            M.Sc. in Computer Science at the Karlsruhe Institute of
            Technology (KIT), Germany.
          </p>

          <p>
            My technical interests lie at the intersection of
            software engineering, backend development and artificial
            intelligence. I enjoy understanding complex systems,
            exploring how technologies work together and turning
            ideas into functional applications.
          </p>

          <p>
            One of my key projects is an Enterprise AI Knowledge
            Intelligence Platform, a document intelligence system
            combining document processing, semantic search, hybrid
            retrieval and large language models through a
            conversational RAG pipeline.
          </p>

          <p>
            I am particularly interested in backend architecture,
            intelligent applications, information retrieval and
            building reliable, maintainable software. My goal is
            to continuously strengthen my engineering fundamentals
            and develop solutions that address meaningful
            real-world problems.
          </p>

          {/* AREAS OF INTEREST */}

          <div className="border-t border-white/10 pt-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Areas of Interest
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Software Engineering",
                "Backend Development",
                "Artificial Intelligence",
                "Large Language Models",
                "Information Retrieval",
                "System Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-blue-400/40 hover:text-blue-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}