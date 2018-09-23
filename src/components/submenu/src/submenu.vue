<template>
  <li
      class="py-submenu"
      @mouseenter="mouseEnterCallback"
      @mouseleave="mouseLeaveCallback"
  >
    <div
        ref="title"
        class="py-submenu-title"
        :class="{
          'horizontal-menu': rootMenu.mode === 'horizontal',
          'vertical-menu': rootMenu.mode === 'vertical',
          'py-submenu-title--choosen': !collapse
        }"
        @click="clickCallback"
    >
      <slot name="title"></slot>
    </div>
    <transition name="submenu-list">
      <ul
          v-show="!collapse"
          ref="list"
          class="py-submenu--ul"
          :class="{
            'horizontal-menu': rootMenu.mode === 'horizontal',
            'vertical-menu': rootMenu.mode === 'vertical',
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
  // 注入根菜单组件
  inject: ['rootMenu'],
  data() {
    return {
      collapse: true,
    };
  },
  computed: {
    parentMenu() {
      return this.$parent.$options._componentTag;
    },
  },
  mounted() {
    // 根菜单为水平时，动态计算定位
    if (this.rootMenu.mode === 'horizontal') {
      this.$watch('collapse', this.parentMenu === 'py-menu' ? this.singlePosition : this.multiplePosition);
    }
  },
  methods: {
    mouseEnterCallback() {
      if (this.rootMenu.mode === 'horizontal') this.collapse = false;
    },
    mouseLeaveCallback() {
      if (this.rootMenu.mode === 'horizontal') this.collapse = true;
    },
    clickCallback() {
      if (this.rootMenu.mode === 'vertical') this.collapse = !this.collapse;
    },
    // 单级水平子菜单时动态定位
    singlePosition(val) {
      if (val) return;
      this.$nextTick(() => {
        this.$refs.list.style.top = `${4 + this.$refs.title.offsetHeight}px`;
      });
    },
    // 多级水平子菜单时动态定位
    multiplePosition(val) {
      if (val) return;
      this.$nextTick(() => {
        this.$refs.list.style.left = `${2 + this.$refs.title.offsetWidth}px`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../base/style.scss";
@import "../../../base/themes.scss";
.py-submenu {
  position: relative;
}
/*标题的样式*/
.py-submenu-title:hover {
  background-color: #41b883;
}
.py-submenu-title--choosen {
  background-color: #41b883;
}
.py-submenu-title.horizontal-menu {
  padding: 6px 10px;
}
.py-submenu-title.vertical-menu {
  padding: 10px 6px;
}
/*子菜单的样式*/
.py-submenu--ul {
  background-color: #288;
}

.py-submenu--ul.horizontal-menu {
  position: absolute;
  /*top: 30px;*/
  z-index: 999;
}

.py-submenu--ul.py-submenu--ul--right.horizontal-menu {
  top: 0;
}

/*子菜单的动画*/
.submenu-list-enter, .submenu-list-leave-to {
  opacity: 0;
}
.submenu-list-enter-to, .submenu-list-leave {
  opacity: 1;
}
.submenu-list-enter-active, .submenu-list-leave-active {
  transition: all .3s;
}
</style>
