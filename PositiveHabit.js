class PositiveHabit extends Habit {

    constructor(nameInput, daysInput) {
        super(nameInput, daysInput);
    }

    equals(other) {
        if(this == other) {
            return true;
        }

        if(other instanceof PositiveHabit) {
            return ((this.getName == other.getName) && (this.getDays == other.getDays));
        }

        return false;
    }
}