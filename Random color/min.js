let btn = document.getElementById("btn")
let hex = document.getElementById("hex")

let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G"];

btn.addEventListener("click",()=>{
    let hash = "#"
 for (let i=0;i<6;i++){
    hash = hash += arr[getrandomnumber()]
    console.log(hash)
    document.body.style.backgroundColor = hash
    hex.textContent = hash
 }
})

function getrandomnumber(){
   return Math.floor(Math.random()* arr.length)
}
