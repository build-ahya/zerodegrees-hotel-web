import { formatDistanceToNow } from "date-fns";

export function fDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function fTime(value: string | number | Date): string {
  const date = new Date(value);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours || 12; // The hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, '0');

  return `${formattedHours}:${minutes} ${ampm}`;
}

export function fDateTime(value: string | number) {
  const date = new Date(value);
  // Format the date part (YYYY-MM-DD)
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');

  // Format the time part (hh:mm AM/PM)
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours || 12; // The hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, '0');

  // Combine date and time parts
  const datePart = `${day}/${month}/${year}`;
  const timePart = `${formattedHours}:${minutes} ${ampm}`;

  return `${datePart} ${timePart}`;
}

export function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes*60000);
}

export function formatRelativeTime(date: Date | number): string {
  return `${formatDistanceToNow(date, { addSuffix: false })}`;
}