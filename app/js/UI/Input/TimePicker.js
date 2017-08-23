class TimePicker extends TextInput {
    constructor(o) {
        super(o);
        this.value = o ? o.value || null : null;
        this.clock = new TimePickerClock({
            picker: this,
            value: this.value
        });
    }

    // addEventListener() {
    //     setTimeout(() => {
    //         if (document.getElementById(this.id)) {
    //             document.getElementById(this.id).addEventListener("click", (event) => {
    //                 event.stopImmediatePropagation();
    //                 this.dialog();
    //             });
    //         }
    //     }, 500);
    //     return this;
    // }

    dialog() {
        UI.Dialog.show(new DialogTimePicker({
            clock: this.clock
        }));
    }
    render() {
        super.render();
        return `
		<div class="data-input-container">
			<input type="time" style="${this.style}" class="data-input ${this.error ? "error" : ""}" id="${this.id}" value="${this.value}" />
		</div>`
    }
}

class TimePickerClock {
    constructor(o) {
        this.picker = o.picker;
        this.value = o.value;
    }

    getHours() {
        return this.value.split(':')[0]
    }

    getMinutes() {
        return this.value.split(':')[1]
    }

    renderHours() {
        return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" data-type="hours">
			<circle fill="#dddddd" cx="100" cy="100" r="90"/>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" d="M99,12c8.256,0,16.25,1.117,23.846,3.199L100,101L77.014,14.71C84.051,12.943,91.415,12,99,12z"/>
					<rect class="clock-number-line" x="99" y="20" width="2" height="80"/>			
					<circle class="clock-number-circle" cx="100" cy="21" r="10"/>
					<text transform="matrix(1 0 0 1 94 24)" font-family="Roboto" font-size="10">12</text> 
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M54.875,24.322c7.15-4.128,14.632-7.158,22.25-9.152l23.116,85.729L37.189,37.662C42.4,32.613,48.306,28.114,54.875,24.322z"/>
					<rect class="clock-number-line" x="79" y="25.359" transform="matrix(0.8661 -0.4999 0.4999 0.8661 -21.9599 48.747)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="60" cy="31" r="10"/>
					<text transform="matrix(1 0 0 1 54.5 35)" font-family="Roboto" font-size="10">11</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M22.822,57.055c4.128-7.149,9.093-13.515,14.693-19.051l62.883,62.686L14.176,77.451C16.164,70.473,19.029,63.624,22.822,57.055z"/>
					<rect class="clock-number-line" x="64.359" y="40" transform="matrix(0.4999 -0.8661 0.8661 0.4999 -36.6008 96.6118)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="31" cy="60" r="10"/>
					<text transform="matrix(1 0 0 1 25 63)" font-family="Roboto" font-size="10">10</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" d="M11.43,101.43c0-8.255,1.117-16.25,3.199-23.846l85.801,22.846l-86.29,22.986C12.373,116.379,11.43,109.015,11.43,101.43z"/>
					<rect class="clock-number-line" x="20" y="99" width="80" height="2"/>		
					<circle class="clock-number-circle" cx="21" cy="100" r="10"/>
					<text transform="matrix(1 0 0 1 18.5 103)" font-family="Roboto" font-size="10">9</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" d="M23.752,145.555c-4.128-7.149-7.158-14.632-9.153-22.25l85.729-23.115L37.092,163.24C32.043,158.03,27.544,152.124,23.752,145.555z"/>
					<rect class="clock-number-line" x="64.359" y="80" transform="matrix(-0.4999 -0.8661 0.8661 -0.4999 -5.8952 236.5961)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="31" cy="140" r="10"/>
					<text transform="matrix(1 0 0 1 28 143)" font-family="Roboto" font-size="10">8</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M56.485,177.607c-7.15-4.128-13.515-9.093-19.052-14.692l62.686-62.883l-23.239,86.222C69.903,184.267,63.054,181.4,56.485,177.607z"/>
					<rect class="clock-number-line" x="79" y="94.641" transform="matrix(-0.866 -0.5001 0.5001 -0.866 81.9434 291.2441)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="60" cy="169" r="10"/>
					<text transform="matrix(1 0 0 1 57 172)" font-family="Roboto" font-size="10">7</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" d="M99,189c8.256,0,16.25-1.117,23.846-3.199L100,100l-22.986,86.29C84.051,188.057,91.415,189,99,189z"/>
					<rect class="clock-number-line" x="99" y="100" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="100" cy="179" r="10"/>
					<text transform="matrix(1 0 0 1 97 182)" font-family="Roboto" font-size="10">6</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M143.375,177.608c7.149-4.128,13.514-9.093,19.051-14.693l-62.685-62.883l23.239,86.222C129.957,184.266,136.806,181.4,143.375,177.608z"/>
					<rect class="clock-number-line" x="119" y="94.641" transform="matrix(0.8661 -0.4999 0.4999 0.8661 -51.2384 78.0226)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="140" cy="169" r="10"/>
					<text transform="matrix(1 0 0 1 137 172.5)" font-family="Roboto" font-size="10">5</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M176.108,145.556c4.128-7.15,7.157-14.632,9.152-22.251l-85.729-23.116l63.236,63.051C167.817,158.029,172.315,152.124,176.108,145.556z"/>
					<rect class="clock-number-line" x="133.641" y="80" transform="matrix(0.4999 -0.8661 0.8661 0.4999 -36.5972 176.6185)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="168" cy="140" r="10"/>
					<text transform="matrix(1 0 0 1 165 143.5)" font-family="Roboto" font-size="10">4</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" d="M188.431,101.43c-0.001-8.256-1.118-16.25-3.199-23.846L99.43,100.43l86.29,22.985C187.487,116.378,188.43,109.015,188.431,101.43z"/>
					<rect class="clock-number-line" x="100" y="99" width="80" height="2"/>		
					<circle class="clock-number-circle" cx="179" cy="100" r="10"/>
					<text transform="matrix(1 0 0 1 176.5 103)" font-family="Roboto" font-size="10">3</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M177.039,57.055c-4.129-7.149-9.094-13.514-14.693-19.051l-62.884,62.686l86.222-23.239C183.696,70.472,180.83,63.624,177.039,57.055z"/>
					<rect class="clock-number-line" x="133.641" y="40" transform="matrix(-0.4998 -0.8661 0.8661 -0.4998 132.6462 236.6018)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="168" cy="60.271" r="10"/>
					<text transform="matrix(1 0 0 1 165.5 63)" font-family="Roboto" font-size="10">2</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" d="M144.985,24.321c-7.15-4.127-14.632-7.156-22.25-9.152l-23.116,85.729l63.051-63.236C157.46,32.612,151.554,28.114,144.985,24.321z"/>
					<rect class="clock-number-line" x="119" y="25.359" transform="matrix(-0.8659 -0.5003 0.5003 -0.8659 191.2051 181.9848)" width="2" height="80"/>		
					<circle class="clock-number-circle" cx="139" cy="32.271" r="10"/>
					<text transform="matrix(1 0 0 1 136.5 35)" font-family="Roboto" font-size="10">1</text>
				</g>
			</g>
			<circle class="clock-center" cx="100" cy="100" r="4"/>
		</svg>`
    }

    renderMinutes() {
        return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" data-type="minutes">
			<circle fill="#dddddd" cx="100" cy="100" r="90"/>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M99,12c8.256,0,16.25,1.117,23.846,3.199L100,101L77.014,14.71C84.051,12.943,91.415,12,99,12z"/>
					<rect class="clock-number-line" x="99" y="20" fill="#0288d1" width="2" height="80"/>			
					<circle class="clock-number-circle" fill="#0288d1" cx="100" cy="21" r="10"/>
					<text transform="matrix(1 0 0 1 97.5 24)" font-family="Roboto" font-size="10">0</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M54.875,24.322c7.15-4.128,14.632-7.158,22.25-9.152l23.116,85.729L37.189,37.662C42.4,32.613,48.306,28.114,54.875,24.322z"/>
					<rect class="clock-number-line" x="79" y="25.359" transform="matrix(0.8661 -0.4999 0.4999 0.8661 -21.9599 48.747)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="60" cy="31" r="10"/>
					<text transform="matrix(1 0 0 1 55 35)" font-family="Roboto" font-size="10">55</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M22.822,57.055c4.128-7.149,9.093-13.515,14.693-19.051l62.883,62.686L14.176,77.451C16.164,70.473,19.029,63.624,22.822,57.055z"/>
					<rect class="clock-number-line" x="64.359" y="40" transform="matrix(0.4999 -0.8661 0.8661 0.4999 -36.6008 96.6118)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="31" cy="60" r="10"/>
					<text transform="matrix(1 0 0 1 26 63)" font-family="Roboto" font-size="10">50</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M11.43,101.43c0-8.255,1.117-16.25,3.199-23.846l85.801,22.846l-86.29,22.986C12.373,116.379,11.43,109.015,11.43,101.43z"/>
					<rect class="clock-number-line" x="20" y="99" fill="#0288d1" width="80" height="2"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="21" cy="100" r="10"/>
					<text transform="matrix(1 0 0 1 16 103)" font-family="Roboto" font-size="10">45</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M23.752,145.555c-4.128-7.149-7.158-14.632-9.153-22.25l85.729-23.115L37.092,163.24C32.043,158.03,27.544,152.124,23.752,145.555z"/>
					<rect class="clock-number-line" x="64.359" y="80" transform="matrix(-0.4999 -0.8661 0.8661 -0.4999 -5.8952 236.5961)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="31" cy="140" r="10"/>
					<text transform="matrix(1 0 0 1 26 143)" font-family="Roboto" font-size="10">40</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M56.485,177.607c-7.15-4.128-13.515-9.093-19.052-14.692l62.686-62.883l-23.239,86.222C69.903,184.267,63.054,181.4,56.485,177.607z"/>
					<rect class="clock-number-line" x="79" y="94.641" transform="matrix(-0.866 -0.5001 0.5001 -0.866 81.9434 291.2441)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="60" cy="169" r="10"/>
					<text transform="matrix(1 0 0 1 55 172)" font-family="Roboto" font-size="10">35</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M99,189c8.256,0,16.25-1.117,23.846-3.199L100,100l-22.986,86.29C84.051,188.057,91.415,189,99,189z"/>
					<rect class="clock-number-line" x="99" y="100" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="100" cy="179" r="10"/>
					<text transform="matrix(1 0 0 1 95 182)" font-family="Roboto" font-size="10">30</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M143.375,177.608c7.149-4.128,13.514-9.093,19.051-14.693l-62.685-62.883l23.239,86.222C129.957,184.266,136.806,181.4,143.375,177.608z"/>
					<rect class="clock-number-line" x="119" y="94.641" transform="matrix(0.8661 -0.4999 0.4999 0.8661 -51.2384 78.0226)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="140" cy="169" r="10"/>
					<text transform="matrix(1 0 0 1 135 172.5)" font-family="Roboto" font-size="10">25</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M176.108,145.556c4.128-7.15,7.157-14.632,9.152-22.251l-85.729-23.116l63.236,63.051C167.817,158.029,172.315,152.124,176.108,145.556z"/>
					<rect class="clock-number-line" x="133.641" y="80" transform="matrix(0.4999 -0.8661 0.8661 0.4999 -36.5972 176.6185)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="168" cy="140" r="10"/>
					<text transform="matrix(1 0 0 1 163 143.5)" font-family="Roboto" font-size="10">20</text>
				</g>
			</g>
			<g class="clock-number-container">
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M188.431,101.43c-0.001-8.256-1.118-16.25-3.199-23.846L99.43,100.43l86.29,22.985C187.487,116.378,188.43,109.015,188.431,101.43z"/>
					<rect class="clock-number-line" x="100" y="99" fill="#0288d1" width="80" height="2"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="179" cy="100" r="10"/>
					<text transform="matrix(1 0 0 1 173.5 103)" font-family="Roboto" font-size="10">15</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M177.039,57.055c-4.129-7.149-9.094-13.514-14.693-19.051l-62.884,62.686l86.222-23.239C183.696,70.472,180.83,63.624,177.039,57.055z"/>
					<rect class="clock-number-line" x="133.641" y="40" transform="matrix(-0.4998 -0.8661 0.8661 -0.4998 132.6462 236.6018)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="168" cy="60.271" r="10"/>
					<text transform="matrix(1 0 0 1 162.5 63.5)" font-family="Roboto" font-size="10">10</text>
				</g>
			</g>
			<g class="clock-number-container">		
				<g class="clock-number">
					<path class="clock-number-overlay" fill="#dddddd" d="M144.985,24.321c-7.15-4.127-14.632-7.156-22.25-9.152l-23.116,85.729l63.051-63.236C157.46,32.612,151.554,28.114,144.985,24.321z"/>
					<rect class="clock-number-line" x="119" y="25.359" transform="matrix(-0.8659 -0.5003 0.5003 -0.8659 191.2051 181.9848)" fill="#0288d1" width="2" height="80"/>		
					<circle class="clock-number-circle" fill="#0288d1" cx="139" cy="32.271" r="10"/>
					<text transform="matrix(1 0 0 1 136.5 35.5)" font-family="Roboto" font-size="10">5</text>
				</g>
			</g>
			<circle fill="#0288d1" cx="100" cy="100" r="4"/>
		</svg>`;
    }

