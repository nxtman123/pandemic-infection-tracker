import { local } from 'store2';

const GAME_STATE = 'GAME_STATE';

const persistApi = {

  async hasData() {
    return local.get(GAME_STATE, null) !== null;
  },

  async load() {
    return local.get(GAME_STATE, null);
  },

  async persist(state) {
    local.add(GAME_STATE, state);
  },

};

export default persistApi;
