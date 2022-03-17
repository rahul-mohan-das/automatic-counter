const input = parseInt(prompt());
const incrementBtn = document.getElementById("incbutton");
const counterElement = document.getElementById("counter");


function onIncrement() {
  const value = counterElement.innerHTML;
  if(parseInt(value)<input){
  counterElement.innerHTML = parseInt(value) + 1;
  }
}