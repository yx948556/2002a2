<template>
    <div>
        <van-nav-bar title="装修预算">
      <van-image width="70" src="/图片/切图/logo.png" slot="left" />
      <van-divider slot="right">
        <van-icon name="wap-nav" />
        <van-span>导航</van-span>
      </van-divider>
    </van-nav-bar>
        <h1>装修方案</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    computed:{

    },
    components:{

    }
};
</script>

<style scoped lang="scss">
html,
body {
  font-size: 16px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  img {
    width: 100%;
  }
}

.van-nav-bar .van-divider {
  width: 30px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .van-icon {
    display: block;
    margin: 0 auto;
    color: #999;
    font-size: 20px;
  }
}
</style>
