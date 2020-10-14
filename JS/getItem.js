// Main page:
window.onmessage = function (event) {
  alert(event.data);
};

// Trigger:
// <iframe id="myframe" src="framed.htm"></iframe>

setInterval(() => {
  const test = document
    .getElementById("myframe")
    .contentWindow.postMessage("", "*");
  console.log(test);
}, 3000);
