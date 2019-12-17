//1、引入一个组件
import Dialog from './Dialog.vue';

const DIALOG = {

  //2、暴露一个install方法，在Vue.use时候会调用
  install(Vue) {

    //在这里注册组件
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('Dialog', Dialog)

    //定义一个 初始化函数
    function Init(config) {

      if (config) {
        //有传参数
        let ConfigProps = config

        const vDialog = Vue.extend({
          render(h) {
            return h('Dialog', {
              props: {
                ConfigProps
              }
            })
          },
        })

        const vm = new vDialog({
          el: document.createElement('div')
        })
        document.body.appendChild(vm.$el)

        //延时多久后关闭
        if (config.delayTime && config.delayTime != 0) {

          let timer_1 = setTimeout(() => {
            //执行回调
            config.delayCallback && config.delayCallback();
            clearTimeout(timer_1)
            document.body.removeChild(vm.$el)
          }, config.delayTime)

        }

      } else {
        //没有传参数 默认样式
        //3、用Vue.extend()构造出一个Vue子类实例
        const vDialog = Vue.extend(Dialog)
        const vm = new vDialog({
          //创建一个新的 div 用来作为 Vue 实例的挂载目标
          //在实例挂载之后，元素可以用 vm.$el 访问。
          el: document.createElement('div')
        })

        //如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译。
        // const vdialog = new vDialog();
        // const vm = vdialog.$mount()

        //4、将实例安装到页面上
        document.body.appendChild(vm.$el)
        // let timer_2 = setTimeout(() => {
        //   clearTimeout(timer_2)
        //   document.body.removeChild(vm.$el)
        // }, 2000)


      }

    }


    //5、暴露组件方法
    // 5.1 直接暴露并用 mixin 混入到每一个 Vue 实例
    // const dialog = {
    //   init() {
    //     vm.init()
    //   }
    // }

    // Vue.mixin({

    //   created() {
    //     // this.$dialog = vm
    //   }
    // })

    // 5.2 在 Vue 原型上直接挂载
    Vue.prototype.$dialog = {
      //暴露 init 方法 用于初始化
      init(config) {
        Init(config);
      },
    }


    //使用说明：
    // 全局引入并注册：在main.js
    // 引用import Dialog from './myPlugin/Dialog/index'
    // 注册Vue.use(Dialog)
    // 调用插件的 api  this.$dialog.init(config)初始化




  }
}
export default DIALOG
