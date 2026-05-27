let price = Number(prompt("შეიყვანეთ ნივთის ფასი:"));
let discount = Number(prompt("შეიყვანეთ ფასდაკლების პროცენტი:"));

let finalPrice = price - (price * discount / 100);

alert("თქვენი ნივთის ფასი ფასდაკლების შემდეგ არის: " + finalPrice + " ლარი");