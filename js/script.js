var cpl = 0;
var wrapper = document.getElementsByClassName('text-wrapper')[0];
var canvasCtx = document.getElementsByClassName('line-wrapper')[0].getContext('2d');

canvasCtx.fillStyle = canvasCtx.strokeStyle = "rgb(255, 165, 0)";

document.addEventListener('keypress', function(ke) {
	console.log(ke);

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

			canvasCtx.beginPath();

			var lastA = letters_a[letters_a.length - 2];
			var thisA = letters_a[letters_a.length - 1];

			var lastX = lastA.offsetLeft + 5;
			var lastY = lastA.offsetTop + 8;

			var x = thisA.offsetLeft + 5;
			var y = thisA.offsetTop + 8;

			canvasCtx.arc(x, y, 2, 0, Math.PI*2, true);

			canvasCtx.moveTo(lastX, lastY);
			canvasCtx.lineTo(x, y);

			canvasCtx.fill();
			canvasCtx.stroke();
		}
	}




});