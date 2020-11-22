<template>
  <div>
    <div class="gwh_box">
      <!--头部区域  -->
      <header>
        <i class="icon-back"></i>
        <h4>欧美文化的抽象美感</h4>
        <p>
          <i class="icon-nav"></i>导航
        </p>
      </header>
      <!-- 内容区域 -->
      <main>
        <div class="gwh_top">
          <!-- <img src="/case1.jpg" alt /> -->
          <section>设计诠释:less is more 不需要过多的装饰,简单的墙面背景与简洁的家具即可成一个温暖的家</section>
        </div>
        <div
          class="gwh_bottom"
        >房先森互联网家装有别于传统装修公司与其他装修中介平台,以自营模式整合设计师与项目经理,杜绝项目转包外包,利用互联网将工地进行在线全景直播,通过去中间环节,提供装修套餐+个性化定制服务。</div>
      </main>
      <!-- 尾部区域 -->
      <footer>
        <p>
          <i class="icon-design"></i>预约免费设计1
        </p>
      </footer>
    </div>
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

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}

body,
html,
.gwh_box {
  width: 100%;
  height: 100%;
  display: flex;
}

header {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  background: #fff;
  align-items: center;
}

header .icon-back {
  width: 28px;
  height: 28px;
  border: 1px solid #000;
  margin-left: 2%;
}

header p {
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999999;
  font-size: 12px;
}

header p .icon-nav {
  width: 28px;
  height: 28px;
  border: 1px solid #000;
}

main {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}

main .gwh_top {
  width: 100%;
  height: 482px;
  background: #202020;
}

main .gwh_top img {
  width: 100%;
  height: 226px;
  margin-top: 80px;
}

main .gwh_top section {
  padding: 3%;
  margin-top: 50px;
  font-size: 20px;
  color: #fff;
}

main .gwh_bottom {
  text-indent: 34px;
  width: 100%;
  height: 120px;
  background: #fff;
  //   margin-top: 10px;
  position: absolute;
  bottom: 123px;
  letter-spacing: 6px;
  padding: 2%;
}

footer {
  width: 100%;
  height: 80px;
  background: #fe6a73;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}

footer p {
  width: 100%;
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p .icon-design {
  margin-right: 4%;
  width: 44px;
  height: 56px;
  border: 1px solid #000;
}
</style>
