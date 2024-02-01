// index.ts
import Event1 from './Event1.png';
import Event2 from './Event2.png';
import Event3 from './Event3.png';

export const eventImg = {
  Event1,
  Event2,
  Event3,
};

export type Event = {
  img: keyof typeof eventImg;
  name: string;
};