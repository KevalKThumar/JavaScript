# Que:1 you are given an array and you should be display inner properties of that??

```javascript
Array.prototype.addOwnProperties = "Keval Thumar";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const a in array) {
  console.log(a);
  // In this addOwnProperties is not a part of arrays own propertis it is add here it is one in other case it would be any thing so how to copup with it some kind of condition is there for to solve this problame if condition
}

for (const a in array) {
  if (array.hasOwnProperty(a)) {
    console.log(a);
  }
}
```

# Que:-2 Implement a custom forEach in javascript?

### There are main two way to implement this in js

## 1) using function // starting of js

### 2) using Prototype

#### i) fresher level code implementation

#### ii) SD2,SD3 level code implementation

# Ans 1

```javaScript
const customForEachOne = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

```

# Ans 2(i)

```javaScript
Array.prototype.customForEachTwo = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            callBack(this[i], i, this)
        }
    }
}

arr.customForEachTwo((a, i, arr) => {
    console.log(a)
    console.log(i)
})

```

# Ans 2(ii)

```javaScript
const forEachFunction = (callBack, thisContext) => {
    if (typeof (callBack) !== "function") {
        throw `CallBack Not Found!`
    }
    let length = this.length
    for (let i = 0; i < length; i++) {
        if (this.hasOwnProperty(i)) {
            callBack.call(thisContext, this[i], i, length, this)
        }
    }
}

Array.prototype.customForEachThree = forEachFunction()

arr.customForEachThree((a, i, arr, length) => {
    console.log(a)
    console.log(i)

}, this)

```
