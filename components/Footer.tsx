export default function Footer() {
  return (
    <footer className='border-t border-slate-800/80 bg-slate-950/95 text-slate-400'>
      <div className='mx-auto max-w-6xl px-4 py-6 text-center text-sm'>
        <p>
          © {new Date().getFullYear()} Victor Okoromi — Built with Next.js and
          Tailwind.
        </p>
      </div>
    </footer>
  );
}
