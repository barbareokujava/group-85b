function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  
  return -1;
}

const numbers = [12, 5, 78, 45, 11, 8, 34];

console.log(linearSearch(numbers, 45));
console.log(linearSearch(numbers, 8));
console.log(linearSearch(numbers, 100));




const arr = [12, 5, 78, 45, 11, 8, 34];
const target = 45;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch(arr, target));