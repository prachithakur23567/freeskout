console.log("script ready");
let date = new Date();
var today =
  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
var nowtime = date.getHours() + ":" + date.getMinutes();

// ---------------------------------------------------------------------------------------------------------------
const gaugeElement = document.querySelector(".gauge");
const t1 = document.getElementsByClassName("t1");
const t2 = document.getElementsByClassName("t2");
const t3 = document.getElementsByClassName("t3");
const t4 = document.getElementsByClassName("t4");
const t5 = document.getElementsByClassName("t5");
const t6 = document.getElementsByClassName("t6");
let pricePerInfluencer = 250;
let engagementPerInfluencer = 250;
let reachPerInfluencer = 2150;
let impressionPerInfluencer = 2650;
const more = document.getElementById("more");
let output = document.getElementById("value1");
let s = document.getElementById("slider");
let inf = document.getElementById("inf-value");
let engagement = document.getElementById("engagement-value");
let reach = document.getElementById("reach-value");
let impression = document.getElementById("impression-value");
let money_saved = document.getElementById("moneySaved");
let extraI = document.getElementById("extraInf");
let extraR = document.getElementById("extraReach");
let extraCE = document.getElementById("extraCusEgage");
let extraIM = document.getElementById("extraImpr");
let nanoTab = document.getElementById("nanoSpan");
let microTab = document.getElementById("microSpan");
let macroTab = document.getElementById("macroSpan");
let nanoDiv = document.getElementsByClassName("nanoDiv");
s.value = 0;
s.min = 10;
s.max = 2000;
s.step = 10;
nanoTab.addEventListener("click", function () {
  s.value = 0;
  s.min = 10;
  s.max = 2000;
  s.step = 10;
  pricePerInfluencer = 250;
  engagementPerInfluencer = 250;
  reachPerInfluencer = 2150;
  impressionPerInfluencer = 2650;
  s.style.background = "white";
  document.getElementById("slider").value = 0;
  output.innerHTML = "&#8377; " + 0;
  engagement.innerHTML = 0;
  reach.innerHTML = 0;
  impression.innerHTML = 0;
  inf.innerHTML = nM(0);
  nanoTab.classList.add("activeTypeSpan");
  microTab.classList.remove("activeTypeSpan");
  macroTab.classList.remove("activeTypeSpan");
  document.querySelector(".gauge__cover").textContent = 0;
  document.querySelector(".gauge__fill").style.transform = `rotate(${0}turn)`;
});

microTab.addEventListener("click", function () {
  s.value = 0;
  s.min = 1;
  s.max = 50;
  s.step = 1;
  pricePerInfluencer = 15000;
  engagementPerInfluencer = 2000;
  reachPerInfluencer = 50000;
  impressionPerInfluencer = 60000;
  s.style.background = "white";
  document.getElementById("slider").value = 0;
  output.innerHTML = "&#8377; " + 0;
  engagement.innerHTML = 0;
  impression.innerHTML = 0;
  reach.innerHTML = 0;
  inf.innerHTML = nM(0);
  document.querySelector(".gauge__cover").textContent = 0;
  document.querySelector(".gauge__fill").style.transform = `rotate(${0}turn)`;
  nanoTab.classList.remove("activeTypeSpan");
  microTab.classList.add("activeTypeSpan");
  macroTab.classList.remove("activeTypeSpan");
  more.style.display = "none";
});

macroTab.addEventListener("click", function () {
  s.value = 0;
  s.min = 1;
  s.max = 10;
  s.step = 1;
  pricePerInfluencer = 200000;
  engagementPerInfluencer = 10000;
  reachPerInfluencer = 500000;
  impressionPerInfluencer = 600000;
  s.style.background = "white";
  document.getElementById("slider").value = 0;
  output.innerHTML = "&#8377; " + 0;
  engagement.innerHTML = 0;
  reach.innerHTML = 0;
  impression.innerHTML = 0;
  inf.innerHTML = nM(0);
  document.querySelector(".gauge__cover").textContent = 0;
  document.querySelector(".gauge__fill").style.transform = `rotate(${0}turn)`;
  nanoTab.classList.remove("activeTypeSpan");
  microTab.classList.remove("activeTypeSpan");
  macroTab.classList.add("activeTypeSpan");
  more.style.display = "none";
});

