export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* SECTION HEADER */}

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Let's build something
          <span className="block text-blue-400">
            meaningful.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400">
          Interested in technology, software engineering,
          artificial intelligence or meaningful technical
          conversations? I'd be happy to connect.
        </p>

        {/* EMAIL BUTTON */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mohitkumarsingh9614@gmail.com"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Send Me an Email
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://github.com/Mohitttttt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-blue-400/40 hover:text-blue-400"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* SOCIAL LINKS */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          <a
            href="https://www.linkedin.com/in/mohit-kumar-singh-582285206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-blue-400"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Mohitttttt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition hover:text-blue-400"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:mohitkumarsingh9614@gmail.com"
            className="text-sm text-gray-400 transition hover:text-blue-400"
          >
            Email ↗
          </a>
        </div>

        {/* LOCATION */}

        <p className="mt-8 text-sm text-gray-500">
          Based in Karlsruhe, Germany
        </p>

      </div>
    </section>
  );
}
