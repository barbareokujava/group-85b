// 1) გაქვთ მოცემული ცვლადი Day რომელიც უდრის რომელიმე ციფრს 1-დან 7-მდე,
//  თუ Day უდრის 1 მაშინ გამოიტანე "ორშაბათი" თუ 2 უდრის მაშინ "სამშაბათი" და გააკეთეთ ასე 1-დან 7-მდე.

let Day = 8;

switch (Day) {
  case 1:
    console.log("orshabati");
    break;
  case 2:
    console.log("samshabati");
    break;
  case 3:
    console.log("otxshabati");
    break;
  case 4:
    console.log("xutshabati");
    break;
  case 5:
    console.log("paraskevi");
    break;
  case 6:
    console.log("shabati");
    break;
  case 7:
    console.log("kvira");
    break;
  default:
    console.log("araswori dge");
}


// 2) გაქვთ მოცემული ცვლადი pizza რომელიც უდრის აქიდან რომელიმეს "pepperoni","margarita","hawaiin" და თუ pizza უდრის pepperoni მაშინ გამოიტანე 
// "მისი ღირებულება არის 20ლ", margarita -ს ღირებულება 18ლ და თუ hawaiin მაშინ მისი ღირებულებაა 22ლ.

let pizza = "burger";

switch (pizza) {
  case "pepperoni":
    console.log("მისი ღირებულება არის 20ლ");
    break;

  case "margarita":
    console.log("margaritaს ღირებულება არის 18ლ");
    break;

  case "hawaiin":
    console.log("hawaiinს ღირებულება არის 22ლ");
    break;

  default:
    console.log("ar gvaq");
}


// 3) გაქვთ მოცემული ცვლადი Level რომელიც უდრის ან 1,2 ან 3 და თუ 
// იგი 1-ს ტოლია მაშინ გამოიტანე "შენ ხარ დამწყები", 2- "შენ ხარ მოყვარული", 3- "შენ ხარ ვეტერანი".


let Level = 4;

switch (Level) {
  case 1:
    console.log("shen xar damwyebi");
    break;

  case 2:
    console.log("shen xar moyvaruli");
    break;

  case 3:
    console.log("shen xar veterani");
    break;

  default:hw1
    console.log("arasworia");
}