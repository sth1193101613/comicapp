export function findIndexitem(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn);
  }
  let index = -1;
  ary.some(function(item, i, ary) {
    const ret = fn.call(this, item, i, ary);
    if (ret) {
      index = i;
      return ret;
    }
  });
  return index;
}
