export const itemsStore = {
  state: () => ({
    items: [
        {
            id: 0,
            quantity: 4,
            cellId: 0,
            color: 'green'
        },
        {
            id: 1,
            quantity: 2,
            cellId: 1,
            color: 'yellow'
        },
        {
            id: 2,
            quantity: 5,
            cellId: 5,
            color: 'purple'
        },
    ]
  }),
  getters: {
    getItem: (state) => (cell) =>{
      const index = state.items.findIndex(item => item.cellId === cell)
      return index === -1 ? false : state.items[index];
    },
  },
  mutations: {
    // initialiseStore(state) {
    //     // Check if the ID exists
    //     if(localStorage.getItem('items')) {
    //         // Replace the state object with the stored item
    //         this.replaceState(
    //             Object.assign(state, JSON.parse(localStorage.getItem('items')))
    //         );
    //     }
    // },
    setItems(state, items) {
        state.items = items;
    }
  },
  actions: {
  },
  namespaced: true
}
