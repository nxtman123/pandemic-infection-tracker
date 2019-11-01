
export interface RootState {
  deck: City[];
  periods: PeriodState[];
}

export interface CityCard {
  id: number;
  name: string;
  // color: string;
}

export interface City extends CityCard {
  count: number;
}

export interface CityCardInStack extends CityCard{
  position: number;
}

export type PeriodState = number[];

export interface Period {
  id: number,
  cards: CityCardInStack[],
}
