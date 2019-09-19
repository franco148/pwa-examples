var deferredPrompt;

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
					//  .register('/sw.js', { scope: '/help' })
					 .register('/sw.js')
					 .then(function() {
						 console.log('Service worker registered!');
					 });
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired');
	event.preventDefault();
	deferredPrompt = event;
	return false;
});

fetch('https://httpbin.org/ip')
.then(function(response) {
	console.log(response);
	return response.json();
})
.then(function(data) {
	console.log(data);
})
.catch(function(err) {
	console.log(err);
});


fetch('https://httpbin.org/post', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'cors', // cors is the default one - no-cors
	body: JSON.stringify({ message: 'Does this work?' })
})
.then(function(response) {
	console.log(response);
	return response.json();
})
.then(function(data) {
	console.log(data);
})
.catch(function(err) {
	console.log(err);
});





