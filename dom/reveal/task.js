
let reveals = document.querySelectorAll('.reveal');


function isBlockVisible(reveals) {
  let blockRect = reveals.getBoundingClientRect();
  let windowHeight = window.innerHeight;

  return blockRect.top <= windowHeight && blockRect.bottom >= 0;
}

function handleScroll() {
  reveals.forEach((reveal) => {
    if (isBlockVisible(reveal)) {
   
      reveal.classList.add('reveal_active');
    }
  });
}


window.addEventListener('scroll', handleScroll);

handleScroll(); 