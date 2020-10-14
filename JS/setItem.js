const setValue = () => {
  window.onmessage = function (event) {
    event.source.postMessage("This is a lovely message", event.origin);
  };
};

const getValue = () => {
  const value = new Date();
  localStorage.getItem("VALUE");
  console.log("got value: ", value);
  document.getElementById("test").innerHTML = `Value: ${value}`;
};
