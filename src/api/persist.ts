import { local } from 'store2';
import { RootState } from '@/store/types';

const GAME_STATE = 'GAME_STATE';

export interface PersistAPI {
  load: () => Promise<RootState | null>;
  persist: (s: RootState) => Promise<void>;
}

const persistApi: PersistAPI = {

  async load(): Promise<RootState | null> {
    return local.get(GAME_STATE, null);
  },

  async persist(state: RootState) {
    local.add(GAME_STATE, state);
  },

};

export default persistApi;
