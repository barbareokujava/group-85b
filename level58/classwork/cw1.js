//1
function check(num) {
    if (num % 2 === 0) {
        return "luwi";
    } else {
        return "kenti";
    }
}

console.log(check(67));

//2
function shemowmeba(num) {
    if (num > 0) {
    return num **2
    } else if (num <0) {
        return num **3;
    } else if (num ==0) {
        return 0;
    }
}

console.log(shemowmeba(6));
console.log(shemowmeba(-8));
console.log(shemowmeba(0));

//3
function max(arr) {
  arr.sort(function(a, b) {
    return b-a;
  });

  return arr[0];
}

console.log(maxNum([1,2,10,-20,30,100,5]));