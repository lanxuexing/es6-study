// this指向
class Logger {
    constructor() {
        // 1. bind绑定
        this.printName = this.printName.bind(this);

        // 2. 箭头函数
        // this.printName = () => this;
    }

    static classMethod() {
        return 'Hello, I am Static Method!'
    }

    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;

/**
 * 这里直接执行方法会报错：TypeError: Cannot read property 'print' of undefined
 * printName方法中的this，默认指向Logger类的实例。当方法提取出来之后，由于严格模式，this会指向该方法运行时所在的环境
 */
printName();

/**
 * 类相当于实例的原型，所有在类中定于的方法，都会被实例继承。
 * 但是如果声明类static关键字，则不会被继承，而是直接通过类型.来调用，即：静态方法
 * 静态方法可以和非静态方法重名
 */
const result = Logger.classMethod();
console.log(result);


/**
 * 解决办法：
 * 1. bind绑定
 * 2. 箭头函数
 * 3. Proxy
 */