    confirm() {
        this.picker.value = this.value;
    }

    setValue(value) {
        this.value = value;
    }

    setHours(hours) {
        let mins = this.value.split(':')[1];
        hours = ('00' + hours).slice(-2);
        this.setValue(`${hours}:${mins}`);
        document.getElementById('time-picker-header-hours').innerHTML = hours;
        this.showMinutes();
    }
    setMinutes(mins) {
        let hours = this.value.split(':')[0];
        mins = ('00' + mins).slice(-2);
        this.setValue(`${hours}:${mins}`);
        document.getElementById('time-picker-header-minutes').innerHTML = mins;
        this.showMinutes();
    }

    showHours() {
        document.getElementById('time-picker-clock-hours').classList.add('active');
        document.getElementById('time-picker-clock-minutes').classList.remove('active');
    }
    showMinutes() {
        document.getElementById('time-picker-clock-hours').classList.remove('active');
        document.getElementById('time-picker-clock-minutes').classList.add('active');
    }

    addEventListener() {
        setTimeout(() => {
            document.querySelectorAll('.clock-number-container').forEach(elem => {
                elem.addEventListener('click', (event) => {
                    let target = event.currentTarget;
                    let value = target.children[0].children[3].innerHTML;
                    if (target.parentElement.dataset.type == "hours") {
                        UI.Dialog.current.clock.setHours(value);
                    } else {
                        UI.Dialog.current.clock.setMinutes(value);
                    }
                })
            })
        }, 500);
        return this;
    }

