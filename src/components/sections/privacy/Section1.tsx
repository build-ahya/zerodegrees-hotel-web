'use client';
import Container from '@/components/container';
import { useAppSelector } from '@/hooks/useAppSelector';

export default function PrivacySection1() {
  const { privacyPolicy } = useAppSelector((state) => state.content);

  return (
    <section className='relative bg-hero-pattern bg-cover bg-no-repeat h-[40vh] min-h-[400px] flex items-center justify-center'>
      <Container className='relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'
            data-aos='fade-up'
          >
            {privacyPolicy.section1.title}
          </h1>
          <p
            className='text-sm text-white/70 font-light'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {privacyPolicy.section1.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
