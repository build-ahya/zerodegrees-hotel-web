import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          50: '#eef4fa',
          100: '#dde9f5',
          200: '#bbd3eb',
          300: '#98bce0',
          400: '#76a6d6',
          500: '#5490CC',
          600: '#4373a3',
          700: '#32567a',
          800: '#0C3150',
          900: '#071d30',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: '#5490CC',
          100: '#5490CC',
          200: '#5490CC',
          300: '#5490CC',
          400: '#5490CC',
          500: '#5490CC',
          600: '#0c3150',
          700: '#071d30',
          800: '#040f18',
          900: '#010508',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        poppins: 'var(--poppins-font)', // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        montserrat_alt: 'var(--montserrat_alt-font)', // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(85 144 204 / 36%), rgb(12 49 80)), url('/images/pattern.jpg')",
      },
      listStyleImage: {
        checkmark: 'url("/images/checkmark.svg")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'ltr-linear-infinite': {
          from: { 'background-position': '0 0' },
          to: { 'background-position': '400% 0%' },
        },
        'spin-slowly': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ltr-linear-infinite': 'ltr-linear-infinite 100s linear infinite',
        'spin-slowly': 'spin-slowly 600s linear infinite',
      },
      transitionProperty: {
        background: 'background',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    require('preline/plugin'),
  ],
} satisfies Config;
