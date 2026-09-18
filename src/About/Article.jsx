
import { CheckCircle2 } from "lucide-react";

function Article() {
  const points = [
    "Modern and responsive interface",
    "Simple navigation between pages",
    "Engaging online gaming experience",
    "Mobile-friendly layout",
    "Fast and lightweight website",
    "Clean and attractive visual design",
  ];

  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-20">

        <h2 className="text-3xl font-black text-slate-900">
          A modern Scatters777 gaming platform
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-600">
          <p>
            Scatters777 is designed as a modern online gaming platform where
            users can explore an attractive interface and discover
            game-focused content through a simple and convenient website
            experience.
          </p>

          <p>
            The Scatters777 website is built with a responsive structure that
            works across desktop, tablet, and mobile screens. Its organized
            sections and straightforward layout make it easier for visitors
            to explore the platform and access the information they are
            looking for.
          </p>

          <p>
            Our goal with Scatters777 is to keep navigation straightforward
            while creating a distinctive and engaging visual identity. The
            platform focuses on clean presentation, responsive design,
            accessible content, and a smooth browsing experience across
            different devices.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white p-4"
            >
              <CheckCircle2
                className="shrink-0 text-yellow-500"
                size={20}
              />

              <span className="text-slate-700">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-300">
          <table className="w-full text-left">
            <thead className="bg-yellow-400 text-slate-950">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Version</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300 bg-white">
              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Responsive UI
                </td>

                <td className="px-5 py-4 text-green-600">
                  Ready
                </td>

                <td className="px-5 py-4 text-slate-500">
                  1.0
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Easy Navigation
                </td>

                <td className="px-5 py-4 text-green-600">
                  Ready
                </td>

                <td className="px-5 py-4 text-slate-500">
                  1.0
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">
                  Modern Gaming Design
                </td>

                <td className="px-5 py-4 text-green-600">
                  Ready
                </td>

                <td className="px-5 py-4 text-slate-500">
                  1.0
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Article;
