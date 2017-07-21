class _Bands extends Firebase{
	constructor(){
		super();
		this.node = 'bands';
		this.data = null;
	}

	setData(data){
		this.data = data;
		console.log(this.data);
	}

	getBands(){
		return firebase.database().ref(`/${this.node}`).once('value').then(snapshot => {
			this.setData(snapshot.val());
		});
	}

	createBand(band){
		var newBandKey = firebase.database().ref().child(`${this.node}`).push().key;
		var updates = {};
		updates[`${this.node}/${newBandKey}`] = {
			name: band.name,
			colour: band.colour,
			members: {}
		};

		return firebase.database().ref().update(updates).then(()=>{
			return this.getBands();
		});
	}
}

let Bands = new _Bands();
Bands.getBands();