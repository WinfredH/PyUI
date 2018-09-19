import PYMenuGroup from './src/menu-group.vue';

PYMenuGroup.install = Vue => {
  Vue.component(PYMenuGroup.name, PYMenuGroup);
};

export default PYMenuGroup;
