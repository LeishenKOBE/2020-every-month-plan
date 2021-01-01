const list = [1, 23, 46, 12, 132];

const newArr = [];
list.forEach(item => {
    setTimeout(() => {
        newArr.push(item)
    }, item * 100);
})
