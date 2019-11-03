
export interface ICity {
  id: number;
  name: string;
  // color: string;
  cardCount: number;
}

export interface IPeriod {
  id: number,
  cards: ICityCardInPeriod[],
}

export interface ICityCardInPeriod {
  cityId: number;
  name: string;
  // color: string;
  periodId: number;
  position: number;
}
