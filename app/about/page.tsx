import { Title } from '@/components/Title';
import InfoCard from '@/components/InfoCard';

const aboutCards = [
  {
    title: 'Strengths',
    description: 'UI design, responsive layouts, clean code',
  },
  {
    title: 'Goal',
    description: 'Deliver projects that look polished and feel intuitive.',
  },
  {
    title: 'Approach',
    description:
      'Build accessible experiences with thoughtful detail and clarity.',
  },
];

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
        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {aboutCards.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
