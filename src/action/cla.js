import jsonp from "../assets/js/jsonp.js"
import {commonParams,options} from "../assets/js/config"

export  function classList() {
  const url = "https://proxy.comicool.cn/categorylist4h5";//数据
  const data = Object.assign({},commonParams,{
    device_id: "a061fe306e472f285fa6968c66a4e8d3",
  })

  return jsonp(url,data,options);
}
