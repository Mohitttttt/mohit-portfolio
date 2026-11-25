import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0D12]/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition hover:opacity-80"
          >
            Mohit<span className="text-blue-500">.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="#contact"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Let's Talk
          </Link>

        </div>

        {/* MOBILE NAVIGATION */}
        <div className="flex gap-6 overflow-x-auto border-t border-white/5 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-sm text-gray-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}