<template>
  <div
    v-if="Config.show"
    class="Dialog"
    :style="'background-color: rgba(0, 0, 0, '+Config.maskOpacity+')'"
    @click="maskClickClose"
  >
    <div
      class="Dialog-window"
      :class="{animations:Config.animations}"
      :style="'width:' + Config.width + ';' +
    'background-color: rgba(0, 0, 0, '+Config.winOpacity+')'"
    >
      <div :class="[Config.type, 'Dialog-window-header']"></div>
      <div class="Dialog-window-content">{{Config.message}}</div>
      <div
        class="Dialog-window-footer"
        :style="Config['btnData'].length === 1?'justify-content: center;':''"
      >
        <button
          v-for="(item,idx) in Config.btnData"
          :key="idx"
          :style="'background-color:' + item.btnBgc  + ';'+ 'color:' + item.color"
          @click="callBack(item)"
        >{{item.text}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    ConfigProps: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      Config: {
        //默认参数
        //对话框尺寸
        width: "60%",
        //对话框类型
        type: "loading",
        //提示信息
        message: "",
        //按钮配置
        btnData: [],
        //遮罩透明度
        maskOpacity: 0.6,
        //对话框透明度
        winOpacity: 0,
        //延时多久关闭
        //delayTime: 2000,
        //是否显示
        show: true
      }
    };
  },

  methods: {
    // close() {
    //   this.Config = Object.assign(this.Config, this.config);
    // },
    callBack(item) {
      let isClose = item.callBack && item.callBack();
      if (isClose === true) {
        this.Config.show = false;
      }
      //console.log(isClose)
    },
    maskClickClose() {
      if (this.Config.maskClose) {
        this.Config.show = false;
      }

      //console.log("点击遮罩层关闭");
    }
  },

  created() {
    //console.log("Dialog的初始化");
    // 初始化插件
    // config 扩展
    this.Config = Object.assign(this.Config, this.ConfigProps);
  }
};
</script>
<style scoped>
@import "./index.css";
</style>
