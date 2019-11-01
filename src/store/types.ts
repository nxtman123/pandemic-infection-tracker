
export interface RootState {
  deck: City[];
  periods: Period[];
}

export interface CityCard {
  id: number;
  name: string;
  // color: string;
}

export interface City extends CityCard {
  count: number;
}

export interface Period {
  id: number;
  cards: number[];
}
