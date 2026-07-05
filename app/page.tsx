import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Chamber of Commerce',
    description:
      'A web application for a local chamber of commerce, providing information about the organization, its members, and upcoming events.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://kingvics.github.io/wdd231/chamber/index.html',
  },
  {
    title: 'Spend Wise',
    description:
      'A utility app that helps users track their expenses and manage their budget effectively.',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://github.com/KingVics/Spendwise-wdd330',
  },
];

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-500/20 to-transparent blur-3xl' />
      <div className='mx-auto max-w-6xl px-4 py-16 sm:py-24'>
        <section className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)]'>
          <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
            <div className='max-w-2xl'>
              <p className='mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
                Full-Stack Portfolio
              </p>
              <h1 className='text-5xl font-semibold tracking-tight text-white sm:text-6xl'>
                Build modern experiences with clean, responsive design.
              </h1>
              <p className='mt-6 max-w-xl text-slate-300'>
                I’m a front-end developer specializing in Next.js and React apps
                that feel fast, accessible, and polished across desktop and
                mobile.
              </p>
            </div>
          </div>
          <div className='grid gap-4 sm:grid-cols-3'>
            <div className='rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>
                Primary stack
              </p>
              <p className='mt-3 text-lg font-semibold text-white'>
                Next.js + Tailwind
              </p>
            </div>
            <div className='rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>
                Focus
              </p>
              <p className='mt-3 text-lg font-semibold text-white'>
                UI, accessibility, performance
              </p>
            </div>
            <div className='rounded-3xl border border-slate-800/80 bg-slate-950/70 p-5'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>
                Projects
              </p>
              <p className='mt-3 text-lg font-semibold text-white'>
                Clean web apps
              </p>
            </div>
          </div>
        </section>

        <section className='mt-14'>
          <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>
                Featured work
              </p>
              <h2 className='mt-2 text-3xl font-semibold text-white'>
                Recent projects
              </h2>
            </div>
          </div>
          <ProjectList projects={projects} />
        </section>
      </div>
    </main>
  );
}
