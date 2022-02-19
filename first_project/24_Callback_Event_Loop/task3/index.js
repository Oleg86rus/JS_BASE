const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success');
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

getData(() => {
    console.log('user received');

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 500);

        console.log('in promise');
        setTimeout(() => {
            console.log('last set timeout');
        }, 400);

    });

    promise.then((result) => {
        console.log(result);
    })
});

console.log('End');

/*
WEB API

console.log('End')
.then((user) => {
    console.log('Success');
    callback(user);
})
 getData
console.log('user received');
promise
console.log('in promise');
setTimeout(() => {
    console.log('last set timeout');
}, 400);
promise.then((result) => {
    console.log(result);
})


1. End
2. Success
3. user received
4. in promise
5. last set timeout
6. promise resolved

 */