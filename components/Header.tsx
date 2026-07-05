import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/95 shadow-black/10 backdrop-blur'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4'>
        <div className='text-lg font-semibold tracking-tight text-slate-100'>
          Victor Okoromi
        </div>
        <nav className='flex items-center gap-4 text-sm text-slate-300'>
          <Link
            href='/'
            className='rounded-full px-3 py-2 hover:bg-slate-800 hover:text-white'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='rounded-full px-3 py-2 hover:bg-slate-800 hover:text-white'
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
