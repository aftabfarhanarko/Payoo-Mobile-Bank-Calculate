document.getElementById('add-money-btn')
 .addEventListener('click', function (e) {
   e.preventDefault();

    const bankSectite = document.getElementById('bank-sectite').value;
 
     const bankAccount = parseInt(document.getElementById('bank-account').value);

     const addAmount = parseInt(document.getElementById('add-amount').value);

     const pinNumber = parseInt(document.getElementById('pin-number').value);

     const courrentBlance = parseInt(document.getElementById('current-blance').innerText);
     
     const totalCurrentBlance = addAmount + courrentBlance;

     document.getElementById('current-blance').innerText = totalCurrentBlance;

     

 })