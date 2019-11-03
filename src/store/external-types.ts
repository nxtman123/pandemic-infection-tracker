import { City } from '@/store/infection-deck/types';

export interface ICity extends City{}

export interface IPeriod {
  id: number,
  cards: ICityCard[],
}

export interface ICityCard {
  id: number;
  name: string;
  // color: string;
  position: number;
}
