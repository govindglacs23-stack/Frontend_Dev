function bookTicket(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const seats=document.getElementById("seats").value;

    const nameReg=/^[A-Za-z ]+$/;
    const emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatReg=/^(10|[1-9])$/;

    if(nameReg.test(name) && emailReg.test(email) && seatReg.test(seats)){
        const booking={name,email,seats};
        document.getElementById("output").innerText=JSON.stringify(booking);
    }
}
