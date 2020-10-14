// Main page:
window.onmessage = function (event) {
  alert(event.data);
};

// Trigger:
// <iframe id="myframe" src="framed.htm"></iframe>
document.getElementById("myframe").contentWindow.postMessage("", "*");
