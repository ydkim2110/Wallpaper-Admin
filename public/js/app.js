var config = {
	apiKey: "AIzaSyCGnE6JjOvkym4BXu7hVmdRZtfbDdRxj9U",
	authDomain: "study-82168.firebaseapp.com",
	databaseURL: "https://study-82168.firebaseio.com",
	projectId: "study-82168",
	storageBucket: "study-82168.appspot.com",
	messagingSenderId: "1041464687149"
};
firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL;

$('#btn-login').on('click', function() {
	var email = $('#email').val();
	var password = $('#password').val();


	var result = firebase.auth().signInWithEmailAndPassword(email, password);

	result.catch(function(error){
		var errorCode = error.code;
		var errorMeassge = error.message;
		console.log(errorCode);
		console.log(errorMeassge);
	});
});

$('#btn-logout').on('click', function(){
	console.log('signout!');
	firebase.auth().signOut();
});

function switchView(view) {
	$.get({
		url : view,
		cache : false
	}).then(function(data){
		$('#container').html(data);
	})
}