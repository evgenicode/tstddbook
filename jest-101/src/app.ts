import { dict, separator, shift } from "./constants";

const getIndex = (index: number, offset: number) =>
  (index + offset) % dict.length;

const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);
  return dict[getIndex(index, shift)];
};

const transform = (letter: string) =>
  dict.includes(letter) ? getLetterWithOffset(letter) : letter;

export const convert = (str: string) => {
  return str.split(separator).map(transform).join(separator);
};
