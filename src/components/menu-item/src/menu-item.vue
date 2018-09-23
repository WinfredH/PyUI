<template>
  <li
      class="py-menu-item"
      :class="{
        'horizontal-menu': rootMenu.mode === 'horizontal',
        'vertical-menu': rootMenu.mode === 'vertical',
        'submenu-item': $parent.$options._componentTag === 'py-submenu'
      }"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "py-menu-item",
  inject: ['rootMenu'],
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
  white-space: nowrap;
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
