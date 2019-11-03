import { GetterTree } from 'vuex';
import { RootState } from './types';

interface Getters extends GetterTree<RootState, RootState> {}

const getters: Getters = {};

export default getters;
