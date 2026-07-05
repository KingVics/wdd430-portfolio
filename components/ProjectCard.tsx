interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className='group overflow-hidden rounded-[1.75rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-slate-900'>
      <div className='mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300'>
        Project
      </div>
      <h3 className='text-2xl font-semibold text-white'>{title}</h3>
      <p className='mt-3 text-slate-300'>{description}</p>
      <div className='mt-5 flex flex-wrap gap-2'>
        {technologies.map((technology) => (
          <span
            key={technology}
            className='rounded-full border border-slate-700/80 bg-white/5 px-3 py-1 text-xs text-slate-300'
          >
            {technology}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white'
        >
          View Project →
        </a>
      )}
    </article>
  );
}
