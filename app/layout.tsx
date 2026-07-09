import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <title>Sunday Victor - Portfolio</title>
        <meta name="description" content='This is Sunday Victor Okoromi Portfolio'/>
      </head>
      <body className='min-h-screen bg-slate-950 text-slate-100 antialiased'>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
