
// API - Application Programming Interface
// speechRecognition API

var rec = new webkitSpeechRecognition();
rec.lang = 'uz-UZ';

rec.start();


rec.onerror = function (err) {
	console.log(err, 'error');
};

rec.onend = function () {
	console.log('Aloqa tugadi');
};



rec.onresult = function (evt) {

    var command = evt.results[0][0].transcript;
    console.log(command)
}
	
// 	var newLi = document.createElement('li');
// 	newLi.textContent = command;

	// list.appendChild(newLi);
	// console.log(command);
	// if (command === 'salom') {
	// } else if (command === 'kuk') {
	// 	document.body.style.backgroundColor = 'blue';
	// } else if (command === 'yashil') {
	// 	document.body.style.backgroundColor = 'green';
	// } else {
	// 	document.body.style.backgroundColor = 'black';
	// }


// button.addEventListener('click', function () {
	
// });
