// let h1 = document.createElement("h1")
// h1.className="test"
// h1.style.backgroundColor = "blue"
// h1.textContent="js ile creat oldu"
// document.body.appendChild(h1)

// for (let i = 1; i<=10; i++){
//     let h1=document.createElement("h1");
//     h1.className="test";
//     h1.style.backgroundColor= "yellow"
//     h1.textContent="create with JS -" + i
//     document.querySelector("body").appendChild(h1)
// }


// for (let i = 1; i<=10; i++){
//     let h1=document.createElement("h1");
//     h1.className= 'test';
//     h1.style.backgroundColor= "yellow"
//     h1.textContent="create with JS -" + i
//     document.querySelector("body").appendChild(h1)
// }

// const allH1Elements = document.querySelectorAll("h1")
// for(const h1 of allH1Elements){
    // h1.remove()
    // document.body.removeChild(h1)
// }

const button = document.getElementById("btn")
button.addEventListener("click", e =>{
    console.log("buttona basdin")
})

// const img = document.querySelector("img")
// // img.style.opacity=0
// img.addEventListener("load", function(e){
//     console.log("sekil yuklendi")
//     // img.style.opacity=1
// });

// img.addEventListener("error", function(e){
// // console.log("resim yuklenmedi")
// e.target.src='./noimg.jpg'
// })

const input =document.getElementById("name")
input.addEventListener("input", e =>{
    console.log("typing..", e.target.value)
})

const select= document.getElementById("select")
select.addEventListener("change", e =>{
    console.log(""
        // [...e.target.selectedOptions].map(el=>el.value)
    )
})