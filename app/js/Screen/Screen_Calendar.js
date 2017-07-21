class _Screen_Calendar{
	constructor(){
		this.name = "BandCalendar";
	}

	render(){
		let HTML = '';
		UI.Toolbar.setTitle("Calendar");
		UI.Toolbar.tabs.clear();
		Application.workspace.innerHTML = '';

		UI.render();
		UI.Dialog.clear();
	}
}

let Screen_Calendar = new _Screen_Calendar();