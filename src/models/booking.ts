import Invoice from './invoice';
import Room from './room';
import User from './user';

export default interface Booking {
  id: string;
  type: 'online' | 'offline';
  status: 'pending' | 'confirmed' | 'expired';
  user: string | User; //
  room: string | Room;
  invoice?: string | Invoice; //
  checkIn: number;
  checkOut: number;
  adults: number;
  children: number;
  createdAt: number;
  updatedAt: number;
}
