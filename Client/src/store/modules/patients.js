// initial state
const state = {
    all: []
  }
  
  // getters
  const getters = {
    allProducts: state => state.all
  }
  
  // actions
  const actions = {
    getAllProducts ({ commit }) {
        const _products = [
          {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
           {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
          {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
        ]
    }
  }
  
  // mutations
  const mutations = {
    setProducts (state, products) {
      state.all = products
    },
  
    decrementProductInventory (state, { id }) {
      const product = state.all.find(product => product.id === id)
      product.inventory--
    }
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }