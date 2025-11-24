function validate(){
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const phone=document.getElementById("phone");
    const pass=document.getElementById("password");

    const nameReg=/^[A-Za-z ]+$/;
    const emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneReg=/^\d{10}$/;
    const passReg=/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    validateField(name,nameReg);
    validateField(email,emailReg);
    validateField(phone,phoneReg);
    validateField(pass,passReg);
}
function validateField(input,regex){
    if(regex.test(input.value)){
        input.style.border="2px solid green";
    }else{
        input.style.border="2px solid red";
    }
}
