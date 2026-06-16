export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-semibold text-zinc-900 dark:text-white">
          Experience
        </h2>

        <div className="space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-950">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                Software Engineering Intern
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                ABC Company · Jan 2025 - Present
              </p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300">
              Developed MERN stack applications and REST APIs, collaborated with UI/UX designers, and optimized application performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
