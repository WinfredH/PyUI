<template>
  <li
      class="py-submenu"
      @mouseenter="mouseEnterCallback"
      @mouseleave="mouseLeaveCallback"
  >
    <div
        class="py-submenu-title"
        :class="{
          'horizontal-menu': MENU.mode === 'horizontal',
          'vertical-menu': MENU.mode === 'vertical'
        }"
        @click="clickCallback"
    >
      <slot name="title"></slot>
    </div>
    <transition name="submenu-list">
      <ul
          v-show="!collapse"
          class="py-submenu-list"
          :class="{
            'horizontal-menu': MENU.mode === 'horizontal',
            'vertical-menu': MENU.mode === 'vertical'
          }"
      >
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: "py-submenu",
  inject: ['MENU'],
  data() {
    return {
      collapse: true,
    };
  },
  methods: {
    mouseEnterCallback() {
      if (this.MENU.mode === 'horizontal') this.collapse = false;
    },
    mouseLeaveCallback() {
      if (this.MENU.mode === 'horizontal') this.collapse = true;
    },
    clickCallback() {
      console.log(this.MENU.mode);
      if (this.MENU.mode === 'vertical') this.collapse = !this.collapse;
    },
  },
  provide() {
    return {
      parentMENU: this,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";
.py-submenu {
  position: relative;
  height: 100%;
  line-height: 100%;
}
/*标题的样式*/
.py-submenu-title:hover {
  background-color: #41b883;
}
.py-submenu-title.horizontal-menu {
  padding: 6px 10px;
}
.py-submenu-title.vertical-menu {
  padding: 10px 6px;
}
/*子菜单的样式*/
.py-submenu-list {
  background-color: #288;
  overflow: hidden;
}
.py-submenu-list.horizontal-menu {
  position: absolute;
  top: 30px;
}
.py-submenu-list.vertical-menu {

}
/*子菜单的动画*/
.submenu-list-enter, .submenu-list-leave-to {
  height: 0;
  opacity: 0;
}
.submenu-list-enter-to, .submenu-list-leave {
  opacity: 1;
}
.submenu-list-enter-active, .submenu-list-leave-active {
  transition: all 1s;
}
</style>
