import CellGroup from './index.vue';

/* istanbul ignore next */
CellGroup.install = function(Vue) {
  Vue.component(CellGroup.name, CellGroup);
};

export default CellGroup;