//------------------------------------------------------------

// function setGaugeValue(gauge, value) {
//   if (value < 0 || value > 1) return;
//   gauge.querySelector(".gauge__fill").style.transform = `rotate(${
//     value / 2
//   }turn)`;
//   gauge.querySelector(".gauge__cover").textContent = `${Math.round(
//     value * 100
//   )}%`;
//   let savings = Math.round(value * 100);
//   if (savings >= 0 && savings < 7) {
//     t1[0].classList.remove("invicibilityClass");
//     t1[0].classList.add("visbilityClass");
//     t2[0].classList.remove("visbilityClass");
//     t3[0].classList.remove("visbilityClass");
//     t4[0].classList.remove("visbilityClass");
//     t5[0].classList.remove("visbilityClass");
//     t6[0].classList.remove("visbilityClass");
//     t2[0].classList.add("invicibilityClass");
//     t3[0].classList.add("invicibilityClass");
//     t4[0].classList.add("invicibilityClass");
//     t5[0].classList.add("invicibilityClass");
//     t6[0].classList.add("invicibilityClass");
//   } else if (savings >= 7 && savings < 17) {
//     t1[0].classList.remove("visbilityClass");
//     t1[0].classList.add("invicibilityClass");
//     t2[0].classList.remove("invicibilityClass");
//     t2[0].classList.add("visbilityClass");
//     t3[0].classList.remove("visbilityClass");
//     t4[0].classList.remove("visbilityClass");
//     t5[0].classList.remove("visbilityClass");
//     t6[0].classList.remove("visbilityClass");
//     t3[0].classList.add("invicibilityClass");
//     t4[0].classList.add("invicibilityClass");
//     t5[0].classList.add("invicibilityClass");
//     t6[0].classList.add("invicibilityClass");
//   } else if (savings >= 17 && savings < 25) {
//     t1[0].classList.remove("visbilityClass");
//     t2[0].classList.remove("visbilityClass");
//     t4[0].classList.remove("visbilityClass");
//     t3[0].classList.remove("invicibilityClass");
//     t3[0].classList.add("visbilityClass");
//     t5[0].classList.remove("visbilityClass");
//     t6[0].classList.remove("visbilityClass");
//     t1[0].classList.add("invicibilityClass");
//     t2[0].classList.add("invicibilityClass");
//     t4[0].classList.add("invicibilityClass");
//     t5[0].classList.add("invicibilityClass");
//     t6[0].classList.add("invicibilityClass");
//   } else if ((savings = 25)) {
//     t1[0].classList.remove("visbilityClass");
//     t2[0].classList.remove("visbilityClass");
//     t3[0].classList.remove("visbilityClass");
//     t6[0].classList.remove("visbilityClass");
//     t5[0].classList.remove("visbilityClass");
//     t4[0].classList.remove("invicibilityClass");
//     t4[0].classList.add("visbilityClass");
//     t1[0].classList.add("invicibilityClass");
//     t2[0].classList.add("invicibilityClass");
//     t6[0].classList.add("invicibilityClass");
//     t3[0].classList.add("invicibilityClass");
//     t5[0].classList.add("invicibilityClass");
//   }
// }
// setGaugeValue(gaugeElement, 0);
const nM = (nn) => {
  let a = nn;
  if (a >= 100000 && a < 10000000) a = (a / 100000).toFixed(2) + "L";
  if (a >= 10000000) a = (a / 10000000).toFixed(2) + "CR";
  return a;
};

// const pS = (ms, a1, b2, c3, d4) => {
//   money_saved.innerHTML = nM(ms);
//   extraI.innerHTML = nM(a1);
//   extraCE.innerHTML = nM(b2);
//   extraR.innerHTML = nM(c3);
//   extraIM.innerHTML = nM(d4);
// };

