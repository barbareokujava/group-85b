//1
const fruits =['vashli', 'banani', 'atami'];

for(const fruit of fruits){
    console.log(fruit);
}

//2
let i = 10;
while (i>=1){
    console.log(i);
    i--;
}
//3
const numbers = [2, 4, 6, 8];
let i = 0;
let sum = 0;

do {
    sum += numbers[i];
    i++;
} while (i < numbers.length);

console.log(sum);
