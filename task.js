let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let holes = document.getElementsByClassName('hole');
for (hole of holes) {
    if (hole.className.includes('hole_has-mole')) {
        hole.onclick = () => {
            dead.textContent = Number(dead.textContent) + 1;
            if (Number(dead.textContent) == 10) {
                alert("Победа!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    } else {
        hole.onclick = () => {
            lost.textContent = Number(lost.textContent) + 1;
            if (Number(lost.textContent) == 5) {
                alert("Поражение!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
}