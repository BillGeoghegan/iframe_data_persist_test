const setValue = () => {
  window.onmessage = function (event) {
    event.source.postMessage(document.body.innerHTML, event.origin);
  };
};

// const getValue = () => {
//   const value = new Date();
//   localStorage.getItem("VALUE");
//   console.log("got value: ", value);
//   document.getElementById("test").innerHTML = `Value: ${value}`;
// };

window.onmessage = function (event) {
  // event.source.postMessage(document.body.innerHTML, event.origin);

  var evt = event || window.event;
  evt.source.postMessage("Message from iFrame", evt.origin);
};
