const promise = new Promise((resolve) => {
    console.log('in promise');
    setTimeout(() => {
        console.log('in setTimeout');
        resolve();
    }, 0);
});

promise.then(() => {
    console.log('in then');
});