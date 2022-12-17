export const itemsStore = {
  state: () => ({
    items: [
    //   {
    //     id: 0,
    //     quantity: 4,
    //     cellId: 0,
    //     color: 'green'
    // },
    // {
    //     id: 1,
    //     quantity: 2,
    //     cellId: 1,
    //     color: 'yellow'
    // },
    // {
    //     id: 2,
    //     quantity: 5,
    //     cellId: 5,
    //     color: 'purple'
    // },
    ],
  }),
  getters: {
    getItem: (state) => (cell) => {
      const index = state.items.findIndex(item => item.cellId == cell);
      return index === -1 ? false : state.items[index];
    },
  },
  mutations: {
    initialiseStore(state) {
      // localStorage.setItem('items', JSON.stringify(state.items));
      if (localStorage.getItem('items')) {
        state.items = JSON.parse(localStorage.getItem('items'));
      }
    },
    setItems(state, items) {
      state.items = items;
      localStorage.setItem('items', JSON.stringify(state.items))
    },
  },

  namespaced: true
}
