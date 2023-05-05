
  let clicker = document.getElementById('clicker__counter');
  let cookie = document.getElementById('cookie');
  let plug = true; /* заглушка чтобы меять стили */



  cookie.onclick = function counterStart() {
  	clicker.textContent++;

  	cookie.style.width = '200px';

  	if (plug) {
  		cookie.style.width = '100px';
  		cookie.style.height = '100px';
  		plug = false;
  	} else {
  		cookie.style.width = '200px';
  		cookie.style.height = '200px';
  		plug = true;


  	}




  }



