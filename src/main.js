import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//引入element-ui组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// axios配置
import { Axios } from "@/utils/fetch";
Vue.prototype.$http = Axios;

//引入moment时间库
import moment from "moment";
Vue.prototype.$moment = moment;

//全局混入
import util from "@/utils/util";
import publicData from "@/utils/publicData";
Vue.mixin({
  data() {
    return {
      ...publicData,
    };
  },
  methods: {
    ...util,
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
