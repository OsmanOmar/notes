Promise.any(p1, p2, ...) as soon as one of the promises in the iterable fulfills, returns a single promise resolving to the value from that promise.

```javascript
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// quick wins
```

scrolling an element into the center of screen
```javascript
let element = document.querySelector('.box');
element.focus({preventScroll: true});
element.scrollIntoView({block: 'center'});
```
