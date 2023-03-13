import { createStore } from 'vuex'
import { ItemInterface } from '@/models/items/Item.interface';
import { ItemStateInterface } from '@/models/store/ItemState.interface';

// Estado inicial
const state: ItemStateInterface = {
  loading: false,
  items: []
}

export default createStore({
  state: state,
  mutations: {
    loadingItems(state: ItemStateInterface){
      state.loading = true;
      state.items = [];
    },
    loadedItems(state: ItemStateInterface, items: ItemInterface[]){
      state.items = items;
      state.loading = false;
    },
    selectItem(state: ItemStateInterface, params: {
      id: number,
      selected: boolean
    }){
      const { id, selected } = params;
      const item = state.items.find(i => i.id === id);
      if(item){
        item.selected = selected;
      }
    }
  },
  actions: {
    loadItems({ commit, state }){
      commit('loadingItems');

      // Datos falsos
      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: 'Item 1',
          selected: false
        },
        {
          id: 2,
          name: 'Item 2',
          selected: false
        },
        {
          id: 3,
          name: 'Item 3',
          selected: false
        }
      ];

      setTimeout(() => {
        commit('loadedItems', mockItems)
      }, 1000);
    },
    selectItem({ commit }, params: {
      id: number,
      selected: boolean
    }){
      commit('selectItem', params);
    }
  },
  modules: {
  }
})
