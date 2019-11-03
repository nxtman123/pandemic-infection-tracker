import { InfectionDeckState } from '@/store/infection-deck/types';
import { PeriodsState } from '@/store/periods/types';

export interface RootState {
  infectionDeck: InfectionDeckState;
  periods: PeriodsState;
}
