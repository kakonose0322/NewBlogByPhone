import axios from "axios";

export function request(baseURL,config) {
  axios.defaults.timeout=30000;
  axios.defaults.baseURL=baseURL
  const instance = axios.create()
  instance.interceptors.request.use(config => {
    // console.log('config value is: ',config)
    return config
  },err => {
    // console.log(err);
  })
  instance.interceptors.response.use(res => {
    // console.log(res);
    // 注意：拦截器一定要写一个返回值，不然无法前端无法接收数据
    return res.data
  },err => {
    // console.log(err);
  })
  return instance(config)
}
