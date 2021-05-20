/**
 * 获取一个随机整数(包含 min,max)
 */
const getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  getRandom,
}
