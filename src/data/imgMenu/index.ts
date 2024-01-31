// index.ts
import Almuerzo1 from './Almuerzo1.png';
import Almuerzo2 from './Almuerzo2.png';
import Almuerzo3 from './Almuerzo3.png';
import Bebida1 from './Bebida1.png';
import Bebida2 from './Bebida2.png';
import Bebida3 from './Bebida3.png';
import Desayuno1 from './Desayuno1.png';
import Desayuno2 from './Desayuno2.png';
import Desayuno3 from './Desayuno3.png';
import Postre1 from './Postre1.png';
import Postre2 from './Postre2.png';
import Postre3 from './Postre3.png';

export const menuImg = {
  Almuerzo1,
  Almuerzo2,
  Almuerzo3,
  Bebida1,
  Bebida2,
  Bebida3,
  Desayuno1,
  Desayuno2,
  Desayuno3,
  Postre1,
  Postre2,
  Postre3,
};

export type Option = {
  img: keyof typeof menuImg;
  name: string;
  price: number;
};