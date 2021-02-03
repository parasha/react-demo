// import { observable, action, computed, autorun, extendObservable } from mobx;


// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {
  console.log('装饰器 work:', target);
  console.log('装饰器 work:', key);
  console.log('装饰器 work:', descriptor);

  descriptor.writable = false
  // return descriptor
}

class Dog {
  @readonly
  bark (): String {
    return 'wang!wang!'
  }
}

export default Dog;
