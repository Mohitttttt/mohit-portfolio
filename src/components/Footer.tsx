export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0D12]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        {/* BRAND */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">
            Mohit<span className="text-blue-400">.</span>
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Building software that solves real problems.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

          <a
            href="mailto:mohitkumarsingh9614@gmail.com"
            className="transition hover:text-blue-400"
          >
            Email
          </a>

          <a
            href="https://github.com/Mohitttttt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohit-kumar-singh-582285206"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            LinkedIn
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-600">
          Copyright {new Date().getFullYear()} Mohit Kumar Singh. All rights reserved.
        </p>

      </div>
    </footer>
  );
}