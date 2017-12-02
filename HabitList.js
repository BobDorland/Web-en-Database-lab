function HabitList(habitsInput) {
    this.habits = habitsInput;

    this.getHabits = function() {
        return this.habits;
    };

    this.setHabits = function(newHabits) {
        this.habits = newHabits;
    };

    this.addHabit = function(habit) {
        if(habit instanceof Habit) {
            this.habits.push(habit);
        }
    };

    this.getHabit = function(i) {
        return this.habits[i];
    };

    this.equals = function(other) {
        if(this == other) {
            return true;
        }

        if(other instanceof HabitList) {
            
            var res = true;

            for(var i; i < this.getHabits.length; i++) {
                if(!(this.getHabit(i).equals(other.getHabit(i)))) {
                    res = false;
                }
            }
        }

        return false;
    };
}