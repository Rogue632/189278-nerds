var button = document.querySelector(".contacts-btn");
var popup = document.querySelector(".footer-contacts-popup");
var close = document.querySelector(".popup-close")

button.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("footer-contacts-popup-show");
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("footer-contacts-popup-show");
});
console.log("Запуск скрипта."); 

