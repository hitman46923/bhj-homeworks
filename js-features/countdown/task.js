let timer = document.getElementById('timer');
let interval = setInterval(counter, 1000);



function counter () {
    timer.textContent--;
 

    if (timer.textContent <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе');
    }
  
}


