'use client';
import AOS from 'aos';
import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import 'aos/dist/aos.css';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 200,
    });
  }, []);

  return (
    <main
      className='flex flex-col h-full relative
[&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-neutral-700
dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
'
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
