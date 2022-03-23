
const div = document.createElement('div')




let arr = [], set = new Set(), n = 100000;
for (let i = 0; i < n; i++) {
    arr.push(i);
    set.add(i);
}

const addendum = 'добавление  '
let time = performance.now();
arr.push(n);
time = performance.now() - time;
div.innerHTML = `${addendum} - ${time} mc<br>`
console.log(addendum + time)
let setTime = performance.now();
set.add(n);
setTime = performance.now() - setTime;
div.innerHTML += `${addendum} - ${setTime} mc<br>`
console.log(addendum + setTime)


const del = 'удаление  '
time = performance.now();
delete arr[n];
time = performance.now() - time;
div.innerHTML += `${del} - ${time} mc<br>`
console.log(del + time)
setTime = performance.now();
set.delete(n);
setTime = performance.now() - setTime;
div.innerHTML += `${del} - ${setTime} mc<br>`
console.log(del + setTime)

const search = 'поиск '
let result
time = performance.now();
result = arr.indexOf[123123];
time = performance.now() - time;
div.innerHTML += `${search} - ${time} mc<br>`
console.log(search + time)
setTime = performance.now();
result = set.has(123123);
setTime = performance.now() - setTime;
div.innerHTML += `${search} - ${setTime} mc<br>`
console.log(search + setTime)

document.body.append(div)

