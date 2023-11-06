// ? main

const icon1 = document.querySelector(".main-icon1 i");
const icon1Content = document.querySelector(".icon1-content");

icon1.addEventListener("click", function () {
  if (icon1Content.style.display === "none") {
    icon1Content.style.display = "block";
  } else if (icon1Content.style.display === "block") {
    icon1Content.style.display = "none";
  } else {
    icon1Content.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (event.target === icon1 || event.target === icon1Content) {
    return;
  }

  icon1Content.style.display = "none";
});
const icon2 = document.querySelector(".main-icon2 i");
const icon2Content = document.querySelector(".icon2-content");

icon2.addEventListener("click", function () {
  if (icon2Content.style.display === "block") {
    icon2Content.style.display = "none";
  } else {
    icon2Content.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  if (event.target === icon2 || event.target === icon2Content) {
    return;
  }

  icon2Content.style.display = "none";
});

//! ------------------------------------------------ */
// ? main

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// main ve case elementlerini seçin
const main = document.querySelector(".main");
const caseElement = document.querySelector(".case");
const monitor = document.querySelector(".monitor");

// btn1 butonuna tıklama olayını ekleyin
btn1.addEventListener("click", function () {
  // main elementini gizle (display: none)
  main.style.display = "none";

  // case elementini görünür yap (display: block)
  caseElement.style.display = "block";
});
btn2.addEventListener("click", function () {
  // main elementini gizle (display: none)
  main.style.display = "none";
  caseElement.style.display = "none";

  // cmonitor elementini görünür yap (display: block)
  monitor.style.display = "block";
});

//!---------------------------------------------------- */

//* case
const ekranTxt = document.querySelector(".ekrankarti p");
const ekrankarti = document.querySelector(".ekrankarti");

ekrankarti.addEventListener("click", function () {
  if (ekranTxt.style.display === "none") {
    ekranTxt.style.display = "block";
  } else {
    ekranTxt.style.display = "none";
  }
});

// ram
const ramTxt = document.querySelector(".ram p");
const ram = document.querySelector(".ram");

ram.addEventListener("click", function () {
  if (ramTxt.style.display === "none") {
    ramTxt.style.display = "block";
    ram.style.width = "35%";
  } else {
    ramTxt.style.display = "none";
    ram.style.width = "4.5%";
  }
});
// cpu
const cpuTxt = document.querySelector(".cpu p");
const cpu = document.querySelector(".cpu");

cpu.addEventListener("click", function () {
  if (cpuTxt.style.display === "none") {
    cpuTxt.style.display = "block";
    cpu.style.width = "29%";
    cpu.style.left = "13%";
  } else {
    cpuTxt.style.display = "none";
    cpu.style.width = "15%";
    cpu.style.left = "27%";
  }
});

const psuTxt = document.querySelector(".psu p");
const psu = document.querySelector(".psu");

psu.addEventListener("click", function () {
  if (psuTxt.style.display === "none") {
    psuTxt.style.display = "block";
    psu.style.width = "44%";
    psuTxt.style.color = "yellow";
  } else {
    psuTxt.style.display = "none";
    psu.style.width = "22%";
  }
});

const fanTxt = document.querySelector(".fan p");
const fan = document.querySelector(".fan");

fan.addEventListener("click", function () {
  if (fanTxt.style.display === "none") {
    fanTxt.style.display = "block";
    fan.style.height = "12%";
  } else {
    fanTxt.style.display = "none";
    fan.style.height = "8%";
  }
});

// icon
const iconHome = document.querySelector(".icon-home");

iconHome.addEventListener("click", function () {
  main.style.display = "block";

  caseElement.style.display = "none";
  monitor.style.display = "none";
});

/* -------------------------------------------- */
/* monitor icon */
const mbtn1 = document.querySelector(".mbtn1");
const lcdTxt = document.querySelector(".lcd-txt");


mbtn1.addEventListener("click", function () {

  if (lcdTxt.style.display === "none") {
    lcdTxt.style.display = "block"; 
  } else if (lcdTxt.style.display === "block") {
    lcdTxt.style.display = "none"; 
  } else {
    lcdTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {

  if (event.target === mbtn1 || event.target === lcdTxt) {
    return;
  }


  lcdTxt.style.display = "none";
});


const mbtn2 = document.querySelector(".mbtn2");
const ledTxt = document.querySelector(".led-txt");


mbtn2.addEventListener("click", function () {

  if (ledTxt.style.display === "none") {
    ledTxt.style.display = "block"; 
  } else if (ledTxt.style.display === "block") {
    ledTxt.style.display = "none"; 
  } else {
    ledTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {

  if (event.target === mbtn2 || event.target === ledTxt) {
    return;
  }


  ledTxt.style.display = "none";
});


const mbtn3 = document.querySelector(".mbtn3");
const oledTxt = document.querySelector(".oled-txt");


mbtn3.addEventListener("click", function () {

  if (oledTxt.style.display === "none") {
    oledTxt.style.display = "block"; 
  } else if (ledTxt.style.display === "block") {
    oledTxt.style.display = "none"; 
  } else {
    oledTxt.style.display = "none";
  }
});

document.addEventListener("click", function (event) {

  if (event.target === mbtn3 || event.target === oledTxt) {
    return;
  }


  oledTxt.style.display = "none";
});


