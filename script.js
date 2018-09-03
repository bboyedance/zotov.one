function n3xt(text, element) {
  var sample = document.querySelector(element);
  if (sample.dataset.animating === "true") return;
  var sampleH = 50; // will keep it fixed, otherwise sample.offsetHeight
  var sampleT = sample.textContent; // old text
  var sampleNT = text; // new text
  sample.dataset.animating = "true";
  sample.style.height = sampleH + "px";

  // original text element
  var samO = document.createElement("div");
  samO.style.transformOrigin = "0 " + sampleH / 2 + "px -" + sampleH / 2 + "px";
  samO.classList.add("t3xt");
  samO.textContent = sampleT;

  // new text element
  var samN = samO.cloneNode();
  samN.textContent = sampleNT;
  sample.textContent = "";
  sample.appendChild(samO);
  sample.appendChild(samN);

  samO.classList.add("t3xt-out");
  samN.classList.add("t3xt-in");

  samN.addEventListener("animationend", function (event) {
    sample.removeChild(samO);
    sample.removeChild(samN);
    sample.textContent = sampleNT;
    sample.dataset.animating = "false";
  });
}

var phraseIndex = 1;
var wordIndex = 0;
var t3xts = [
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"],
["ZOTOV digital agency", " ", "скоро открытие"]];


// start it off
setTimeout(changetext, 200);

function changetext() {
  if (wordIndex > 2) {
    wordIndex = 0;
    phraseIndex++;
  }
  if (phraseIndex >= t3xts.length) {
    phraseIndex = 0;
  }
  var term = t3xts[phraseIndex][wordIndex];
  n3xt(term, ".t3xt-" + ++wordIndex);

  if (wordIndex == 3) {
    setTimeout(changetext, 2000);
  } else {
    setTimeout(changetext, 150);
  }
}