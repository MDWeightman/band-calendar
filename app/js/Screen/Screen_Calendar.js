class _Screen_Calendar {
    constructor() {
        this.name = "BandCalendar";
        this.table = new Table({});
	}
	
	getDates(){
		let dates = {}
		let now = new Date(); now.setHours(0,0,0,0);
		
        for (let k in Gigs.data) {
			for (let i in Gigs.data[k]) {
				dates[i] = Gigs.data[k][i];
				dates[i].band = Bands.data[k];
				dates[i].type = 'GIG';
				if(dates[i].date < now){
					delete dates[i];
				}
			}
		}
        for (let k in Holidays.data) {
			for (let i in Holidays.data[k]) {
				dates[i] = Holidays.data[k][i];
				dates[i].type = 'HOL';
				let days = this.getDays(dates[i]);
				let date = new Date(dates[i].date);
				for(let d = 0; d < days; d++){
					date.setDate(date.getDate()+1);
					dates[i+d] = JSON.parse(JSON.stringify(Holidays.data[k][i]));
					dates[i+d].date = date.getTime();
					dates[i+d].type = 'HOL';
				}
			}
		}

		dates = Utils.sortObjectOn(dates, "date");
		return dates;
	}

	getDays(event){
		return (((((event.end - event.date) / 1000) / 60) / 60) / 24)
	}

    renderTable() {
		let calendar = new DatePickerCalendar();
		let dates = this.getDates(); console.log(dates);
        for (let d in dates) {
			let event = dates[d];
			let row = new TableRow();
			let date = new Date(event.date);
			row.addColumn({
				style: 'width:100px;max-width:100px;vertical-align: top;',
				wrapperStyle: 'padding: 12px 12px;',
				padding: false,
				input: new GigDate({
					date: date.getDate(),
					month: calendar.monthsL[date.getMonth()],
					day: calendar.days[date.getDay()]
				})
			});
			row.addColumn({
				input: event.type == 'GIG'
				? new GigCard({
					band: event.band,
					data: event
				}) : new HolCard({
					colour: '#F44336',
					data: event
				})
			})

			this.table.addRow(row);
		}

        Application.workspace.innerHTML = this.table.render();
    }

    render() {
        let HTML = '';
        UI.Toolbar.setTitle("Calendar");
        UI.Toolbar.tabs.clear();

        this.renderTable();

        UI.render();
        UI.Dialog.clear();
    }
}

let Screen_Calendar = new _Screen_Calendar();