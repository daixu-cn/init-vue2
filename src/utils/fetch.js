import axios from "axios";
import { Message } from "element-ui";
import router from "../router/index";
import  publicData  from "./publicData";
export const Axios = axios.create({
  baseURL: publicData.domain, //要调用的接口前缀，这个会拼接在url的前面
  timeout: 1000 * 30, // 请求超时时间(ms)
  headers: { "Content-Type": "Application/json" }
});
// 添加请求拦截器 => 在发送请求之前配置token、序列化data
Axios.interceptors.request.use(
  config => {
    // const token = window.localStorage.getItem("token");
    // if (token) {
    //   config.headers["token"] = token;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器 => 收到响应回来的接口先做点判断
Axios.interceptors.response.use(
  response => {
    // switch (response.data.result_code) {
    //   // 未登录 传递参数在登录成功后返回当前页面
    //   case 401:
    //     router.replace({
    //       name: "/login",
    //       query: { redirect: router.currentRoute.name }
    //     });
    //     break;
    //   // token过期 传递参数在登录成功后返回当前页面
    //   case 403:
    //     Message.error("登录过期，请重新登录!");
    //     localStorage.removeItem("token");
    //     router.replace({
    //       name: "/login",
    //       query: {
    //         redirect: router.currentRoute.name
    //       }
    //     });
    //     break;
    // }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
