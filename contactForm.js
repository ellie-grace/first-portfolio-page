// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvsoV_u8qAUKx-37glFYDyP-UCMl7R1pI",
    authDomain: "builtbyellie.firebaseapp.com",
    databaseURL: "https://builtbyellie.firebaseio.com",
    projectId: "builtbyellie",
    storageBucket: "builtbyellie.appspot.com",
    messagingSenderId: "1009372419841"
  };
  firebase.initializeApp(config);

  // reference messages collection

  var messagesRef = firebase.database().ref('messages');

//listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);


//submit form
function submitForm(e){
	e.preventDefault();
	//get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	//save message
	saveMessage(name, company, email, phone, message);

	//show alert
	document.querySelector('.alert').style.display = 'block';

	//hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	// clear form
	document.getElementById('contactForm').reset();

}

//function to get form values

function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase

function saveMessage(name,company,email,phone,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	})
}