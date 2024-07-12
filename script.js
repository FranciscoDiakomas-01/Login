let entrarBTN = document.querySelector("#logar")
let Emailinput = document.querySelector("#email")
let PassWordinput = document.querySelector("#senha")
let criarBTN = document.querySelector("#criar")
let emailvalidator = document.querySelector("#emailValidator")
let senhaValidator = document.querySelector("#passwordvalidator")
let spinner = document.querySelector(".spinner")


Emailinput.addEventListener("input",(e)=>{
    emailvalidator.style.display = "none"
                
})
PassWordinput.addEventListener("input",(e)=>{
    senhaValidator.style.display = "none"    
})



entrarBTN.addEventListener('click',()=>{
    if(!Emailinput.value || !String(Emailinput.value).includes("@") || !String(Emailinput.value).includes(".com")){
        emailvalidator.textContent = "Email Inválido"
        emailvalidator.style.display = "flex"
        return
    }
    if(!PassWordinput.value){
        senhaValidator.textContent = "Senha Vazia"
        senhaValidator.style.display = "flex"
        return
    }

    else{
        localStorage.setItem("userEmail" , Emailinput.value)
        localStorage.setItem("UserPass" , PassWordinput.value)
        spinner.style.display = "flex"
        setTimeout(()=>{
            senhaValidator.style.display = "none"
            Emailinput.value = ""
            PassWordinput.value = ""
            spinner.style.display = "none"
            window.location = "logado.html"
        },2500)
    }
    

})