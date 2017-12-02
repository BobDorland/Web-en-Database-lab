function Habit(nameInput, daysInput) {

    this.name = nameInput;
    this.days = daysInput;

    this.getName = function() {
        return this.name;
    };

    this.setName = function(newName) {
        this.name = newName;
    };

    this.getDays = function() {
        return this.days;
    };

    this.setDate = function(newDate) {
        this.days = newDays;
    };

    this.equals = function(other) {
        if(this == other) {
            return true;
        }

        if(other instanceof Habit) {
            return (this.getName == other.getName && this.getDays == other.getDays);
        }

        return false;
    };
}