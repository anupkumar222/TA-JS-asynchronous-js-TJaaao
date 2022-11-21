1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
 new Promise((reslove, rejected) => {
    setTimeout(() => {
        reslove('Promise Resolved!')
    }, 1000);
 }).then((value) => console.log(value))
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
 new Promise((reslove, rejected) => {
        rejected('Rejected Promise!')
 }).catch((value) => console.log(value));
```
3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
 new Promise((reslove, rejected) => {
        rejected('Rejected Promise!')
 }).catch((value) => console.log(value))
 .finally(() => {
    console.log(`Promise Settled`);
 })
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

// A D C B
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(`Done`)
        }, time)
    }).then(console.log);
}
wait(1000);
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
function promise() {
    return new Promise((resolve, rejected) => {
        resolve(21)
    }).then(value1 => {return value1 + 10})
    .then(value2 => {return value2 + 100})
    .then(value3 => {
        if(value3 > 100) {
           throw new Error(`Number is greater than 100`);
        }
    }).catch(console.log);
}
promise();
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
new Promise((resolve, reject) => {
    resolve(['A'])
})
    .then((value1) => {
        return value1.concat('B')
    })
    .then((arr) => {
        let obj = {};
        for(let i = 0; i < arr.length; i++) {
            obj[i] = arr[i];
        }
        return obj;
    })
    .then((value) => console.log(value));

```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise((res, rej) => {
    res(1)
})
first.then(value => {
    return `2`
    console.log(value);
})
.then(value => {
    return `3`
    console.log(value);
})
.then(value => {
    return `3`
    console.log(value);
})
.then(value => {
    return `4`
    console.log(value);
})
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first = new Promise((res, rej) => {
    res(1)
})
first.then(value => {
    return `2`
    console.log(value);
})
first.then(value => {
    return `3`
    console.log(value);
})
first.then(value => {
    return `3`
    console.log(value);
})
first.then(value => {
    return `4`
    console.log(value);
})
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

// In problem 8 we are chainig the promises. Every time we use .then with a promise object it takes the return value of the object and use it as its argument. And the returned value of .then is also a promise object which is getting chain with next .then .

While in problem 9 we are calling .then on variable first which is a promise object. But we can not perform chainning using .then .

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
new Promise((resolve, rejected) => {
    resolve(`Jhon`)
})
.then((value) => {
    return  Promise.resolve(`Arya`);
})
.then(value => {
    console.log(value);
    return new Promise((res, rej) => {
         setTimeout(() => {
        res(`Bran`);
    }, 2000);
    })
})
.then(console.log);
```
