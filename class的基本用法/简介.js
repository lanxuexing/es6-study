// JavaScript语言中，生成实例对象的传统方法是通过构造函数

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);

console.log('传统写法', p.toString());

// ------------------------------------------

class NewPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var newP = new NewPoint(3, 4);
console.log('class写法', newP.toString());

console.log('类的数据类型', typeof NewPoint);
console.log('类本身的指向', NewPoint === NewPoint.prototype.constructor);

/**
 * class Point {
 *      constructor() {}
 *      toString() {}
 *      toValue() {}
 * }
 * 
 * 等价于
 * 
 * Point.prototype = {
 *      constructor() {},
 *      toString() {},
 *      toValue() {}
 * }
 * 
 * 在类的实例上调用方法，其实就是调用原型上的方法
 * 
 * Object.assign方法可以很方便地一次向类添加多个方法
 */

Object.assign(NewPoint.prototype, {
    toValue() {
         console.log('原型上的新方法 toValue()');
    }
});

Object.getOwnPropertyNames

let p2 = new NewPoint();

p2.toValue();