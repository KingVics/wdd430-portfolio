interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className='rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/60'>
      <p className='text-sm uppercase tracking-[0.28em] text-slate-500'>
        {title}
      </p>
      <p className='mt-4 text-lg font-semibold text-white'>{description}</p>
    </div>
  );
}
