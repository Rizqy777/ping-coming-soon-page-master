const errorSpan = document.querySelector(".error_span");
const inputEmail = document.getElementById("input_email");
const submit = document.querySelector(".submit");
const emailAcount = document.querySelector(".email_acount");
const containerMain = document.querySelector(".container_main");
const constainerHidden = document.querySelector(".container_hidden")

const errorSpan2 = document.querySelector(".error_span_2")

submit.addEventListener("click",  () =>{

    if (innerWidth <= 700){
    if (!inputEmail.value.includes("gmail.com") && !inputEmail.value.includes("hotmail.com")){
        errorSpan.style.display = "block"
        inputEmail.classList.toggle("active")
        
    } else {
containerMain.style.display = "none"
constainerHidden.style.display = "block"
emailAcount.textContent = inputEmail.value

    }}
    else{
        if (!inputEmail.value.includes("gmail.com") && !inputEmail.value.includes("hotmail.com")){
            errorSpan2.style.display = "block"
            inputEmail.classList.toggle("active")
        } else {
    containerMain.style.display = "none"
    constainerHidden.style.display = "block"
    emailAcount.textContent = inputEmail.value
        }}
    }
)
