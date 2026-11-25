export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION HEADER */}

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Academic Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Academic Journey.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            My academic journey in Computer Science, building a
            foundation in software engineering, artificial intelligence
            and modern computing technologies.
          </p>
        </div>

        <div className="space-y-6">

          {/* MASTER'S EDUCATION */}

          <article className="group rounded-2xl border border-blue-400/20 bg-blue-400/[0.035] p-7 transition duration-300 hover:border-blue-400/40 sm:p-8">

            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400">
                  POSTGRADUATE EDUCATION
                </p>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  M.Sc. Computer Science
                </h3>

                <p className="mt-3 text-blue-400">
                  Karlsruhe Institute of Technology (KIT)
                </p>
              </div>

              <span className="h-fit w-fit rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-300">
                2026 – Present
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Pursuing a Master's degree in Computer Science at
              Karlsruhe Institute of Technology, Germany, with
              academic interests in artificial intelligence,
              software engineering and advanced computing systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Computer Science",
                "Artificial Intelligence",
                "Software Engineering",
                "Advanced Computing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Karlsruhe, Germany
            </p>

          </article>

          {/* UNDERGRADUATE EDUCATION */}

          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-blue-400/30 sm:p-8">

            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400">
                  UNDERGRADUATE EDUCATION
                </p>

                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  B.E. Computer Science & Engineering
                </h3>

                <p className="mt-3 text-blue-400">
                  Sri Venkateshwara College of Engineering
                </p>
              </div>

              <span className="h-fit w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                2020 – 2024
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Completed undergraduate education in Computer Science
              and Engineering, with an academic focus on Artificial
              Intelligence and foundational computing concepts.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Computer Science",
                "Artificial Intelligence",
                "Engineering",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Affiliated with Visvesvaraya Technological University
              (VTU), Karnataka, India
            </p>

          </article>

        </div>
      </div>
    </section>
  );
}