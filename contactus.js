document.getElementById("contactForm").addEventListener("submit",function (event){

    event.preventDefault();

    const name=document.getElementById("name").ariaValueMax;
    const email=document.getElementById("email").ariaValueMax;
    const message=document.getElementById("message").ariaValueMax;


    const formMessage=document.getElementById("formMessage");
    formMessage.textContent=`Thank you, ${name} for sending the message. Be serious always ';
    formMessage.style.color='green';


    document.getElementById("contactForm").reset();


} ) ;