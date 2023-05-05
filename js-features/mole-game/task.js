let holes = document.querySelectorAll('.hole');
let deads = document.getElementById('dead');
let losts = document.getElementById('lost');

let lostsCounter = 0;
let deadsCounter = 0;



function clearAll() {
	deads.textContent = 0;
	losts.textContent = 0;

}





function getHole(holeIndex) {
	return document.getElementById("hole" + holeIndex.toString());
}







for (let i = 1; i <= 9; i++) {
	let elem = getHole(i);


	elem.onclick = () => {
		if (elem.classList.contains('hole_has-mole')) {
			deadsCounter = deadsCounter + 1;
			deads.textContent = deadsCounter;
			if (deadsCounter === 10) {
				alert('Победа')
				clearAll();
			}


		} else {
			lostsCounter = lostsCounter + 1;
			losts.textContent = lostsCounter;
			if (lostsCounter === 5) {
				alert('Поражение');
				clearAll();
			}


		}




	}



}