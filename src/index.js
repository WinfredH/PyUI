
import Button from "./components/button/index";
import Menu from "./components/menu/index";
import MenuItem from "./components/menu-item/index";
import MenuGroup from "./components/menu-group/index";
import Submenu from "./components/submenu/index";

const components = [
  Button,
  Menu,
  MenuItem,
  MenuGroup,
  Submenu,
];

const install = function (Vue) {
  // 注册全局组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });

  // istanbul ignore if
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

};

export default {
  version: '0.0.1',
  install,
  Button,
};

/* module.exports = {

};

module.exports.default = module.exports; */
