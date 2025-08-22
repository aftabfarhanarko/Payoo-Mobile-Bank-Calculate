
// Loging Button
document.getElementById('loging-btn')
.addEventListener('click', function (e) {
    e.preventDefault();
    // Declier Compear Varible
    let mobileNumber = 12345678910;
    let pin = 1234;

    //Mobile Number
    let valideMobileNumber = document.getElementById('mobile-number').value;
    let mobileNumberConvart = parseInt(valideMobileNumber);
    
    // Pin Number Convart
    let pinNumber = document.getElementById('pin-number').value;
    
    let pinValueConvart = parseInt(pinNumber);
   
    // If-Else-conditions Chack
    if(mobileNumberConvart === mobileNumber 
      && pinValueConvart === pin ){
      window.location.href = "./homepage.html";
    }else{
      alert('Invalid Password');
    }
    

    

  })