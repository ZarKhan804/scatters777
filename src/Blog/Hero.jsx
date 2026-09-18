
function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-yellow-500" />

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-600">
            Latest Updates
          </p>

          <span className="h-px w-10 bg-yellow-500" />
        </div>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Scatters777 <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-7 max-w-3xl text-left">

          <p className="text-base leading-8 text-slate-600">
            Welcome to the Scatters777 Blog, a dedicated space for the latest
            platform updates, gaming information, website improvements,
            interface ideas, and useful content related to Scatters777.
            Explore informative articles covering the Scatters777 Game,
            download information, mobile experience, website features, and
            modern online gaming design.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Our articles are created to provide clear and accessible
            information about Scatters777. From responsive website design and
            mobile-friendly layouts to platform updates, gaming content, and
            user experience improvements, the blog provides an easy way to
            discover more about Scatters777 and stay updated with new content.
          </p>

        </article>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {[
            "Scatters777",
            "Scatters777 Game",
            "Scatters777 Download",
            "Gaming Updates",
            "Mobile Experience",
          ].map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-slate-600"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
