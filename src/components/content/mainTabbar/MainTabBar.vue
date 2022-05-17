<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/index.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/indexActive.png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="">
      <img slot="item-icon" src="~assets/img/tabbar/classify.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/classifyActive.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcar" activeColor="">
      <img slot="item-icon" src="~assets/img/tabbar/shopcar.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcarActive.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcarActive.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "TabbarMainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>