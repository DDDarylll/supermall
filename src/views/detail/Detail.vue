<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

import { getDetail } from "network/detail";

export default {
  name: "SupermallDetail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;

    // 根据iid请求数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      //获取轮播图图片
      this.topImages = res.data.result.itemInfo.topImages;
    });
  },
};
</script>

<style scoped>
</style>