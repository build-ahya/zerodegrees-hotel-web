import _ from 'lodash';

export function formatText(text: string) {
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
}

export function isAlphanumeric(text: string) {
  return /^[0-9a-zA-Z]+$/.test(text);
}

export function normalString(text: string) {
  return _.startCase(text.replace(/-/g, ' '));
}

export function capitalizeText(text: string) {
  return _.capitalize(text)
}