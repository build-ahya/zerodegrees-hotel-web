import { Viewport } from 'next';
import { BlogSection1, BlogSection2 } from '@/components/sections';
import CONSTANTS from '@/constants';

export const viewport: Viewport = {
  themeColor: '#0C3150',
};
export const metadata = {
  title: `Blog | ${CONSTANTS.brandName}`,
};

export default function Blog() {
  return (
    <>
      <BlogSection1 />
      <BlogSection2 />
    </>
  );
}
