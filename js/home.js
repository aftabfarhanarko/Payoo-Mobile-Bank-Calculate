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

//  Taggole Menu
document
  .getElementById("add-mony-prent")
  .addEventListener("click", function () {
    document.getElementById("casOutsection").style.display = "none";
    document.getElementById("monySection").style.display = "block";
  });
document.getElementById("cas-out-prent").addEventListener("click", function () {
  document.getElementById("monySection").style.display = "none";
  document.getElementById("casOutsection").style.display = "block";
});
