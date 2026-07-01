//2
const arr=["a","b","c","d"];
for (let i =arr.length; i>=0; i--){
    console.log(arr[i]);
}

//3
const num=[1, 2, 3, 4, 5, 6, 7, 8];
let sum=0

for(let i = 0; i<num.length; i++){
    sum+=num[i]
}
console.log(sum)


//1
const nums=[9, 30, 2, 68, 8, 9, 15, 47, 4.5, 6, 3, 2, 68, 2, 5, 78, 45, 3, 0];
 let numm=[]

for (let i=0;i<nums.length;i++){
    if(numm.push(nums[i]))
        numm.includes(nums[i]);
}

console.log(numm)


//4
const nums = [3, 5, 6, 10, 7, 9, 11, 15];

for (let i = 0;i<nums.length; i++) {
    if (nums[i] % 3 == 0) {
        nums[i] = 3;
    } else if (nums[i] % 5 == 0) {
        nums[i] = 5;
    } else {
        nums[i] = 0;
    }
}

console.log(nums);


//5
const fruits = ["vashli", "mwvane vashli", "vashli", "banani", "marwyvi", "vashli"];

let tvla = [];

for (let i = 0; i < fruits.length; i++) {
    if (tvla[fruits[i]]) {
        tvla[fruits[i]]
    } else 
        tvla[fruits[i]] = 1
    
}
console.log(tvla)

