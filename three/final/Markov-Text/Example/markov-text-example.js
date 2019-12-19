var markovExample = new MarkovText(3);

function learnFromInput() {
	var node  = document.getElementById('textAreaInput'),
	htmlContent = node.innerHTML,
	textContent = node.textContent;
//	console.log(textContent)
	markovExample.learn(document.getElementById('textAreaInput').textContent);
	console.log("Example model trained");
}


function outputFromModel() {
	var markovOutput = markovExample.output(document.getElementById('numberOfWords').value);
	document.getElementById('textAreaOutput').innerHTML = markovOutput;
}
