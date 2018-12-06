import jsonp from "../assets/js/jsonp.js"
import {commonParams,options} from "../assets/js/config"

export  function homeLAction() {
  const url = "https://proxy.comicool.cn/homepage4web";//数据
  const data = Object.assign({},commonParams,{
    device_id: "a065e6198b982ecefbf877c9995effab",
  })

  return jsonp(url,data,options);
}
