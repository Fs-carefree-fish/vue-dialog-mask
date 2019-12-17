<template>
  <div id="app">
    <button @click="btn1">不传递任何参数，只有一个loading...</button>
    <button @click="btn2">弹出一个不带按钮的警告框</button>
    <button @click="btn3">弹出一个有确认和取消按钮的成功框，点击确认按钮关闭</button>
    <button @click="btn4">弹出一个有确认和取消按钮的警告框，点击按钮不关闭</button>
    <button @click="btn5">弹出一个多组合按钮</button>
    <button @click="btn6">弹出一个确认和删除的框，点击确认弹出loading。。。2秒后关闭</button>
    <button @click="btn7">有动画</button>
    <button @click="btn8">延时2秒关闭加回调</button>
    <button @click="btn9">点击遮罩层可以关闭</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    btn1() {
      //不传递任何参数
      this.$dialog.init();
    },
    btn2() {
      //弹出一个不带按钮的警告框
      this.$dialog.init(this.config_2);
    },
    btn3() {
      //弹出一个有确认和取消按钮的成功框，点击按钮关闭
      this.$dialog.init(this.config_3);
    },
    btn4() {
      //弹出一个有确认和取消按钮的警告框，点击按钮不关闭
      this.$dialog.init(this.config_4);
    },
    btn5() {
      //弹出一个多组合按钮
      this.$dialog.init(this.config_5);
    },
    btn6() {
      //弹出一个确认和删除的框，点击确认弹出loading。。。2秒后关闭
      this.$dialog.init(this.config_6);
      //console.log(this.$dialog.init(this.config_6))
    },
    btn7() {
      //有动画
      this.$dialog.init(this.config_7);
    },
    btn8() {
      //有动画
      this.$dialog.init(this.config_8);
    },
    btn9() {
      //点击遮罩层可以关闭
      this.$dialog.init(this.config_9);
    }
  },
  data() {
    return {
      //以下是对弹窗的配置参数
      config_2: {
        //对话框尺寸
        width: "60%",
        //对话框类型
        type: "warning",
        //提示信息
        message: "不带按钮的警告框",
        //遮罩透明度
        maskOpacity: 0.4,
        //窗口透明度
        winOpacity: 0.5
      },

      config_3: {
        width: "60%",
        type: "ok",
        message: "弹出一个有确认和取消按钮的成功框，点击取消按钮关闭",
        btnData: [
          {
            btnBgc: "green",
            color: "#fff",
            text: "确认"
          },
          {
            text: "取消",
            callBack() {
              alert("点击了取消");
              //执行了回调之后关闭
              return true;
            }
          }
        ],
        maskOpacity: 0.4,
        winOpacity: 0.8
      },

      config_4: {
        width: "60%",
        type: "ok",
        message: "弹出一个有确认和取消按钮的警告框，点击按钮不关闭",
        btnData: [
          {
            btnBgc: "green",
            color: "#fff",
            text: "确认",
            callBack() {
              return false;
            }
          },
          {
            text: "取消",
            callBack() {
              return false;
            }
          }
        ],
        maskOpacity: 0.4,
        winOpacity: 0.8
      },

      config_5: {
        width: "60%",
        type: "ok",
        message: "弹出一个有确认和取消按钮的警告框，点击按钮不关闭",
        btnData: [
          {
            btnBgc: "green",
            color: "#fff",
            text: "确认",
            callBack() {
              return true;
            }
          },
          {
            text: "保存",
            callBack() {
              return true;
            }
          },
          {
            btnBgc: "red",
            color: "blue",
            text: "取消",
            callBack() {
              return true;
            }
          }
        ],
        maskOpacity: 0.4,
        winOpacity: 0.8
      },

      config_6: {
        width: "60%",
        type: "ok",
        message: "弹出一个确认和删除的框，点击确认弹出loading。。。2秒后关闭",
        btnData: [
          {
            btnBgc: "green",
            color: "#fff",
            text: "确认",
            callBack: () => {
              //在callBack中再次创建 dialog 时使用箭头函数
              //避免 this 指向的问题
              //不传递任何参数
              this.$dialog.init({
                delayTime: 2000
              });
              return true;
            }
          },
          {
            btnBgc: "red",
            color: "#fff",
            text: "删除",
            callBack: () => {
              return true;
            }
          }
        ],
        maskOpacity: 0.4,
        winOpacity: 0.8
      },

      config_7: {
        width: "60%",
        type: "ok",
        message: "有动画",
        btnData: [
          {
            btnBgc: "green",
            color: "#fff",
            text: "确认",
            callBack() {
              //alert("点击了确认");
              //不传递任何参数
              //this.$dialog.init();
              return true;
            }
          },
          {
            btnBgc: "red",
            color: "#fff",
            text: "删除",
            callBack() {
              return true;
            }
          }
        ],
        maskOpacity: 0.4,
        winOpacity: 0.8,
        animations: true
      },

      config_8: {
        width: "60%",
        type: "ok",
        message: "延时2秒关闭加回调",
        maskOpacity: 0.4,
        winOpacity: 0.8,
        animations: true,
        delayTime: 2000,
        delayCallback: function() {
          //console.log("延时回调函数");
          alert("延时回调函数");
        }
      },

      config_9: {
        width: "60%",
        type: "ok",
        message: "点击遮罩层可以关闭",
        maskOpacity: 0.4,
        winOpacity: 0.8,
        animations: true,
        maskClose: true
      }
    };
  },
  created() {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
button {
  margin: 15px auto;
  width: 70%;
  display: block;
  background-color: blueviolet;
  color: #fff;
  border-radius: 10px;
  min-height: 30px;
}
</style>
