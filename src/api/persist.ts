import { local } from 'store2';
import { RootState } from '@/store/types';

const GAME_STATE = 'GAME_STATE';

export interface PersistAPI {
  load: () => RootState | null;
  persist: (s: RootState) => void;
}

const persistApi: PersistAPI = {

  load(): RootState | null {
    return local.get(GAME_STATE, null);
  },

  persist(state: RootState) {
    local.add(GAME_STATE, state);
  },

};

export default persistApi;
