import { UPDATE_CART, UPDATE_SKU, UPDATE_CART_NUMS, DELETE_PRODUCT, CLEAR_CART } from '../mutations-type'
import { pay } from '../../services/cart'
export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        total(state, getters) {
            return state.products.reduce((total, product) => {
                return total + product.price * product.nums;
            }, 0);
        }
    },
    mutations: {
        [UPDATE_CART](state, product) {
            const index = state.products.findIndex(item => item.id === product.id)
            if (index < 0) {
                state.products.push({
                    ...product,
                    nums: 1,
                    max: product.sku
                })
            } else {
                state.products[index].nums++
            }
        },
        [UPDATE_CART_NUMS](state, { id, nums }) {
            state.products.find(item => item.id === id).nums = nums
        },
        [DELETE_PRODUCT](state, product) {
            state.products = state.products.filter(item => item.id !== product.id)
        },
        [CLEAR_CART](state, product) {
            state.products = []
        }
    },
    actions: {
        addToCart({ commit }, product) {
            commit(UPDATE_CART, product)

            commit('products/' + UPDATE_SKU, {
                id: product.id,
                sku: product.sku - 1
            }, { root: true })
        },
        onChangeNums({ commit }, { product, val }) {
            if (val >= product.max) {
                commit(UPDATE_CART_NUMS, { id: product.id, nums: product.max })

                commit('products/' + UPDATE_SKU, {
                    id: product.id,
                    sku: 0
                }, { root: true })
            } else {
                commit(UPDATE_CART_NUMS, { id: product.id, nums: val })

                commit('products/' + UPDATE_SKU, {
                    id: product.id,
                    sku: product.max - val
                }, { root: true })
            }
        },
        deleteProduct({ commit }, product) {
            commit(DELETE_PRODUCT, product)

            commit('products/' + UPDATE_SKU, {
                id: product.id,
                sku: product.max
            }, { root: true })
        },
        async pay({ commit, state }, payload) {
            const ids = state.products.map(item => item.id)
            const { data } = await pay(ids)

            if (data) {
                alert("结算成功")

                state.products.forEach(product => {
                    commit('products/' + UPDATE_SKU, {
                        id: product.id,
                        sku: product.max
                    }, { root: true })
                })

                commit(CLEAR_CART)
            } else {
                alert("结算失败")
            }
            return Promise.resolve(data)
        }
    }
}