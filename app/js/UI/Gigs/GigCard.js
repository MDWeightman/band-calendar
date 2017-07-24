class GigCard {
    constructor(o) {
        this.band = o.band;
        this.data = o.data;
    }

    render() {
        return `
        <div class="gig-card" style="background-color:${this.band.colour}">
            <div class="gig-card-band">${this.data.band.name}</div>
            <div class="gig-card-location">${this.data.location}</div>
            <div class="gig-card-start">${this.data.startTime}</div>
        </div>`
    }
}

class HolCard {
    constructor(o) {
        this.colour = o.colour;
        this.data = o.data;
    }

    render() {
        return `
        <div class="gig-card" style="background-color:${this.colour}">
            <div class="gig-card-band">${this.data.name}</div>
            <div class="gig-card-location">${this.data.location}</div>
        </div>`
    }
}

class GigDate {
    constructor(o) {
        this.date = o.date;
        this.month = o.month;
        this.day = o.day;
    }

    render() {
        return `
        <div class="gig-date">
            <div class="gig-date-date">${this.date}</div>
            <div class="gig-date-month">${this.month}</div>
            <div class="gig-date-day">${this.day}</div>
        </div>`
    }
}