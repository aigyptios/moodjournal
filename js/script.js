var cpl = 0;
var wrapper = document.getElementsByClassName('text-wrapper')[0];
var canvasCtx = document.getElementsByClassName('line-wrapper')[0].getContext('2d');

canvasCtx.fillStyle = "rgb(255, 165, 0)";

document.addEventListener('keypress', function(ke) {

	if (cpl === 52) {
		var br = document.createElement('br');
		wrapper.appendChild(br);
		cpl = 0;
	}

	if (ke.key == "Backspace") {
		var chars = document.getElementsByClassName('char');
		var lastChar = chars[chars.length - 1];
		lastChar.remove(lastChar);
		return;
	} else if (ke.key == "Enter") {
		var br = document.createElement('br');
		br.classList.add('char');
		wrapper.appendChild(br);
		cpl = 0;
		return;
	}

	var span = document.createElement('span');
	span.classList.add('char');

	if (ke.key.match(/[A-Za-z0-9]/)) { 
		span.classList.add(ke.key); 
	}

	span.innerHTML = (ke.key !== " ") ? ke.key : "&nbsp;";
	wrapper.appendChild(span);

	cpl++;


	if (ke.key == "a") {
		var letters_a = document.getElementsByClassName('a');
		if (letters_a.length <= 1) {
			return;
		}
		else {
			console.log('A\'s entered: ', letters_a.length);
			canvasCtx.beginPath();
			var x = letters_a[letters_a.length - 1].offsetLeft + 5;
			var y = letters_a[letters_a.length - 1].offsetTop + 8;

			console.log("x: ", x, ", y: ", y)

			canvasCtx.arc(x, y, 2, 0, Math.PI*2, true);
			canvasCtx.fill();
		}
	}




});