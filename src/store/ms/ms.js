export default {
    namespaced: true,
    state: {
        mpName: 'I am ms',
    },
    mutations: {
        setMSNAMES: (state, routers) => {
            state.mpName = routers;
        }
    },
    actions: {
        setmp: ({
            commit
        }, routers, rootState) => {
            console.log(rootState)
            commit('setMSNAMES', routers);
        }
    },
    getters: {
        getMSNAMES: (state, b, rootstate) => {
            console.log(rootstate)
            return state.mpName
        }
    },
    modules: {}
}