import { City } from '@/store/infection-deck/types';

export interface ICity extends City{}

export interface IPeriod {
  id: number,
  cards: ICityCardInPeriod[],
}

export interface ICityCardInPeriod {
  id: number;
  name: string;
  // color: string;
  periodId: number;
  position: number;
}
