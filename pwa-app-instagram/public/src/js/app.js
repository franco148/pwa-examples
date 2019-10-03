var deferredPrompt;

if (!window.serviceWorker) {
	window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
					//  .register('/sw.js', { scope: '/help' })
					 .register('/sw.js')
					 .then(function() {
						 console.log('Service worker registered!');
					 })
					 .catch(function(err) {
						 console.log(err);
					 });
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired');
	event.preventDefault();
	deferredPrompt = event;
	return false;
});

// fetch('https://httpbin.org/ip')
// .then(function(response) {
// 	console.log(response);
// 	return response.json();
// })
// .then(function(data) {
// 	console.log(data);
// })
// .catch(function(err) {
// 	console.log(err);
// });

// SAME AS PREVIOUS CODE BUT WITH AJAX
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://httpbin.org/ip');
// xhr.responseType = 'json';

// xhr.onload = function() {
// 	console.log(xhr.response);
// }

// xhr.onerror = function() {
// 	console.log('Error!');
// }

// xhr.send();

// -----------------------------------


// fetch('https://httpbin.org/post', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Accept': 'application/json'
// 	},
// 	mode: 'cors', // cors is the default one - no-cors
// 	body: JSON.stringify({ message: 'Does this work?' })
// })
// .then(function(response) {
// 	console.log(response);
// 	return response.json();
// })
// .then(function(data) {
// 	console.log(data);
// })
// .catch(function(err) {
// 	console.log(err);
// });



// Exercise
// button.addEventListener('click', function() {
//   // Create a new Promise here and use setTimeout inside the function you pass to the constructor
//   var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { // <- Store this INSIDE the Promise you created!
//       // Resolve the following URL: https://swapi.co/api/people/1
//       resolve('https://httpbin.org/puts');
//     }, 3000);
//   })
//     .then(function(url) {
//       return fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({person: {name: 'Max', age: 28}})
//       });
//     })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       output.textContent = data.json.person.name;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
//-------------

