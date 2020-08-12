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
