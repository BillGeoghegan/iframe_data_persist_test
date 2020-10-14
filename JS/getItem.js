// Main page:
// Trigger:
// <iframe id="myframe" src="framed.htm"></iframe>

setInterval(() => {
  const test = document
    .getElementById("myframe")
    .contentWindow.postMessage("", "*");
  console.log(test);
}, 3000);

window.addEventListener(
  "message",
  (event) => {
    console.log(event);
  },
  false
);
