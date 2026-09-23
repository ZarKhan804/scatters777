import React from "react";
import { Link } from "react-router-dom";

const gameImage =
  "https://slotcatalog.com/userfiles/image/games/Champion-Studio/24177/777-Golden-Scatter-6889827.jpg";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          {/* BRAND */}
          <section>
            <Link
              to="/"
              className="flex w-fit items-center gap-3"
            >
              <img
                src={gameImage}
                alt="Scatters777"
                className="h-12 w-12 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl font-black text-white">
                  Scatters<span className="text-yellow-400">777</span>
                </h2>

                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  Game Website
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Explore the website, read the available content and navigate
              through the different sections using the links provided below.
            </p>
          </section>

          {/* PAGES */}
          <nav>
            <h3 className="text-base font-bold text-white">
              Pages
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              <Link
                to="/"
                className="hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-yellow-400"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="hover:text-yellow-400"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="hover:text-yellow-400"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* WEBSITE INFO */}
          <section>
            <h3 className="text-2xl font-bold text-white">
              Scatters777
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Explore the website and discover the available content.
            </p>
          </section>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
          © 2026 Scatters777. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;