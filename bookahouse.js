document.getElementById('booking-form').addEventListener('submit', function(event){
    event.preventDefault();

    const name=document.getElementById('customer-name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const moveInDate=document.getElementById('move-in-date').value;
    const requirements=document.getElementById('requirements').value;

    console.log("Name: ", name);
    console.log("Email:",email);
    console.log("Phone",phone);
    console.log("Move-in Date: ", moveInDate);
    console.log("Requirements: ", requirements);

    alert("Your booking has been sent successfully!")

    this.reset();

});