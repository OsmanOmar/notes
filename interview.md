operator precedence
运算符的右结合性 operator right associativity

let x = y = 0;
等于
let x = (y = 10);
等于
y = 10;
let x = y;

事件处理的3个阶段：
capturing, target, bubbling
by default, event handlers are executed in the bubbling phase (unless you set useCapture: true)

以下这种叫 temporal dead zone

const randomValue = 21;
function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}
getInfo();

Number.isNan(number) // 这个方法只接收 number 类型，它是专门用来认定 NaN
window.isNan(value)  // 认定 value 为 非 number

Object.seal(obj)  // 封存 obj，防止obj被增删属性，属性值是可以修改的。

Object.freeze(obj)  // 冻结 obj, 防止它的属性被增删、属性值被修改，但只是浅层冻结，如果属性值是对象的话，这个对象不受影响。


Function() constructor
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8



static method
let promise = Notification.requestPermission();

instance method
let myNotification = new Notification('This is my notification');
myNotification.close();

如何创建一个定制的 Error
class ValidationError extends Error {

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}

开根号的另一个方法
16 ** 0.5  // 4

Map 只能通过 new 使用。
