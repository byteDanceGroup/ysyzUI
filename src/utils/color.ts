//验证是否为有效的css颜色，无法识别透明色！
//根据输入返回种类，若不符合要求则返回0
export const colorValidator = (value: string) => {
  value = value.toLowerCase();
  //1——匹配rgb()
  let pattern1 =
    /^rgb\((1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),(1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$/;
  //2——匹配3位的16进制 #xxx
  let pattern2 = /^#([a-fA-F0-9]{3})$/;
  //3——匹配6位的16进制 #xxxxxx
  let pattern3 = /^#([a-fA-F0-9]{6})$/;

  if (pattern1.test(value)) return 1;
  else if (pattern2.test(value)) return 2;
  else if (pattern3.test(value)) return 3;
  else return 0;
};

//未暴露，将颜色格式转化为3个Number
const switchColor = (value: string) => {
  let tmp: Array<string> = [];
  let res: Array<number> = [];
  switch (colorValidator(value)) {
    case 0:
      return [];
    case 1:
      //捕获三个数字
      tmp = /(\d+),(\d+),(\d+)/.exec(value).slice(1, 4);
      //直接写map(parseInt)会出现NAN
      res = tmp.map((item, index) => parseInt(item));
      break;
    case 2:
      tmp = /(\w)(\w)(\w)/.exec(value)?.slice(1, 4);
      res[0] = parseInt("0x" + tmp[0] + tmp[0]);
      res[1] = parseInt("0x" + tmp[1] + tmp[1]);
      res[2] = parseInt("0x" + tmp[2] + tmp[2]);
      //   res = tmp.map((item, index) => parseInt('0x'+item+item));
      break;
    case 3:
      tmp = /(\w\w)(\w\w)(\w\w)/.exec(value)?.slice(1, 4);
      res[0] = parseInt("0x" + tmp[0]);
      res[1] = parseInt("0x" + tmp[1]);
      //   res = tmp.map((item, index) => parseInt('0x'+item+item));
      res[2] = parseInt("0x" + tmp[2]);
      break;
  }
  return res;
};

//颜色变浅
export const lighten = (value: string, num: number) => {
  if (num < 0 || num > 1) {
    console.warn("light()第二个参数非法，请限制数字在0-1内");
    return;
  }
  let nums: Array<number> = switchColor(value);
  nums = nums.map((item) => {
    item += num * (255 - item);
    return Math.floor(item);
  });
  return `rgb(${nums.join(",")})`;
};

//颜色变深
export const darken = (value: string, amount: number) => {
  if (amount < 0 || amount > 1) {
    console.warn("light()第二个参数非法，请限制数字在0-1内");
    return;
  }
  let nums: Array<number> = switchColor(value);
  if (!nums.length) return null;
  nums = nums.map((item) => {
    item -= amount * item;
    return Math.floor(item);
  });
  return `rgb(${nums.join(",")})`;
};
