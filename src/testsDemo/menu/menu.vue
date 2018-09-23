<template>
  <div>
    <div class="menu-1">
      <py-menu mode="horizontal">
        <py-menu-item>菜单项1</py-menu-item>
        <py-menu-item>菜单项2</py-menu-item>
        <py-submenu>
          <template slot="title">子菜单3</template>
          <py-menu-item>子菜单项3-1</py-menu-item>
          <py-submenu>
            <template slot="title">子菜单3-2</template>
            <py-menu-item>子菜单项3-2-1</py-menu-item>
            <py-submenu>
              <template slot="title">子菜单3-2-2</template>
              <py-menu-item>子菜单项3-2-2-1</py-menu-item>
              <py-menu-item>子菜单项3-2-2-2</py-menu-item>
              <py-menu-item>子菜单项3-2-2-3</py-menu-item>
            </py-submenu>
            <py-menu-item>子菜单项3-2-3</py-menu-item>
          </py-submenu>
          <py-menu-item>子菜单项3-3</py-menu-item>
        </py-submenu>
        <py-menu-item>菜单项4</py-menu-item>
        <py-menu-item>菜单项5</py-menu-item>
      </py-menu>
    </div>
    <div class="menu-2">
      <py-menu mode="vertical">
        <py-menu-item>菜单项1</py-menu-item>
        <py-menu-item>菜单项2</py-menu-item>
        <py-submenu>
          <template slot="title">子菜单3</template>
          <py-menu-item>子菜单项3-1</py-menu-item>
          <py-submenu>
            <template slot="title">子菜单3-2</template>
            <py-menu-item>子菜单项3-2-1</py-menu-item>
            <py-menu-item>子菜单项3-2-2</py-menu-item>
            <py-menu-item>子菜单项3-2-3</py-menu-item>
          </py-submenu>
          <py-menu-item>子菜单项3-3</py-menu-item>
        </py-submenu>
        <py-menu-item>菜单项4</py-menu-item>
        <py-menu-item>菜单项5</py-menu-item>
      </py-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-demo",
};
</script>

<style scoped>
.menu-1 {
  margin-bottom: 20px;
  height: 30px;
}
.menu-2 {
  width: 150px;
}
</style>
