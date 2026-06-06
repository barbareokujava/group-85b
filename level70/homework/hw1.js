//1) დაწერე ფუნქცია სადაც გექნება 2 პარამეტრი name და lastname და გამოიტანე იგი ერთად.

 function saxeli_gvari(name,lastname){
    console.log(name + "" + lastname )
 }name_lastname("barbare", "okujava")


// 2) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული მასივი და უნდა დაითვალო მაგ რიცხვების ჯამი

function masivi (numbers){
    let sum=0;
    for (let num of numbers){ 
        sum+=num;
    } return sum;
}console.log(masivi([1,3,5,7,9]));


// 3) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული რაიმე მასივი სადაც დადებითი რიცხვებიც 
//არის და უარყოფითი და შენი მიზანია დაითვალო დადებითის ჯამი და უარყოფითის ჯამი

function dadebiti_uaryopiti(num){

}





//4) დაწერე ფუნქცია სადაც პარამეტრად გექნება რაიმე მასივი და უნდა დითვალო კენტი და ლუწი რიცხვების ჯამი ცალცალკე





//5) დაწერე ფუნქცია სადაც პარამეტრად გექნება მოცემული ხილების მასივი და თუ 
// ხილის ასოების რაოდენობა მეტია 6 მაგ შემთხვევაში გამოიტანე იგი

function xili(fruits){
    for (let fruit of fruits){
        if(fruit.length >=6)
            console.log (fruits);
    }

}xili(["banani","kiwi","ananasi","portoxali","sazamtro"])



// 6) დაწერე ფუნქცია სადაც პარამეტრად გექნება 2 მასივი პირველი სადაც გექნება მარტო ლუწი რიცხვები 
// და მეორე სადაც იქნება უარყოფითი რიცხვები და შენი მიზანია დაითვალო მათი საერთო ჯამი.

function sum_num(negative,even){
    let sum=0;
    for(let i=0; i< negative.length; i++){
        sum+= negative[i]
    }
for(let i=0; i < even.length;i++){
      sum+= even[i]
}
console.log(sum)
}
sum_num ([-1,-2,-4,-5])



//7) ახსენი მთლიანად ფუნქცია თუ რა ნაწილებად იყოფა იგი.
// funqcia asrulebs konkretul davalebas da bevjer shevidzlia gamodzaxeba
// nawilebi
// pirvel rigshi ari function amit iqmneba punqcia da ase vidzaxebt
// shemdeg vwert punqciis saxels romelic logikri unda iyos 
// ro davwert punqciis saxels shemdeg ukve parametrs vwert da am parametrze dayrdnobit xdeba logikus gagrdzeleba
// klaknil brchxilebs vwert imeebis shemdeg
// vwert console.log amas gamoaqvs info
// mere ukve punqciis saxels davwert console.log amis mere da brchxilebshi vuwert raime cvlads/ magalits ase vidzaxebt punqcias
