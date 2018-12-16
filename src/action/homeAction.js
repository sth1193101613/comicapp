import jsonp from "../assets/js/jsonp.js";
import { commonParams, options } from "../assets/js/config";

export function homeAction() {
  const url = "https://proxy.comicool.cn/homepage4web"; //首页全部数据
  const data = Object.assign({}, commonParams, {
    device_id: "a061fe306e472f285fa6968c66a4e8d3"
  });
  return jsonp(url, data, options);
}

export function classAction() {
  const url = "https://proxy.comicool.cn/categorylist4h5"; //分类全部数据
  const data = Object.assign({}, commonParams, {
    device_id: "a16776b8e8e0780cbcd9936eb5cccf06",
    _: 1544088902075,
    callback: "jsonp_categorylist"
  });

  return jsonp(url, data, options);
}

export function classContAction(id) {
  const url = "https://proxy.comicool.cn/allcomic4h5"; //分类全部数据
  const data = Object.assign({}, commonParams, {
    comic_id: 0,
    page_size: 10,
    page_direction: 2,
    list_type: "category",
    order_type: "rating",
    req_id: id,
    req_param: 1,
    device_id: "a16776b8e8e0780cbcd9936eb5cccf06",
    _: 1544089568253,
    callback: "jsonp_allcomic"
  });

  return jsonp(url, data, options);
}
export function Detail(id) {
  const url = "https://proxy.comicool.cn/comicdetail4h5"; //分类全部数据
  const data = Object.assign({}, commonParams, {
    comic_id: id,
    device_id: "a165e619a23a732a5f8e98f215939e19",
    _: 1544525329510,
    callback: "jsonp_allcomic"
  });
  return jsonp(url, data, options);
}
