<template>
  <div>
    <van-nav-bar title="装修预算">
      <van-image width="70" src="/图片/切图/logo.png" slot="left" />
      <van-divider slot="right">
        <van-icon name="wap-nav" />
        <van-span>导航</van-span>
      </van-divider>
    </van-nav-bar>
    <div class="back">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="/图片/切图/house_info.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/图片/切图/house_info.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/图片/切图/house_info.jpg" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="/图片/切图/house_info.jpg" />
        </van-swipe-item>
      </van-swipe>
      <div class="hope-dis">
        <div class="hope-crumbs">
          <p>房先生 / 装饰攻略 / 装修预算 / 正文</p>
        </div>
        <div class="hope-bos">
          <p class="hope-p1">装修预算注意事项</p>
          <p class="hope-p2">
            <span>
              <i class="iconfont icon-nav"></i>
              2016-07-09
            </span>
            <span>
              <i class="iconfont icon-nav"></i>
              115
            </span>
          </p>
        </div>
        <div class="hope-uli">
          <van-ul>
            <van-li>客厅装修隔断</van-li>
            <van-li>客厅装修图</van-li>
            <van-li>客厅装修效果</van-li>
            <van-li>客厅装修隔断</van-li>
            <van-li>客厅装修图</van-li>
            <van-li>客厅装修效果</van-li>
          </van-ul>
        </div>
        <div class="hope-lead">
          <van-span>&nbsp;&nbsp;导语：在装修时如果没有提前做好装修预算，很容易造成最后开支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？</van-span>
          <van-image width="100%" src="/图片/切图/7t.gif" slot="left" />
        </div>
      </div>
      <div class="hope-but">
        <van-button plain type="primary">点击展开全文</van-button>
        <p>
          <van-divider style="color:blue;">
            <van-icon name="wap-nav" />
            <van-span>评价</van-span>
          </van-divider>
          <van-divider style="color:yellow;">
            <van-icon name="wap-nav" />
            <van-span>分享</van-span>
          </van-divider>
        </p>
        <van-button plain type="primary">进入装修预算</van-button>
      </div>
    </div>
    <div class="hope-k"></div>
    <div class="hope-like">
      <p class="hope-p1">猜您喜欢</p>
      <ul>
        <li>
          <img src="/图片/切图/72.gif" />
          <span>遇到有这样房子的男人就嫁了吧</span>
          <p class="hope-p2">
            <span>
              <i class="iconfont icon-nav"></i>
              2016-07-09
            </span>
            <span>
              <i class="iconfont icon-nav"></i>
              115
            </span>
          </p>
        </li>
        <hr />
        <li>
          <img src="/图片/切图/71.gif" />
          <span>能让您涨工资的家具风水！</span>
          <p class="hope-p2">
            <span>
              <i class="iconfont icon-nav"></i>
              2016-07-09
            </span>
            <span>
              <i class="iconfont icon-nav"></i>
              115
            </span>
          </p>
        </li>
        <hr />
        <li>
          <img src="/图片/切图/72.gif" />
          <span>遇到有这样房子的男人就嫁了吧</span>
          <p class="hope-p2">
            <span>
              <i class="iconfont icon-nav"></i>
              2016-07-09
            </span>
            <span>
              <i class="iconfont icon-nav"></i>
              115
            </span>
          </p>
        </li>
        <hr />
        <li>
          <img src="/图片/切图/71.gif" />
          <span>能让您涨工资的家具风水！</span>
          <p class="hope-p2">
            <span>
              <i class="iconfont icon-nav"></i>
              2016-07-09
            </span>
            <span>
              <i class="iconfont icon-nav"></i>
              115
            </span>
          </p>
        </li>
      </ul>
    </div>
    <div class="hope-k"></div>
    <div class="hope-fss">方先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐 + 个性化定制服务。</div>
    <div class="hope-k"></div>
    <div class="hope-foot">
      <p>服务热线：400-9977-658</p>
      <p>
        <ul>
          <li>触屏版</li>|
          <li>电脑版</li>|
          <li>关于我们</li>|
          <li>联系我们</li>
        </ul>
      </p>
    </div>
    <van-tabbar>
      <van-image width="5%" height="40%" src="/图片/切图/common/icon_close.png" />
      <van-image width="85%" src="/图片/切图/quoten_bottom.png" />
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  components: {}
};
</script>
<style lang="scss">
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

.hope-qwe {
  width: 100%;
  height: 100%;
}
.hope-crumbs {
  width: 95%;
  height: 20px;
  margin-top: 20px;
  margin: 0 auto;
  background-color: #f4f4f4;
  line-height: 20px;
  border-radius: 5px;
  p {
    padding-left: 10px;
  }
}

.hope-bos {
  width: 90%;
  border-bottom: 1px solid #eaeaea;
  margin-left: 15px;
  margin-top: 16px;
  text-align: center;
  .hope-p1 {
    font-size: 20px;
  }
  .hope-p2 {
    width: 200px;
    text-align: center;
    margin: 0 auto;
    font-size: 14px;
    margin-top: 30px;
    color: #999;
    margin-bottom: 0.3rem;
    display: flex;
    justify-content: space-around;
  }
  .hope-p2 span {
    display: block;

    width: 300px;
  }
}

.hope-uli {
  width: 100%;
  van-ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  van-li {
    font-size: 14px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: 5px;
    padding: 0px 5px 0px 5px;
    justify-content: space-around;
  }
}
.hope-lead {
  width: 90%;
  margin: 0 auto;
  padding-top: 26px;
  .van-image {
    padding-top: 20px;
  }
}
.hope-but {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  .van-button {
    width: 80%;
  }
  .van-bar .van-divider {
    display: flex;
    flex-wrap: wrap;
  }
  p {
    width: 100%;
    display: flex;

    .van-divider {
      width: 30px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      margin-left: 28%;
      .van-icon {
        display: block;
        margin: 0 auto;
        font-size: 20px;
      }
    }
  }
}
.hope-k {
  width: 100%;
  height: 10px;
  margin-top: 10px;
  background: #b3b3b3;
}
.hope-like {
  width: 90%;
  margin: 0 auto;
  .hope-p1 {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    line-height: 30px;
    padding-left: 5px;
    border-left: 5px solid #058b00;
  }
  ul {
    width: 100%;
    margin-top: 10px;
    li {
      width: 100%;
      height: 130px;
      margin-top: 5px;
      // display: flex;
      img {
        width: 30%;
      }
      span {
        font-size: 18px;
        display: block;
        float: right;
      }
      .hope-p2 {
        float: right;
        width: 300px;
        text-align: center;
        // margin: 0 auto;
        font-size: 14px;
        margin-top: -30px;
        display: block;
        color: #999;
        display: block;
        display: flex;
        justify-content: space-around;
        span {
          float: left;
        }
      }
    }
  }
}
.hope-fss{
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}
.hope-foot{
  width: 100%;
  text-align: center;
  height: 150px;
  p{
    margin-top: 20px;
  }
  ul{
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
}

.van-tabbar {
  background-color: rgba(0, 0, 0, 0.7);
  .van-image {
    margin: 0 auto;
  }
}
</style>