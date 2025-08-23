// Add Money Section
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let validPine = 1234;
    const bankSectite = document.getElementById("bank-sectite").value;

    const bankAccount = document.getElementById("bank-account").value;

    const addAmount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const courrentBlance = parseInt(
      document.getElementById("current-blance").innerText
    );

    const totalCurrentBlance = addAmount + courrentBlance;
    if (bankAccount.length < 11) {
      alert("Please Enter 11 Diget Bank Number");
      return;
    }

    if (pinNumber !== validPine) {
      alert("Please Enter valid Pin Number");
      return;
    }
    document.getElementById("current-blance").innerText = totalCurrentBlance;
  });

// CasOut Sections
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let pinesns = 1234;
    const agentNumber = document.getElementById("agent-account").value;
    const withdrawAmoumt = parseInt(
      document.getElementById("withdraw-amount").value
    );

    const withdrawPinNumber = parseInt(
      document.getElementById("withdraw-pin").value
    );

    let correntBleance = parseInt(
      document.getElementById("current-blance").innerText
    );

    let withdrawTheAmmount = correntBleance - withdrawAmoumt;
    if (agentNumber.length < 11 || agentNumber.length > 11) {
      alert("Please Enter 11 Diget Bank Number");
      return;
    }
    if (withdrawPinNumber !== pinesns) {
      alert("Please Enter a Valid Pin");
      return;
    }
    document.getElementById("current-blance").innerText = withdrawTheAmmount;
  });

// Send-money-btn
document
  .getElementById("Send-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let userpins = 1234;

    let userInputValue = document.getElementById("user-account").value;

    let sendMonyAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    let transferPin = parseInt(document.getElementById("transfer-pin").value);

    let blanceValues = parseInt(
      document.getElementById("current-blance").innerText
    );

    let totalTransferMonet = blanceValues - sendMonyAmount;

    if (userInputValue.length < 11) {
      alert("Please Enter 11 Diget User Number");
      return;
    }

    if (transferPin !== userpins) {
      alert("Please Enter valid Transfer  Pin ");
      return;
    }
    document.getElementById("current-blance").innerText = totalTransferMonet;
  });

// Get-Coupone-btn
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let couponValue = 1234567890;
    let couponBunas = 5000;

    let blanceCoupon = parseInt(
      document.getElementById("current-blance").innerText
    );

    let cuarentinput = parseInt(document.getElementById("bonus-coupon").value);

    let addesa = blanceCoupon + couponBunas;
    if (cuarentinput === couponValue) {
      document.getElementById("current-blance").innerText = addesa;
    } else {
      alert("Your Coupon Number Not Valid");
    }

    // console.log(cuarentinput,blanceCoupon);
  });

// Pay Bill Event
document
  .getElementById("pay-biles-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let pinesaBillPays = 1234;
    let billAccountNumber = document.getElementById("bills-account").value;

    let payBillesa = parseInt(document.getElementById("pays-amount").value);

    let billPinNumber = parseInt(document.getElementById("bill-pay-pin").value);

    if (billAccountNumber.length < 11 || billAccountNumber.length > 11) {
      
      alert("Please Enter 11 Diget Account Number");
      return;
    }

    if (billPinNumber !== pinesaBillPays) {
      alert("Please Enter valid Pay Pin ");
      return;
    }
    let CurrentsValues = parseInt(
      document.getElementById("current-blance").innerText
    );

    let totalPayBill = CurrentsValues - payBillesa;
    document.getElementById("current-blance").innerText = totalPayBill;
    // console.log(totalPayBill);
  });

//  Taggole Menu--1
document
  .getElementById("add-mony-prent")
  .addEventListener("click", function () {
    document.getElementById("add-mony-prent").style.borderColor = "#0874F2";
    
    document.getElementById("casOutsection").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
            document.getElementById("Transactions").style.display = "none";

    document.getElementById("monySection").style.display = "block";
  });

//  Taggole Menu--2
document
  .getElementById("cas-out-prent")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("monySection").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
        document.getElementById("Transactions").style.display = "none";

    document.getElementById("casOutsection").style.display = "block";
  });

//  Taggole Menu--3
document.getElementById("transr-money").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("monySection").style.display = "none";
  document.getElementById("casOutsection").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
      document.getElementById("Transactions").style.display = "none";

  document.getElementById("transfer-money").style.display = "block";
});

//  Taggole Menu--4
document.getElementById("get-bonus").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("monySection").style.display = "none";
  document.getElementById("casOutsection").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
      document.getElementById("Transactions").style.display = "none";

  document.getElementById("get-bonus-section").style.display = "block";
});

//  Taggole Menu--5
document.getElementById("pay-bill").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("monySection").style.display = "none";
  document.getElementById("casOutsection").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("Transactions").style.display = "none";

  document.getElementById("payBillSection").style.display = "block";
});

//  Taggole Menu--6
document.getElementById("transactions").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("monySection").style.display = "none";
  document.getElementById("casOutsection").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus-section").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
  document.getElementById("Transactions").style.display = "block";
});
