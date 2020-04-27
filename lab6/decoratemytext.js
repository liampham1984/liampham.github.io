"use strict";

function btnClicked() {
  alert("Hello, world!");
      setInterval(increaseTextAreaFontSize, 500);
}

function increaseTextAreaFontSize() {
  var textArea = document.getElementById("textarea");
  textArea.style.fontSize = parseInt(window.getComputedStyle(textArea)
        .getPropertyValue("font-size")) + 2 + "px";
  document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

function onConvert2PigLatin() {
  var textArea = document.getElementById("textarea");
  textarea.value = convertTextToPigLatin(textarea.value);
}

function onMalkovichBtnClicked() {
  var textArea = document.getElementById("textarea");
  var newStr = textArea.value.replace(/\w{5,}/g, "Malkovich");
  textArea.value = newStr;
}

function convertTextToPigLatin(text) {
  text = text.trim();
  var result = text.toLowerCase();
  var index = text.search(/[ueoai]/);
  switch (index) {
    case 0: result = result + "way"; break;
    case -1: result = result + "ay"; break;
    default:
      result = text.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
  }
  return result;
}

function onCheckboxChanged(state) {
    alert("checkbox changed");
    var textArea = document.getElementById("textarea");
    textArea.style.fontWeight = "bold";
    if (document.getElementById("checkbox").checked) {
        textArea.style.fontWeight = "bold";
        textarea.style.color = "green";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "";
        textarea.style.color = "";
        textArea.style.textDecoration = "";
    }
}