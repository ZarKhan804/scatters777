import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

const gameImage =
  "https://slotcatalog.com/userfiles/image/games/Champion-Studio/24177/777-Golden-Scatter-6889827.jpg";

const downloadUrl =
  "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const navClass = ({ isActive }) =>
    `whitespace-nowrap text-[15px] font-semibold transition ${
      isActive
        ? "text-yellow-400"
        : "text-gray-300 hover:text-yellow-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO + NAME */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-3 sm:gap-4"
        >
          <div className="h-[52px] w-[52px] shrink-0 overflow-hidden rounded-2xl border border-yellow-400/40 bg-slate-900 sm:h-[58px] sm:w-[58px]">
            <img
              src={gameImage}
              alt="Luckywheel777 Logo"
              className="block h-full w-full cover-object "
            />
          </div>

          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-[20px] font-black leading-tight tracking-tight text-white sm:text-[24px]">
              Scatters<span className="text-yellow-400">777</span>
            </h1>

            <p className="mt-1 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400 sm:text-[10px]">
              Download Game
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center justify-center gap-8 lg:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/blog" className={navClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center justify-end">

          {/* DESKTOP DOWNLOAD BUTTON */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-[15px] font-extrabold text-slate-950 transition hover:bg-yellow-300 lg:flex"
          >
            <Download size={18} strokeWidth={2.5} />
            Download
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 lg:hidden"
          >
            {open ? (
              <X size={24} strokeWidth={2.5} />
            ) : (
              <Menu size={24} strokeWidth={2.5} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-[15px] font-semibold ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-[15px] font-semibold ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-white/10 py-4 text-[15px] font-semibold ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-4 text-[15px] font-semibold ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              Contact
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;