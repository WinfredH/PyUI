<template>
  <li
      class="py-menu-item"
      :class="{
        'horizontal-menu': MENU.mode === 'horizontal',
        'vertical-menu': MENU.mode === 'vertical',
        'submenu-item': $parent.$options._componentTag === 'py-submenu'
      }"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "py-menu-item",
  inject: ['MENU'],
  created() {
    // console.log(this.$parent.$options._componentTag);
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";
.py-menu-item {
  /*padding: 5px;*/

}
.py-menu-item:hover {
  background-color: #41b883;
}
.py-menu-item.horizontal-menu {
  padding: 6px 10px;
}
.py-menu-item.vertical-menu {
  padding: 10px 6px;
}
.py-menu-item.submenu-item:hover {
  background-color: #41b883;
}
.py-menu-item.submenu-item.horizontal-menu {
  /*top: 35px;*/
}
</style>
