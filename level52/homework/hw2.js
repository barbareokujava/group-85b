let username = "admin";
let password = "12345";

if (username --- "admin" && password --- "12345") {
    console.log("მოგესალმებით, მიხარია რომ დაბრუნდით!");
} 
else if (username === "admin" && password !== "12345") {
    console.log("პაროლი არასწორია!");
} 
else {
    console.log("მომხმარებელი ვერ მოიძებნა!");
}