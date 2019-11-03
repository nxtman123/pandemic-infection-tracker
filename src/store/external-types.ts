
export interface ICity {
  id: number;
  name: string;
  // color: string;
  cardCount: number;
}

export interface ICardGroup {
  id: number;
  cards: ICityCardInGroup[];
  current: boolean;
}

export interface ICityCardInGroup {
  cityId: number;
  name: string;
  // color: string;
  position: number;
}

export interface IPeriod extends ICardGroup {
  cards: ICityCardInPeriod[];
}

export interface ICityCardInPeriod extends ICityCardInGroup {
  periodId: number;
}

export interface ISegment extends ICardGroup {
  cards: ICityCardInSegment[];
}

export interface ICityCardInSegment extends ICityCardInGroup {
  segmentId: number;
}
