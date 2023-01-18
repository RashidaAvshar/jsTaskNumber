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


const word=  "kitab"
console.log(word.indexOf("t"))
console.log(word.indexOf("i"))
console.log(word.indexOf("x"))
console.log(word.search("a"))

const book = "secilmis eserler"
console.log(book.match(/e/g))

console.log(word.includes("ta"))
console.log(word.includes("taa"))
console.log(book.startsWith("s"))
console.log(word.endsWith("d"))
console.log(word.endsWith("b"))


let b= 9
console.log(b.toString())
console.log(b.toExponential())

let a= 7554.54543213468765
console.log(a.toFixed())
console.log(a.toFixed(4))
console.log(a.toFixed(6))

console.log(a.valueOf())
console.log(Number(b.toString()+a.toFixed()))
console.log(Number(b.toString()))
console.log(parseInt("75 54.5454"))
console.log(parseInt("7554.5454"))
console.log(parseFloat("7554.5454"))
console.log(Number.isInteger(a))


// let data = [
// {id: "1", title: "Xeberler", like: "445"},
// {id: "2", title: "Xeberler", like: "4645"},
// {id: "3", title: "Xeberler", like: "4545"},
// ]

let data = ["salam", "sagol", "hello", "bye", "rda"]
console.log(data[1])
console.log(data.toString())
console.log(data.join("-"))
console.log(data.pop())


data.push("68646")
console.log(data )

data.shift()
console.log(data)

data.unshift("546")
console.log(data)

const fruit = ["alma", "armud", "nar", "heyva"]
// const citrus = ["limon", "naringi"]
// console.log(fruit.concat(citrus))


// fruit.splice(1,2, "56", "8")
console.log(fruit)
const citrus = fruit.slice(1,3)
console.log(citrus)


// let i = 0
// while(i<10) {
//     i++;
//     console.log(i)
// }

let d = "Heyva";
let i = 0
do{
    i++
    console.log(d);
} while(i<d.length)
// while (i < d.length){
//     i++;
//     console.log(i);
// }

// let x = [1,2,3,4,5];
// let y = [1,2,3,4];
// function{
//     x.reduce()
// }



