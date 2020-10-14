const setValue = () => {
  const value = new Date();
  localStorage.setItem("VALUE", value);
  console.log("setting value: ", value);
};

const getValue = () => {
  const value = new Date();
  localStorage.getItem("VALUE");
  console.log("got value: ", value);
  document.getElementById("test").innerHTML = `Value: ${value}`;
};
