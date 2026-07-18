export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
          <img
            src="/profile.jpg"
            alt="Rudraaksh Singh"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-6 text-5xl font-bold">
          Rudraaksh <span className="text-cyan-400">Singh</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          Full Stack Developer • React • Next.js • Supabase • UI Designer
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-300 leading-8">
          I'm a passionate Full Stack Developer specializing in React,
          Next.js, Tailwind CSS, and Supabase. I enjoy creating modern,
          responsive web applications with elegant UI and excellent user
          experience.
        </p>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Supabase",
              "Node.js",
              "Firebase",
              "Git"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-neutral-800 rounded-2xl p-6 text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "RChat",
              desc: "Telegram-inspired chat application."
            },
            {
              title: "Portfolio",
              desc: "Modern animated portfolio website."
            },
            {
              title: "Dashboard",
              desc: "Analytics dashboard using Next.js."
            }
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-neutral-900 p-6 border border-neutral-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {project.desc}
              </p>

              <button className="mt-6 text-cyan-400 hover:underline">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-neutral-900 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-8">
          Have an idea? Let's build something amazing.
        </p>

        <a
          href="mailto:your@email.com"
          className="inline-block px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-800 text-gray-500">
        © 2026 Rudraaksh Singh. All Rights Reserved.
      </footer>
    </main>
  );
}