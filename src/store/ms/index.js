export default {
    namespaced: true,
    state: {
        mpName: 'I am msindex',
    },
    mutations: {
        setMPNAMES: (state, routers) => {
            state.mpName = routers;
        }
    },
    actions: {
        setmp: ({
            commit
        }, routers, rootState) => {
            console.log(rootState)
            commit('setMPNAMES', routers);
        }
    },
    getters: {
        getMPNAMES: (state, b, rootstate) => {
            console.log(rootstate)
            return state.mpName
        }
    },
    modules: {}
}