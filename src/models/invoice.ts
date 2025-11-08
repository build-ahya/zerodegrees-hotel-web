import Booking from './booking';
import Room from './room';
import User from './user';

export default interface Invoice {
  id: string;
  invoiceId: string;
  booking: string | Booking;
  room: string | Room;
  user?: string | User; // Either to a single user
  amount: number;
  screenshot?: string;
  status: 'pending' | 'initialized' | 'paid' | 'unpaid' | 'refunded';
  type: 'transfer' | 'debitcard' | 'ussd';
  createdAt: number;
  updatedAt: number;
}
