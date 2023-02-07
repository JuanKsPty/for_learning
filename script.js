const title = document.getElementById("title")
const btn = document.querySelector("button")
const input1 = document.querySelector("#imp1")
const input2 = document.querySelector("#imp2")
const h2 = document.querySelector("h2")


btn.addEventListener("click",onClick)


function onClick(){
    let number_1 = Number(input1.value) 
    let number_2 = Number(input2.value)
    h2.innerHTML = number_1 + number_2
    input1.value = ""
    input2.value = ""
}

