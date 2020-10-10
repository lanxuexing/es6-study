class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        console.log('Point Methods: toString', this.x, this.y);
    }
}

Point.prototype.p = 20;

class ColorPoint extends Point {
    constructor(x, y, color) {
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(x, y);
        this.color = color;
    }

    print() {
        console.log(super.p);
    }
}

let cp = new ColorPoint();
cp.print();

/**
 * 如果子类没有定义constructor方法，这个方法会默认被添加
 * 
 * class ColorPoint extends Point {
 * }
 * 
 * 等同于
 * class ColorPoint extends Point {
 *  constructor(...args) {
 *      super(...args);
 *  }
 * }
 */


 // Object.getPrototypeOf方法可以用来从子类上获取父类，即：可以使用这个方法来判断一个类是否继承了另一个类
const isParent = Object.getPrototypeOf(ColorPoint) === Point;

console.log(isParent);


/**
 * Es6中规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向的是当前的子类实例。
 */

class A {
    constructor() {
        this.x = 1;
    }

    print() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
    }

    m() {
        super.print();
    }
}

let b = new B();
b.m();