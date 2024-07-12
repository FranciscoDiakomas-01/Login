
let email = localStorage.getItem("userEmail")
let senha = localStorage.getItem("UserPass")
let spanEmail = document.querySelector("#emailUser")
let spanSenha = document.querySelector("#senhalUser")
spanEmail.textContent = email
spanSenha.textContent  = senha

let voltarBTN = document.getElementById("voltar")
voltarBTN.addEventListener("click",()=>{
    window.history.back()
})