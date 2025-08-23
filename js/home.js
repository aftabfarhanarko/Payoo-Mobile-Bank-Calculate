document.getElementById('add-money-btn')
 .addEventListener('click', function (e) {
   e.preventDefault();

    const bankSectite = document.getElementById('bank-sectite').value;
 
     const bankAccount = document.getElementById('bank-account').value;
    
     const addAmount = parseInt(document.getElementById('add-amount').value);

     const pinNumber = parseInt(document.getElementById('pin-number').value);


     const courrentBlance = parseInt(document.getElementById('current-blance').innerText);
     
     const totalCurrentBlance = addAmount + courrentBlance;
     if(bankAccount.length < 11 ){
      alert('Please Enter 11 Diget Bank Number');
      return;
     }

     if(pinNumber !== 1234){
      alert('Please Enter valid Pin Number');
      return;
     }
     document.getElementById('current-blance').innerText = totalCurrentBlance;

     

 })