    render() {
        this.addEventListener();
        return `
		<div class="time-picker-container">
			<div class="time-picker-header">
				<div id="time-picker-header-hours" class="time-picker-header-time" onclick="UI.Dialog.current.clock.showHours();">${this.getHours()}</div>
				<div id="time-picker-header-minutes" class="time-picker-header-time" onclick="UI.Dialog.current.clock.showMinutes();">${this.getMinutes()}</div>
			</div>
			<div class="time-picker-clock-container">
				<div id="time-picker-clock-hours" class="time-picker-clock active">${this.renderHours()}</div>
				<div id="time-picker-clock-minutes" class="time-picker-clock">${this.renderMinutes()}</div>
			</div>
		</div>`;
    }


}

class DialogTimePicker extends DialogItem {
    constructor(o) {
        super(o);
        this.clock = o.clock;
        this.padding = false,
            this.actions = new DialogActions([
                new DialogAction({
                    label: 'CANCEL',
                    event: () => {
                        UI.Dialog.clear();
                    }
                }),
                new DialogAction({
                    label: 'OK',
                    event: () => {
                        this.clock.confirm();
                        Application.Screen.current.render();
                        UI.Dialog.clear();
                    }
                })
            ])
    }

    render() {
        super.render(this.clock.render());
    }
}