class _Bands extends Firebase{
	constructor(){
		super();
		this.data = null;
	}

	setData(data){
		this.data = data;
		console.log(this.data);
	}

	getBands(){
		return firebase.database().ref('/bands').once('value').then(snapshot => {
			this.setData(snapshot.val());
		});
	}

	createBand(band){
		var newBandKey = firebase.database().ref().child('bands').push().key;
		var updates = {};
		updates['/bands/' + newBandKey] = {
			name: band.name,
			colour: band.colour,
			members: {}
		};

		return firebase.database().ref().update(updates);
	}
}

let Bands = new _Bands();
Bands.getBands();