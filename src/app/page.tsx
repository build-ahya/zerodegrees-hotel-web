import { Suspense } from 'react';
import { Viewport } from 'next';
import Loading from '@/components/loading';
import {
  HomeSection1,
  HomeSection2,
  HomeSection3,
  HomeSection4,
  HomeSection5,
  HomeSection6,
  HomeSection7,
} from '@/components/sections';
import constants from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};

export const metadata = {
  title: `${constants.brandName} | ${constants.slogan}`,
};

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
    </Suspense>
  );
}