let slider = (document.getElementById("slider").oninput = function () {
  let v = ((this.value - this.min) / (this.max - this.min)) * 100;

  s.style.background =
    "linear-gradient(to right, gray 0%, rgb(44, 187, 56) " +
    v +
    "%, white " +
    v +
    "%, white 100%)";

  inf.innerHTML = nM(this.value);
  let cutOff = s.max - s.max / 90;
  if (this.value < cutOff) {
    more.style.display = "none";
    output.innerHTML = "&#8377; " + nM(this.value * pricePerInfluencer);
    engagement.innerHTML = nM(this.value * engagementPerInfluencer);
    reach.innerHTML = nM(this.value * reachPerInfluencer);
    impression.innerHTML = nM(this.value * impressionPerInfluencer);
    // setGaugeValue(gaugeElement, 0);
    output.style.color = "rgba(0, 0, 0, 0.603)";
    document.getElementById("cal-sp").style.display = "none";
    document.getElementById("cal-fp").style.display = "block";
    document.getElementById("value-button").style.display = "none";
    document.getElementById("more").style.display = "none";
  } else {
    more.style.display = "flex";
    // inf.innerHTML = "--";
    // impression.innerHTML = "--";
    // reach.innerHTML = "--";
    // engagement.innerHTML = "--";
    // output.innerHTML = "";
    // t1[0].classList.remove("visbilityClass");
    // t2[0].classList.remove("visbilityClass");
    // t3[0].classList.remove("visbilityClass");
    // t4[0].classList.remove("visbilityClass");
    // t5[0].classList.remove("visbilityClass");
    // t6[0].classList.remove("invicibilityClass");
    // t6[0].classList.add("visbilityClass");
    // t1[0].classList.add("invicibilityClass");
    // t2[0].classList.add("invicibilityClass");
    // t4[0].classList.add("invicibilityClass");
    // t3[0].classList.add("invicibilityClass");
    // t5[0].classList.add("invicibilityClass");
    document.getElementById("value-button").style.display = "block";
    document.getElementById("more").style.display = "flex";
  }
  // if (this.value <= 200) {
  //   more.style.display = "none";
  //   // let bb = Math.floor(this.value / rs1);
  //   output.innerHTML = "&#8377; " + nM(this.value * rs1);
  //   ce.innerHTML = nM(this.value * ce1);
  //   reach.innerHTML = nM(this.value * reach1);
  //   eng.innerHTML = nM(this.value * eng1);
  //   setGaugeValue(gaugeElement, 0);
  //   output.style.color = "rgba(0, 0, 0, 0.603)";
  //   document.getElementById("cal-sp").style.display = "none";
  //   document.getElementById("cal-fp").style.display = "block";
  //   document.getElementById("value-button").style.display = "none";
  //   document.getElementById("more").style.display = "none";
  // } else if (this.value > 200 && this.value <= 500) {
  //   document.getElementById("cal-sp").style.display = "block";
  //   document.getElementById("cal-fp").style.display = "none";
  //   document.getElementById("value-button").style.display = "none";
  //   document.getElementById("more").style.display = "none";
  //   output.innerHTML = "&#8377; " + nM(this.value * rs2);
  //   ce.innerHTML = nM(this.value * ce2);
  //   reach.innerHTML = nM(this.value * reach2);
  //   eng.innerHTML = nM(this.value * eng2);
  //   output.style.color = "rgba(0, 0, 0, 0.603)";
  //   let discount = 25 / rs1;
  //   setGaugeValue(gaugeElement, discount);
  //   let moneySaved = Math.floor(this.value * rs1 - this.value * rs2);
  //   let more_inf = Math.floor(moneySaved / rs2);
  //   let more_ce = more_inf * 750;
  //   let more_reach = more_ce * 12;
  //   let more_impr = more_ce * 13;
  //   pS(moneySaved, more_inf, more_ce, more_reach, more_impr);
  // } else if (this.value > 500 && this.value <= 1000) {
  //   document.getElementById("cal-sp").style.display = "block";
  //   document.getElementById("cal-fp").style.display = "none";
  //   document.getElementById("value-button").style.display = "none";
  //   document.getElementById("more").style.display = "none";
  //   // let bb2 = Math.floor(this.value / 250);
  //   output.innerHTML = "&#8377; " + nM(this.value * 250);
  //   ce.innerHTML = nM(this.value * 1000);
  //   reach.innerHTML = nM(this.value * 14000);
  //   eng.innerHTML = nM(this.value * 15000);
  //   output.style.color = "rgba(0, 0, 0, 0.603)";
  //   let discount1 = 50 / 300;
  //   setGaugeValue(gaugeElement, discount1);
  //   let moneySaved = Math.floor(this.value * rs2 - this.value * rs3);
  //   let more_inf = Math.floor(moneySaved / rs3);
  //   let more_ce = more_inf * ce3;
  //   let more_reach = more_ce * reach3;
  //   let more_impr = more_ce * eng3;
  //   pS(moneySaved, more_inf, more_ce, more_reach, more_impr);
  // } else if (this.value > 1000 && this.value <= 2025) {
  //   if (this.value > 2000) {
  //     more.style.display = "flex";
  //     inf.innerHTML = "--";
  //     ce.innerHTML = "--";
  //     reach.innerHTML = "--";
  //     eng.innerHTML = "--";
  //     output.innerHTML = "";
  //     t1[0].classList.remove("visbilityClass");
  //     t2[0].classList.remove("visbilityClass");
  //     t3[0].classList.remove("visbilityClass");
  //     t4[0].classList.remove("visbilityClass");
  //     t5[0].classList.remove("visbilityClass");
  //     t6[0].classList.remove("invicibilityClass");
  //     t6[0].classList.add("visbilityClass");
  //     t1[0].classList.add("invicibilityClass");
  //     t2[0].classList.add("invicibilityClass");
  //     t4[0].classList.add("invicibilityClass");
  //     t3[0].classList.add("invicibilityClass");
  //     t5[0].classList.add("invicibilityClass");
  //     document.getElementById("value-button").style.display = "block";
  //     document.getElementById("more").style.display = "block";
  //   } else {
  //     document.getElementById("cal-sp").style.display = "block";
  //     document.getElementById("cal-fp").style.display = "none";
  //     document.getElementById("value-button").style.display = "none";
  //     document.getElementById("more").style.display = "none";
  //     output.innerHTML = "&#8377; " + nM(this.value * rs4);
  //     ce.innerHTML = nM(this.value * ce4);
  //     reach.innerHTML = nM(this.value * reach4);
  //     eng.innerHTML = nM(this.value * eng4);
  //     output.style.color = "rgba(0, 0, 0, 0.603)";
  //     let discount2 = 75 / 300;
  //     setGaugeValue(gaugeElement, discount2);
  //     let moneySaved = Math.floor(this.value * rs3 - this.value * rs4);
  //     let more_inf = Math.floor(moneySaved / rs4);
  //     let more_ce = more_inf * ce4;
  //     let more_reach = more_ce * reach4;
  //     let more_impr = more_ce * eng4;
  //     pS(moneySaved, more_inf, more_ce, more_reach, more_impr);
  //   }
  // }
});

