var slider = document.getElementById("strengthLevel");
//slider.addEventListener("change", function(event) {
slider.addEventListener("input", function(event) {
  var strengthLevelShow = document.getElementById("strengthLevelShow");
  var value = parseInt(slider.value);
  strengthLevelShow.innerText = value;
  if (value <= 33) {
    strengthLevelShow.classList.add("weekCoffee");
    strengthLevelShow.classList.remove("regularCoffee");
    strengthLevelShow.classList.remove("strongCoffee");
  } else if (value >= 34 && value <= 66) {
    strengthLevelShow.classList.add("regularCoffee");
    strengthLevelShow.classList.remove("weekCoffee");
    strengthLevelShow.classList.remove("strongCoffee");
  } else {
    strengthLevelShow.classList.add("strongCoffee");
    strengthLevelShow.classList.remove("weekCoffee");
    strengthLevelShow.classList.remove("regularCoffee");
  }
});
