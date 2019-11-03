
export interface InfectionDeckState {
  deck: City[];
}

export interface City {
  id: number;
  name: string;
  // color: string;
  count: number;
}
