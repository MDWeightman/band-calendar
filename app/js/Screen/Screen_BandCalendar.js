class _Screen_BandCalendar{
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

let Screen_BandCalendar = new _Screen_BandCalendar();