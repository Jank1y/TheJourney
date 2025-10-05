let num = 0;
const button = document.querySelector('input[type="button"]');
const counter = document.getElementById("counter");

button.addEventListener('click', function() {
    if (true) {
        num++;
        counter.textContent = num;
    }
});