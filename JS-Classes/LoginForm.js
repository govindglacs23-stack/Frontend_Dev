function loginValidate(){
    const user=document.getElementById("username");
    const pass=document.getElementById("password");

    const userReg=/^.{5,}$/;
    const passReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    check(user,userReg);
    check(pass,passReg);

    if(userReg.test(user.value) && passReg.test(pass.value)){
        document.getElementById("msg").innerText="Login Successful";
    }
}
function check(input,regex){
    input.style.border=regex.test(input.value)?"2px solid green":"2px solid red";
}
