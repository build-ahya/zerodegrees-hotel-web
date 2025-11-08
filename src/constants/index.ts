import { Page } from '@/types';

const brandName = 'Zero Degrees Hotel ™';

const description =
  "ZeroDegree Hotel is more than just a place to stay – it’s an experience that redefines comfort, elegance, and tranquility. ";

const slogan = 'Where Luxury Meets Serenity';

const baseUrl = 'https://www.zerodegreeshotel.ng';

const openGraphImage = `${baseUrl}/images/open-graph-image.jpg`;

const keywords = [''];

const pages: Page[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Search',
    href: '/search',
  },
  {
    name: 'Restaurant',
    href: '/restaurant',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Book Now',
    href: '/search',
    button: true,
    icon: ''
  },
];

const footer = {
  copyright: brandName + ' All rights reserved.',
  sections: [
    {
      title: 'Quick Links',
      pages: [
        {
          name: 'About Us',
          href: '/about',
        },
        {
          name: 'Search',
          href: '/search',
        },
        {
          name: 'Restaurant',
          href: '/restaurant',
        },
        {
          name: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Contact Us',
      pages: [
        {
          name: 'info@zerodegreeshotel.ng',
          href: 'mail:info@zerodegreeshotel.ng',
        },
        {
          name: '+234 916 000 9630',
          href: 'tel:+2349160009630',
        },
        {
          name: '51 Woji Road, GRA, Port Harcourt, Rivers, Nigeria',
          href: 'https://www.google.com/maps/place/51+Woji+Rd,+Trans+Amadi,+Port+Harcourt,+Rivers+500102,+Rivers/@4.8333478,7.0464135,17z/data=!3m1!4b1!4m6!3m5!1s0x1069cda0891f1f85:0x70c793d069e0c697!8m2!3d4.8333478!4d7.0489884!16s%2Fg%2F11nnkvv99m?entry=ttu',
          external: true,
        },
      ],
    },
  ],
  socials: [
    {
      name: 'Facebook',
      icon: 'iconoir:facebook',
      href: 'https://www.facebook.com/profile.php?id=zerodegreeshotel',
    },
    {
      name: 'Twitter',
      icon: 'line-md:twitter-x',
      href: 'https://x.com/zerodegreeshotel',
    },
    {
      name: 'Instagram',
      icon: 'iconoir:instagram',
      href: 'https://www.instagram.com/zerodegreeshotels_ph',
    },
  ],
};

const toastOptions = {
  duration: 6000,
  success: {
    style: {
      color: '#FFF',
      background: '#4caf50',
    },
  },
  error: {
    style: {
      color: '#FFF',
      background: '#f44336',
    },
  },
};

export default {
  brandName,
  description,
  slogan,
  openGraphImage,
  baseUrl,
  keywords,
  pages,
  footer,
  toastOptions,
};
