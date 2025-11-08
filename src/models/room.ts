export interface Location {
  address: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface Amenity {
  label: string;
  icon: string;
}

export interface Safety {
  title: string;
  body: string;
  icon: string;
}

export interface Availability {
  checkIn: number;
  checkOut: number;
}

export enum RoomType {
  DELUXE_ROOM = 'Deluxe Room',
  SINGLE_ROOM = 'Single Room',
  SUPER_ROOM = 'Super Room',
  PRESIDENTIAL_ROOM = 'Presidential Room',
}

export default interface Room {
  id: string;
  name: string;
  slug: string;
  type: RoomType;
  description: string;
  summary: string;
  location: Location;
  amenities: Amenity[];
  price: number;
  slashedPrice?: number;
  images: string[];
  videos: string[];
  availability: Availability[];
  bedroom: number;
  bathroom?: number;
  guest: number;
  size: number;
  currency: string;
  rate: number;
  status: 'active' | 'inactive' | 'coming-soon';
  rules: string[];
  safeties: Safety[];
  createdAt: number;
  updatedAt: number;
}
