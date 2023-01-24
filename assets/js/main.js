// let account = Number(prompt("Please, enter the value"));
// console.log(account.toExponential() + 15);

// function sumNums(a,b){
//     return a+b
// }
// sumNums(6,4);
// console.log(sumNums(6,4).toString());

// let a = sumNums(4,6);
// console.log(a.toString());

// console.log(sumNums.toString());


// parseInt("-10");
// parseInt("-10.33");
// parseInt("10");
// parseInt("10.33");
// parseInt("10 20 30");
// parseInt("10 years");
// parseInt("years 10");
// console.log(parseInt("10 20 30"));
// console.log(parseFloat("years 10"));
// console.log(parseFloat("10 years"));

// !=====================================================


// const word=  "kitab"
// console.log(word.indexOf("t"))
// console.log(word.indexOf("i"))
// console.log(word.indexOf("x"))
// console.log(word.search("a"))

// const book = "secilmis eserler"
// console.log(book.match(/e/g))

// console.log(word.includes("ta"))
// console.log(word.includes("taa"))
// console.log(book.startsWith("s"))
// console.log(word.endsWith("d"))
// console.log(word.endsWith("b"))


// let b= 9
// console.log(b.toString())
// console.log(b.toExponential())

// let a= 7554.54543213468765
// console.log(a.toFixed())
// console.log(a.toFixed(4))
// console.log(a.toFixed(6))

// console.log(a.valueOf())
// console.log(Number(b.toString()+a.toFixed()))
// console.log(Number(b.toString()))
// console.log(parseInt("75 54.5454"))
// console.log(parseInt("7554.5454"))
// console.log(parseFloat("7554.5454"))
// console.log(Number.isInteger(a))


// // let data = [
// // {id: "1", title: "Xeberler", like: "445"},
// // {id: "2", title: "Xeberler", like: "4645"},
// // {id: "3", title: "Xeberler", like: "4545"},
// // ]

// let data = ["salam", "sagol", "hello", "bye", "rda"]
// console.log(data[1])
// console.log(data.toString())
// console.log(data.join("-"))
// console.log(data.pop())


// data.push("68646")
// console.log(data )

// data.shift()
// console.log(data)

// data.unshift("546")
// console.log(data)

// const fruit = ["alma", "armud", "nar", "heyva"]
// const citrus = ["limon", "naringi"]
// console.log(fruit.concat(citrus))


// fruit.splice(1,2, "56", "8")
// console.log(fruit)
// const citrus = fruit.slice(1,3)
// console.log(citrus)


// let i = 0
// while(i<10) {
//     i++;
//     console.log(i)
// }

// let d = "Heyva";
// let i = 0
// do{
//     i++
//     console.log(d);
// } while(i<d.length)
// while (i < d.length){
//     i++;
//     console.log(i);
// }

// let x = [1,2,3,4,5];
// let y = [1,2,3,4];
// function{
//     x.reduce()
// }

// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.trunc(4.2));
// console.log(Math.sign(0));
// console.log(Math.pow(2, 9));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-4.7));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// console.log(Math.round(Math.random() * 1000000));

// console.log(Boolean(10 > 9));

// let x = -5;
// console.log(Boolean(x));

// let x;

// console.log(x);
// console.log(Boolean(x));

// let x = null;
// console.log(x);
// console.log(Boolean(x));

// let x = 10 / "Hallo";

// console.log(Boolean(x));


// let a= 4;
// let b = 6;
// let z = a=b;
// console.log(z);


// let x = 16 + "Volvo";
// // console.log(x)
// let x =5555555555555555555555555555555555n
// console.log(typeof x)
// let x = 5
// let y = 11
// console.log(x**=y)

// const first=(x, y)=> {
//         console.log(x===y)
// }
// first(10,7)


// const second= (a,b) => {
    
//     console.log(a>b)
// }

// second(4,5)

// let math = prompt("math")
// if(first&&second){alert("beraberdir")
// }else{
//     alert("beraber deyil")
// }

// let isRaining= true
// isRaining
// ? console.log("zontik gotur")
// : console.log("ehtiyac yoxdur")
// isRaining=false

