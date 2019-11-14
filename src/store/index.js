import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function requireModules(modulesFiles) {
  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  }, {});
  return modules;
}

const mpModules = requireModules(require.context('@/store/mp', true, /\.js$/));
const mmModules = requireModules(require.context('@/store/ms', true, /\.js$/))
export default new Vuex.Store({
  state: {
    name: 'I am litingchen'
  },
  mutations: {},
  actions: {},
  modules: {
    ...mpModules,
    ...mmModules,
  },
  getters: {

  }
})