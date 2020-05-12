/**
 * @description 根据传入的对象，递归将对象的属性首字母小写
 * @param {Array} data 对象数据
 */
export const initialToLowerCase = data => {
  //递归对象深拷贝
  const RecursiveDeepClone = (origin, target) => {
    //target是否存在如果不存在创建空对象
    let tar = target || {};
    let toStr = Object.prototype.toString;
    let arrType = '[object Array]';

    for (let key in origin) {
      //根据key获取value
      var value = origin[key];
      //创建新key
      var newKey = key.charAt(0).toLowerCase() + key.substr(1);

      //剥离原型链的数据
      if (origin.hasOwnProperty(key)) {
        //判断是否为引用数据类型 对象或数组
        if (typeof value === 'object' && value !== null) {
          if (toStr.call(value) === arrType) {
            tar[newKey] = [];
          } else {
            tar[newKey] = {};
          }
          RecursiveDeepClone(value, tar[newKey]);
        } else {
          tar[newKey] = value;
        }
      }
    }
    return tar;
  };

  //创建新数组
  var newArray = [];
  data.forEach(item => {
    var targetItem = RecursiveDeepClone(item);
    newArray.push(targetItem);
  });

  return newArray;
};
