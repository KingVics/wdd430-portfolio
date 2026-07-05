import { Title } from '@/components/Title';

export default function About() {
  return (
    <main className='mx-auto max-w-4xl px-4 py-16'>
      <section className='rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]'>
        <Title text='About Me' />
        <p className='max-w-3xl text-slate-300 text-lg leading-8'>
          I am a motivated developer building thoughtful web experiences with
          Next.js and React. I enjoy crafting user interfaces that are fast,
          accessible, and easy to maintain.
        </p>
        <div className='mt-8 grid gap-4 sm:grid-cols-2'>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5'>
            <p className='text-sm uppercase tracking-[0.28em] text-slate-500'>
              Strengths
            </p>
            <p className='mt-3 text-white font-semibold'>
              UI design, responsive layouts, clean code
            </p>
          </div>
          <div className='rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5'>
            <p className='text-sm uppercase tracking-[0.28em] text-slate-500'>
              Goal
            </p>
            <p className='mt-3 text-white font-semibold'>
              Deliver projects that look polished and feel intuitive.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
