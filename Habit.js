class Habit {

    constructor(nameInput, daysInput) {
        this.name = nameInput;
        this.days = daysInput;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDays() {
        return this.days;
    }

    setDays(newDays) {
        this.days = newDays;
    }
}