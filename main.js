let height = document.getElementById("h")
let width = document.getElementById("w")
let color = document.getElementById("co")
let border = document.getElementById("bo")
let trangle = document.getElementById("trang")
// let reset = document.getElementById("reset")
// console.log(height);

let change = document.getElementById("change")
change.addEventListener("click", ()=>{
    trangle.style.cssText = `width: ${width.value}; height: ${height.value}; background-color: ${color.value}; border-radius:${border.value} ;`
})


// element.classList.toggle

let reset = document.getElementById("reset")
reset.addEventListener("click", ()=>{
    trangle.style.cssText = `width: 30vw; height: 40vh; background-color: rgb(96, 96, 216); border-radius:0px ;`

})

// let reset1 = trangle.classList.toggle("tang")