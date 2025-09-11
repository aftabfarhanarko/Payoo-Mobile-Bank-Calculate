let transactionsData = [];
// /resujibale Taggeole

// Sot Id Value Functions call
function callIdValue(id) {
  const my = document.getElementById(id).value;
  return my;
}

// Short Money Prase Intjer
function idPraseInt(mony) {
  const copy = parseInt(document.getElementById(mony).value);
  return copy;
}

// Short of Inner Text
function innerTextid(inner) {
  const courrentBlance = parseInt(document.getElementById(inner).innerText);
  return courrentBlance;
}

// Add Money Section
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let validPine = 1234;
    const bankSectite = callIdValue("bank-sectite");

    const bankAccount = callIdValue("bank-account");

    const addAmount = idPraseInt("add-amount");

    if (addAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    const pinNumber = idPraseInt("pin-number");

    const courrentBlance = innerTextid("current-blance");

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// CasOut Sections
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let pinesns = 1234;
    const agentNumber = callIdValue("agent-account");
    const withdrawAmoumt = idPraseInt("withdraw-amount");

    const withdrawPinNumber = idPraseInt("withdraw-pin");

    let correntBleance = innerTextid("current-blance");
    let withdrawTheAmmount = correntBleance - withdrawAmoumt;
    if (withdrawAmoumt <= 0 || withdrawAmoumt > correntBleance) {
      alert("Invalid Blance");
      return;
    }
    if (agentNumber.length < 11 || agentNumber.length > 11) {
      alert("Please Enter 11 Diget Bank Number");
      return;
    }
    if (withdrawPinNumber !== pinesns) {
      alert("Please Enter a Valid Pin");
      return;
    }
    document.getElementById("current-blance").innerText = withdrawTheAmmount;
    const data = {
      name: "Case Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// Send-money-btn
document
  .getElementById("Send-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let userpins = 1234;

    let userInputValue = callIdValue("user-account");

    let sendMonyAmount = idPraseInt("transfer-amount");
    let transferPin = idPraseInt("transfer-pin");

    let blanceValues = innerTextid("current-blance");

    if (sendMonyAmount > blanceValues) {
      alert("Invalid Blance");
      return;
    }
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
    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// Get-Coupone-btn
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let couponValue = 1234567890;
    let couponBunas = 5000;

    let blanceCoupon = innerTextid("current-blance");

    let cuarentinput = idPraseInt("bonus-coupon");

    let addesa = blanceCoupon + couponBunas;
    if (cuarentinput === couponValue) {
      document.getElementById("current-blance").innerText = addesa;
    } else {
      alert("Your Coupon Number Not Valid");
    }
    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// Pay Bill Event
document
  .getElementById("pay-biles-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let pinesaBillPays = 1234;
    let billAccountNumber = callIdValue("bills-account");

    let payBillesa = idPraseInt("pays-amount");

    let billPinNumber = idPraseInt("bill-pay-pin");

    if (billAccountNumber.length < 11 || billAccountNumber.length > 11) {
      alert("Please Enter 11 Diget Account Number");
      return;
    }

    if (billPinNumber !== pinesaBillPays) {
      alert("Please Enter valid Pay Pin ");
      return;
    }
    let currentsValues = innerTextid("current-blance");
    if (billAccountNumber > currentsValues) {
      alert("Invalid Blance");
      return;
    }

    let totalPayBill = currentsValues - payBillesa;
    document.getElementById("current-blance").innerText = totalPayBill;

    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// Transactions-Btn
document
  .getElementById("pay-biles-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    transactionsData.push(data);
  });

document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    const pushHTML = document.getElementById("transactionDIvAdd3");
    pushHTML.innerText = "";
    for (let data of transactionsData) {
      const creatDiv = document.createElement("div");
      creatDiv.innerHTML = `                
                <div class="  rounded-2xl p-1">
                    <div
                        class="mb-4 flex justify-between items-center border-1 border-gray-300 p-3 bg-[#FFFFFF] rounded-2xl shadow-black">
                        <div class="flex gap-4 items-center">
                            <div class=" p-3 rounded-full bg-[#0808080d]">
                                <img src="./assets/wallet1.png" alt="">
                            </div>
                            <div>
                                <h2 class="text-[18px] font-semibold">${data.name}</h2>
                                <p class="text-[14px] text-gray-400">${data.date}</p>
                            </div>
                        </div>
                        <div class="text-2xl">
                            <i class="ri-more-2-fill"></i>
                        </div>
                    </div>

                </div>

      `;
      pushHTML.appendChild(creatDiv);
    }
  });

// reyoujeabol functions
function shorts(id) {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// 2 reujibole Functions
function myUse(colorcode) {
  const btnForm = document.getElementsByClassName("form-btns");
  for (let btnsa of btnForm) {
    btnsa.classList.remove("border-[#0874f2]");
    btnsa.classList.remove("border-2");
    btnsa.classList.remove("bg-[#0874f20d]");
    btnsa.classList.remove("text-blue-600");
    btnsa.style.color = "";

    btnsa.classList.add("border-gray-300");
  }
  document.getElementById(colorcode).classList.remove("border-gray-300");

  document
    .getElementById(colorcode)
    .classList.add(
      "border-[#0874f2]",
      "bg-[#0874f20d]",
      "bg-[#0874f20d]",
      "border-2"
    );
  document.getElementById(colorcode).style.color = "#0847F2";
}

//  Taggole Menu--1
document
  .getElementById("add-mony-prent")
  .addEventListener("click", function (event) {
    shorts("monySection");
    myUse("add-mony-prent");
  });

//  Taggole Menu--2
document.getElementById("cas-out-prent").addEventListener("click", function () {
  shorts("casOutsection");
  myUse("cas-out-prent");
});

//  Taggole Menu--3
document.getElementById("transr-money").addEventListener("click", function (e) {
  e.preventDefault();
  shorts("transfer-money");
  myUse("transr-money");
});

//  Taggole Menu--4
document.getElementById("get-bonus").addEventListener("click", function (e) {
  e.preventDefault();
  shorts("get-bonus-section");
  myUse("get-bonus");
});

//  Taggole Menu--5
document.getElementById("pay-bill").addEventListener("click", function (e) {
  e.preventDefault();
  shorts("payBillSection");
  myUse("pay-bill");
});
//  Taggole Menu--6
document
  .getElementById("transactions-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    shorts("transactionDIvAdd");
    myUse("transactions-btn");
  });


