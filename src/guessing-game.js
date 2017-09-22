class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max + 1;
    }

    guess() {
         return this.half = Math.floor((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.half + 1;
    }

    greater() {
        this.min = this.half;
    }
}

module.exports = GuessingGame;
