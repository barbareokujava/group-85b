let arr = [1, 3, 5, 7];
let count = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
        count++;
    }
}

console.log(count);