// ------------------------------------CONTACT FORM---------------------------------------------------------------------- //

let brandName = document.getElementById("contactUsBName");
let yourName = document.getElementById("contactUsName");
let mobile = document.getElementById("contactUsNum");
let email = document.getElementById("contactUsEmail");
let instaID = document.getElementById("contactUsId");
let message = document.getElementById("contactUsMsg");
let SendBtn = document.getElementById("contactUsBtn");

brandName.addEventListener("click", function () {
  brandName.classList.remove("errorClass");
});
yourName.addEventListener("click", function () {
  yourName.classList.remove("errorClass");
});
mobile.addEventListener("click", function () {
  mobile.classList.remove("errorClass");
});
email.addEventListener("click", function () {
  email.classList.remove("errorClass");
});
instaID.addEventListener("click", function () {
  instaID.classList.remove("errorClass");
});
message.addEventListener("click", function () {
  message.classList.remove("errorClass");
});

SendBtn.addEventListener("click", function () {
  let restrictedDomain = [
    "@gmail",
    "@outlook",
    "@icloud",
    "@yahoo",
    "@hotmail",
    "@proton",
    "@zoho",
  ];
  const emailChecker = (email) => {
    let sts = true;
    let atChecker = email.split("@");
    let dotChecker = email.split("..");
    let spaceChecker = email.split(" ");
    if (atChecker.length > 2) {
      sts = false;
    } else if (dotChecker.length > 2) {
      sts = false;
    } else if (spaceChecker.length > 1) {
      sts = false;
    } else
      for (let i = 0; i <= restrictedDomain.length; i++) {
        let result = email.toLowerCase().includes(restrictedDomain[i]);
        if (result == true) {
          sts = false;
        }
      }
    return sts;
  };
  let restSts = emailChecker(email.value);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno = /^\d{10}$/;
  if (brandName.value == "") {
    brandName.classList.add("errorClass");
  } else if (yourName.value == "") {
    yourName.classList.add("errorClass");
  } else if (email.value == "") {
    email.classList.add("errorClass");
  } else if (!mobile.value.match(phoneno)) {
    mobile.classList.add("errorClass");
    mobile.placeholder = "enter a valid number";
  } else if (instaID.value == "") {
    instaID.classList.add("errorClass");
  } else if (message.value == "") {
    message.classList.add("errorClass");
  } else if (!restSts) {
    let sendData = {
      date: today,
      time: nowtime,
      brandName: brandName.value,
      name: yourName.value,
      email: email.value,
      mobile: mobile.value,
      instagramID: instaID.value,
      message: message.value,
    };
    fetch("https://webserver.freeskout.com/client/unregistred", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", sendData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    email.classList.add("errorClass");
    alert("rands with registered domain are allowed");
    email.style.color = "red";
    email.style.fontSize = "14px";
    brandName.value = "";
    yourName.value = "";
    mobile.value = "";
    email.value = "Brands with registered domain are allowed";
    instaID.value = "";
    message.value = "";
    brandName.disabled = "true";
    yourName.disabled = "true";
    mobile.disabled = "true";
    email.disabled = "true";
    instaID.disabled = "true";
    message.disabled = "true";
    message.disabled = "true";
    SendBtn.innerText = "ThankYou";
    SendBtn.disabled = "true";
  } else if (!email.value.match(mailformat)) {
    email.placeholder = "You have entered an invalid email address!";
    email.classList.add("errorClass");
  } else {
    let sendData = {
      date: today,
      time: nowtime,
      brandName: brandName.value,
      name: yourName.value,
      email: email.value,
      mobile: mobile.value,
      instagramID: instaID.value,
      message: message.value,
    };
    fetch("https://webserver.freeskout.com/client/query", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", sendData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch("https://webserver.freeskout.com/client/devMail", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then(() => {
        setTimeout(() => {
          fetch("https://webserver.freeskout.com/client/sendMailToReq", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData),
          }).then(() => {
            setTimeout(() => {
              fetch("https://webserver.freeskout.com/client/sendMail", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(sendData),
              });
            }, 500);
          });
        });
      }, 500)

      .catch((error) => {
        console.error("Error:", error);
      });
    brandName.value = "";
    yourName.value = "";
    email.value = "";
    mobile.value = "";
    instaID.value = "";
    email.placeholder = "";
    mobile.placeholder = "";
    message.value = "ThankYou! Our team will reach you out shortly!! ";

    brandName.disabled = "true";
    yourName.disabled = "true";
    mobile.disabled = "true";
    email.disabled = "true";
    instaID.disabled = "true";
    message.disabled = "true";
    message.disabled = "true";
    SendBtn.innerText = "ThankYou";
    SendBtn.disabled = "true";

    brandName.style.borderColor = "#e5e6ec";
    yourName.style.borderColor = "#e5e6ec";
    email.style.borderColor = "#e5e6ec";
    mobile.style.borderColor = "#e5e6ec";
    instaID.style.borderColor = "#e5e6ec";
    message.style.borderColor = "#e5e6ec";

    brandName.style.backgroundColor = " transparent";
    yourName.style.backgroundColor = "transparent";
    email.style.backgroundColor = "transparent";
    mobile.style.backgroundColor = "transparent";
    instaID.style.backgroundColor = "transparent";
    message.style.backgroundColor = "transparent";
  }
});
