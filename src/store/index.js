import { createStore } from 'vuex';
import {itemsStore} from './itemsStore';

export default createStore({
  modules: {
    items: itemsStore
  }
})
