export function findComponentsUpward(context: any, componentNames: string[]) {
  let parents = [];
  const parent = context.parent;
  if (parent) {
    if (componentNames.indexOf(parent.type.name) !== -1) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentNames));
  } else {
    return [];
  }
}

//找到名字符合参数数组之一的父组件就立马返回这个
export function findComponentUpward(context: any, componentNames: string[]) {
  const parent = context.parent;
  if (parent) {
    if (componentNames.indexOf(parent.type.name) !== -1) return parent;
    return findComponentUpward(parent, componentNames);
  } else {
    return null;
  }
}
