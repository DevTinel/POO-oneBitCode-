class Reservation {
    constructor(guests, room, days) {
        this.guests = guests;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee;
    }

    static baseFee = 150;

    static showBasefee() {
        return ` A base de taxa é ${Reservation.baseFee}`;
    }
}

const r1 = new Reservation(2, 200, 5);

console.log(r1);