// ? console.log("zontik gotur")
// : console.log("ehtiyac yoxdur")
// isRaining=true


// let a = 5
// let b = 8
// console.log((a>5 && a<8) && b>= 7)

// let number = prompt("enter number", "Number goes here")
// let result = number * 2
// console.log(result)

// let isDelete = confirm("Silmek isteyirsen mi")
// console.log(isDelete ? "Silindi": "silinmesin")

// const now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth()+1)
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())
// console.log(now.getTime())

// let a = 18
// let b = "18"
// if (a===b){
//     console.log("true")
// }else{
//     console.log("false")
// }

// let isSnowing = false
// if (isSnowing){
//     // console.log("${isSnowing} true")
//     console.log("yagir")
// }else
// {
//     console.log("yagmir")
// }

// let result = prompt("2+5=?");
// if (result==7){
//     console.log("true")
// }else{
//     console.log("false true answer 7")
// }

// let conditionTest = 15
// if(conditionTest!=15){
//     console.log("beli beraber deyil")
// }else if(conditionTest==="15"){
//     console.log("beli 15e beraberdir")
// }else if(conditionTest>15){
//     console.log("yanlisdir,beraberdir")
// }else if(conditionTest<=12){
//     console.log("xeyr yanlis cavabdir")
// }
// else{
// console.log("yoxlama bitdi")
// }

// let result = prompt("5+7=?", "5+7=");
// switch(result){
//     case "1":
//         console.log("true - switch")
//         break
//     case "12":
//         console.log("true - 12")
//         break
//     default:
//         console.log("false- switch")
// }

// !===========yeniden bax buna % modulas
// for (let i=0; i<100; i++){
//     if(i%2==1){
//         console.log(i)
//     }
//     console.log()
// }

// !=====================================

//  let credit = Number(prompt("Meblegi daxil edin"));
//  let month = Number(prompt("Ay daxil edin"));
// //  console.log(credit,month)

// if(!isNaN(credit)&& !isNaN(month)){
//     let partfSum = 0
//     for(let i = 0; i < month; i++){
//     let monthlyPayment = parseInt(credit / month);
//     if(i + 1 == month){
// console.log(
//     i+1+"-"+"Sonuncu ayin odenisi-"+(credit-partfSum)
// )
//     }else{
//         console.log(i+1+"-ci ayin odenisi-"+ monthlyPayment)
//         partfSum+=monthlyPayment;
//     }
// }
// }else{
//     alert("")

// }

// !=====================> task<====================
// let a = Number(prompt("hipetonuz"));
// let b = Number(prompt("katet", "1-ci katet"));
// let c = Number(prompt("katet", "2-ci katet"));
// console.log(a,b,c)
// if(!isNaN(a)&& !isNaN(b)&& !isNaN(c)){
//     let perimetrium = a+b+c
//     console.log(perimetrium)
//     if(!isNaN(a)&& !isNaN(b)&& !isNaN(c)){
//         let pifagor = 2
//         let a = b**pifagor +c** pifagor
//         console.log(a**pifagor)
// }
// }
// else{
//     console.log("")
// }
// !=================================================


// !=======================>task<=====================
// let shopping = Number(prompt("Mehsulun qiymeti"))
// let discount = Number(prompt("Mehsulun qiymeti"))

// if(!isNaN(a)&& !isNaN(b)){


// }else{
//     console.log("")
// }


// let hello = document.querySelectorAll("p")
// for (let i = 0; i<hello.length; i++){
//     console.log(hello)    
// }
//  console.log(hello.forEach=document.querySelectorAll('.Hello'))

// const title = document.querySelector("title").innerText = "Register"
// console.log(title)
// let username = document.querySelector("#username").value;
// console.log(username)

const data = [
    {name: "Farid"},
    {name: "Murad"},
    {name: "Ceyhun"},
    {name: "Rustem"},
];
let userList=document.querySelector("#user-list");
data.map((item)=> {
    userList.innerHTML+=`<li>${item.name}</li>`;
});




