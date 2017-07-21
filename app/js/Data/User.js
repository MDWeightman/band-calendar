class _User extends Firebase{
	constructor(){
		super();
		this.token = null;
		this.data = null;
		this.authenticated = false;
	}

	setToken(token){
		this.token = token;
	}

	setData(data){
		this.data = data;
		this.login();
		if(this.data){
			this.render();
		}
	}

	setLogin(){
		if(!this.isAuthenticated()){
			document.getElementById("appbar-user-name").addEventListener("click", User.loginDialog);
		}
		else{
			document.getElementById("appbar-user-name").removeEventListener("click", User.loginDialog);
		}
	}

	updateUser(user){
		let data = {
			name: user.displayName.split(" ")[0],
			displayName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			isAnonymous: user.isAnonymous,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			uid: user.uid
		} 
		this.setData(data);
		firebase.database().ref('users/' + user.uid).set(data);
	}

	loginDialog(){
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			console.log(token);
			var token = result.credential.accessToken;
			User.setToken(token);

			var user = result.user;
			console.log(user);
			User.updateUser(user);
			// ...
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
	}

	login(remenber){
		this.authenticated = true;
	}

	isAuthenticated(){
		return this.authenticated;
	}

	render(){
		this.setLogin();
		if(this.data.photoURL){
			document.getElementById("appbar-user-avatar-image").src = this.data.photoURL;
		}
		if(this.data.displayName){
			document.getElementById("appbar-user-avatar").classList.remove("hidden");
			document.getElementById("appbar-user-name").innerHTML = this.data.name;
		}
		Application.render();
	}
}

let User = new _User();