// 1
const prices = [17, 18, 20, 78, 5, 90];
const pasebi = prices.map((price) => 
    "$" + price);

console.log(pasebi);

// 2
const users = ['vip', 'regular', 'regular', 'vip', 'vip'];
const vipp = users.filter(function(user) {
    return user == 'vip';
});
console.log(vipp);


// 3
const paycheck = [25.60, 5.75, 120.00, 60.00];

const jami = paycheck.reduce(function(total,num) {
    return total + num;
});

console.log(jami);