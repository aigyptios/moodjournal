var cpl = 0;
var wrapper = document.getElementsByClassName('text-wrapper')[0];

document.addEventListener('keypress', function(ke) {

	if (cpl === 52) {
		cpl = 0;
		wrapper.appendChild(document.createElement('br'));
	}
	
	var span = document.createElement('span');
	if (ke.key.match(/[A-Za-z0-9]/)) { span.classList.add(ke.key); }
	span.innerHTML = ke.key;
	wrapper.appendChild(span);

	cpl++;
});