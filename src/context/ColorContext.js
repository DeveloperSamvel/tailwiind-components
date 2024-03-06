import { createContext } from 'react';
import { blue500, blue600 } from '../content.js';

const colors = {
  color500: blue500,
  color600: blue600,
}

export const ColorsContext = createContext(colors);