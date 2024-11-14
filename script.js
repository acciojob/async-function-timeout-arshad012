//your JS code here. If required.
document.querySelector('#btn').addEventListener('click', () => {

	const message = document.getElementById('text').value;
	const delay = document.getElementById('delay').value;

	const displayMessage = async () => {
		let newPromise = new Promise((resolve, reject) => {
			return resolve(message);
		});

		
		let result = await newPromise;
		setTimeout(() => {
			document.getElementById('output').innerText = result;
		},delay)
	};

	displayMessage();

	
})


