
import { Link } from "react-router-dom";

function HeroSection() {
  const gameReferralLink = "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const gameImage =
    "https://slotcatalog.com/userfiles/image/games/Champion-Studio/24177/777-Golden-Scatter-6889827.jpg";

  return (
    <section
      aria-labelledby="scatter-game-home-title"
      className="relative overflow-hidden bg-gray-200"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[5%] h-[400px] w-[400px] rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-amber-400/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[150px]" />
      </div>

      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        {/* GAME IMAGE */}
        <div className="relative mx-auto mb-5 w-full max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[260px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px]"
          />

          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Scatter Game platform"
            className="relative z-10 block w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/70 p-2 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-3">
              <div className="relative h-[220px] overflow-hidden rounded-xl bg-gray-100 sm:h-[270px] md:h-[320px] lg:h-[360px] sm:rounded-2xl">
                <img
                  src={gameImage}
                  alt="Scatter Game platform and game information"
                  width="1200"
                  height="675"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </a>

          {/* BUTTONS UNDER IMAGE */}
          <div className="relative z-20 mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

            {/* ACCESS BUTTON */}
            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Scatter Game platform"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
            >
              Download Game
            </a>

            {/* ABOUT BUTTON */}
            <Link
              to="/about"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
            >
              About Scatter Game
            </Link>
          </div>
        </div>

        {/* HOME INFORMATION */}
        <div className="mx-auto max-w-5xl text-center">

          {/* LABEL */}
          <p className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-yellow-700 shadow-sm backdrop-blur-sm">
            Scatter Game Information & Guide
          </p>

          {/* MAIN SEO HEADING */}
          <h1
            id="scatter-game-home-title"
            className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Scatter Game
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Platform Guide
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore Scatter Game platform information, game features, gameplay
            basics, mobile access, account guidance, and online gaming
            safety. Learn about platform navigation, account security,
            and important considerations before participating in online
            games.
          </p>

          {/* INFORMATION CARDS */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">

            {/* CARD 1 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Game Information
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Explore platform features, available game information,
                gameplay basics, and helpful guides for beginners.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Mobile Access
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Learn about mobile compatibility, browser access,
                and safe application installation practices.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Safety Information
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Understand account security, platform terms, financial
                risks, and responsible gaming practices.
              </p>
            </article>
          </div>
        </div>

        {/* SUPPORTING CONTENT */}
        <div className="mt-10">
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">

            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Scatter Game Information and Guides
            </h2>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">

              {/* LEFT SIDE */}
              <div className="space-y-3 text-sm leading-6 text-gray-700">
                <p>1. Scatter Game Platform Guide 2026</p>
                <p>2. Scatter Game Login and Registration Guide</p>
                <p>3. Scatter Game App and Access Information</p>
                <p>4. How to Navigate the Scatter Game Platform</p>
                <p>5. Scatter Game Features Explained</p>
                <p>6. Scatter Game Guide for Beginners</p>
                <p>7. Understanding Scatter Game Features</p>
                <p>8. Scatter Game Mobile Access Guide</p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-3 text-sm leading-6 text-gray-700">
                <p>9. Scatter Game Account Security Tips</p>
                <p>10. Online Gaming Risks and Responsible Play</p>
                <p>11. Scatter Game Website Access Guide</p>
                <p>12. Common Scatter Game Login Problems</p>
                <p>13. Understanding Online Game Rules</p>
                <p>14. Scatter Game Frequently Asked Questions</p>
                <p>15. Online Gaming Safety Tips in Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent"
      />
    </section>
  );
}

export default HeroSection;
