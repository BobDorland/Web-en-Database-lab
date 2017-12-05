class HabitList {

    constructor(habitsInput) {
        this.habits = habitsInput;
    }

    getHabits() {
        return this.habits;
    }

    setHabits(newHabits) {
        this.habits = newHabits;
    }

    /**
     * Adds a new Habit to a HabitList
     * @param {Habit} newHabit 
     */
    addHabit(newHabit) {
        this.habits.push(newHabit);
    }

    /**
     * Retrieves a specific Habit from a HabitList
     * @param {int} i 
     */
    getHabit(i) {
        return this.habits[i];
    }

    /**
     * Returns a boolean indicating if a HabitList contains a specific Habit
     * @param {Habit} habit 
     */
    contains(habit) {
        return this.getHabits.contains(habit);
    }

    equals(other) {
        if(this === other) {
            return true;
        }

        if(other instanceof HabitList) {

            var res;

            if(this.length == other.length) {
                res = true;

                for(i = 0; i < this.habits.length;) {
                    if(this.getHabit(i) != other.getHabit(i)) {
                        res = false;
                    }
                }
            } else {
                res = false;
            }

            return res;
        }
    }
}