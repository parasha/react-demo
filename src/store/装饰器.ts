// import { observable, action, computed, autorun, extendObservable } from mobx;


// 注意这里的 `target` 是 `Dog.prototype`
function readonly(target, key, descriptor) {
  console.log('装饰器 work:', target);
  console.log('装饰器 work:', key);
  console.log('装饰器 work:', descriptor);

  descriptor.writable = false
  // return descriptor
}

export class Dog {
  @readonly
  bark(): String {
    return 'wang!wang!'
  }
}

function addFly(canFly) {
  return function (target) {
    target.prototype.canFly = canFly;
    console.log('装饰器执行', target)
    let extra = canFly ? '(技能加成:飞行能力)' : '';
    let method = target.prototype.toString;
    target.prototype.toString = (...args) => {
      return method.apply(target.prototype, args) + extra;
    }
    return target;
  }
}


@addFly(true)
class Man {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }

  public def: Number;
  public atk: Number;
  public hp: Number;

  init(def, atk, hp) {
    this.def = def; // 防御值
    this.atk = atk; // 攻击力
    this.hp = hp; // 血量
  }
}

export const xiaoming = new Man(3, 3, 1)
