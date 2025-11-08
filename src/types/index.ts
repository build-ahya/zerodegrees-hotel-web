export interface AnyObject {
  [field: string]: any;
}

export interface Page {
  name: string;
  desc?: string;
  href: string;
  icon?: string;
  image?: string;
  button?: boolean;
  dropdown?: Page[];
}

export interface Button {
  title: string;
  href: string;
  icon?: string;
}

export interface Carousel {
  title?: string;
  subtitle?: string;
  body?: string;
  image: string;
  thumbnail?: string;
  href?: string;
}

export interface Slide {
  name: string;
  description?: string;
  image?: string;
  value?: any;
}

export interface Section {
  title: string;
  subtitle?: string;
  overline?: string;
  body: string;
  image?: string;
  images?: string[];
  background?: string;
  button?: Button;
  carousel?: Carousel[];
}

export interface TableHead {
  label: string;
  value: string;
}
export interface QueryParams {
  checkIn: number;
  checkOut: number;
  adults: number;
  children: number;
}