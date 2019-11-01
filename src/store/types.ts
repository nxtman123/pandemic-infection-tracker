
export interface RootState {
  deck: City[];
  periods: Period[];
}

export interface City {
  id: number;
  name: string;
  // color: string;
  count: number;
}

export type Period = number[];
