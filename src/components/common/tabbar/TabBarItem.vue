<template>
  <div class="tab-bar-item" v-on:click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarTabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data: function () {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive: function () {
      //用活跃路由和当前路由路径对比
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle: function () {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick: function () {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 图片基线不一样 */
  vertical-align: middle;
  margin-bottom: 3px;
}
</style>