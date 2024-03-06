import { createContext } from 'react';
import { fillBlue500, fillBlue600, borderBlue500, borderBlue600 } from '../content.js/index.js';


const blueColor = {
  fill500: fillBlue500,
  fill600: fillBlue600,
  border500: borderBlue500,
  border600: borderBlue600,
}

export const blueColorContext = createContext(blueColor);