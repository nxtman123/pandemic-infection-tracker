
export interface RootState {
  deck: City[];
  periods: Period[];
}

export interface Card {
  name: string;
  // color: string;
}

export interface City extends Card {
  id: number;
  count: number;
}

export interface Period {
  id: number;
  cards: Card[];
}
