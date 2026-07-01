//1

let num =[];

for (let i=1; i <=20; i ++){
    num.push(i)
}
console.log(i)

//2

let arr=[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i=1; i <=20; i ++){
    arr.push(i)
}
arr.push("hello word")
arr.pop()

console.log(arr)

//3
let arr =[1,2,3]
arr.unshift("helloo")
arr.push("pythn")
arr.shift()

console.log(arr);


//4

let num=[]

for (let i=1; i <=20; i ++){
    if(i%2 ===0){
    num.push(i)
    }
}
console.log(num.slice(2,7))

//5

let arr=["hello","world","js","html","css"];

arr.push("python")

console.log(arr.indexOf("js"))
console.log(arr.includes("js"))


//6
// 6) შექმენი სეტი სადაც გექნება 3 ელემენტი შემდგომ დაამატე სეტში "Hello" 
//  ამოშალე რაიმე ელემენტი , შეამოწმე არის თუ არა "js" სეტში და ბოლოს გაზომე სულ რამდენი ელმენეტია სეტში.

let set=new Set ([1,2,3]);

set.add("hello")
set.delete(3)

console.log(set.has("js"));
console.log(set.size);
