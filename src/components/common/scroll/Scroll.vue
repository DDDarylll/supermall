<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "SupermallScroll",

  data() {
    return {};
  },

  mounted() {
    //不要通过query去获取元素，如果有很多个名字相同的，可能会出bug
    new BScroll(this.$refs.wrapper, {
      observeDOM: true,
    });
  },
};
</script>

<style scoped>
</style>