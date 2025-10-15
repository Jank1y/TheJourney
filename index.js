let num = 0;
const button = document.querySelector('input[type="button"]');
const counter = document.getElementById("counter");

button.addEventListener('click', function() {
    if (true) {
        num++;
        counter.textContent = num;
    }
});

window.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight" || e.key === "d") {
        counter.textContent = "Desno"
    }else if (e.key === "ArrowUp" || e.key === "w") {
        counter.textContent = "Gor"
    }else if (e.key === "ArrowLeft" || e.key ==="a") {
        counter.textContent = "Levo"
    }else if (e.key === "ArrowDown" || e.key ==="s") {
        counter.textContent = "Dol"
    }
})