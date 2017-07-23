class _Screen_Calendar {
    constructor() {
        this.name = "BandCalendar";
        this.table = new Table({});
    }

    renderTable() {
        let calendar = new DatePickerCalendar();
        for (let b in Gigs.data) {
            for (let k in Gigs.data[b]) {
                let gig = Gigs.data[b][k];
                let row = new TableRow();
                let date = new Date(gig.date);
                row.addColumn({
                    style: 'width:100px;max-width:100px;vertical-align: top;',
                    wrapperStyle: 'padding: 12px 12px;',
                    padding: false,
                    input: new GigDate({
                        date: date.getDate(),
                        month: calendar.monthsL[date.getMonth()]
                    })
                });
                row.addColumn({
                    input: new GigCard({
                        band: Bands.data[b],
                        data: gig
                    })
                })

                this.table.addRow(row);
            }
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