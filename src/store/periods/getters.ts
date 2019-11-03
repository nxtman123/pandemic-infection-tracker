import { GetterTree } from 'vuex';
import { IPeriod } from '@/store/external-types';
import { RootState } from '@/store/types';
import { PeriodsState } from './types';

interface Getters extends GetterTree<PeriodsState, RootState> {
  periods: (state: PeriodsState, _: any, __: any, rootGetters: GetterTree<RootState, RootState>)
    => IPeriod[];
}

const getters: Getters = {

  periods(state: PeriodsState, _: any, __: RootState, rootGetters: any): IPeriod[] {
    return state.periods.map((cityIds, periodId) => ({
      id: periodId,
      cards: cityIds.map((cityId, position) => {
        const city = rootGetters.cityFromId(cityId);
        return {
          cityId: city.id,
          name: city.name,
          periodId,
          position,
        };
      }),
    }));
  },

};

export default getters;
