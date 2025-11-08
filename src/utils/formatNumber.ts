import { replace } from 'lodash';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

export function fPercent(amount: number, percent: number): number | null {
  return numeral((amount * percent) / 100).value();
}

export function unitCalculator(amount: number, unit: number): number | null {
  return numeral(amount * unit).value();
}

export function fNumber(number: string | number): number {
  return numeral(number || 0).value() as number;
}

export function fNumberToString(number: number): string {
  return numeral(number).format();
}

export function fShortenNumber(number: number): string {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number: number): string {
  return numeral(number).format('0.0 b');
}

export function dCalculator(number: number): Date {
  const now = new Date();
  const dueDate = new Date(now);
  dueDate.setDate(now.getDate() + number);

  return dueDate;
}
export const fStringToNumber = (value: string): number =>
  numeral(value || '').value() as number;

export const fCurrency = (value: number | string, currency = '₦' as string) =>
  `${currency}${numeral(value).format(!value ? '0,0.00' : '0,0[.]00')}`;

export const fDotsToEmpty = (value: string) => value.replace(/[.]/g, '');

export function formatToNigerianNumber(phoneNumber?: string) {
  if(!phoneNumber){
    return 'Invalid number'
  }
  // Remove any non-numeric characters (like dashes, spaces)
  let cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Check if it starts with +234 and remove it
  if (cleanedNumber.startsWith('234')) {
    cleanedNumber = cleanedNumber.substring(3);
  }

  // Add '0' if the number doesn't start with it
  if (!cleanedNumber.startsWith('0')) {
    cleanedNumber = '0' + cleanedNumber;
  }

  // Check if the cleaned number is valid (should be 11 digits with the leading '0')
  if (cleanedNumber.length === 11 && cleanedNumber.startsWith('0')) {
    return cleanedNumber;  // Return the Nigerian-formatted number
  } else {
    return 'Invalid number';
  }
}