class Comment {

    constructor(string, date, habit) {

        this.string = string;
        this.date = date;
        this.habit = habit;

    }

    setString(newString) {

        this.string = newString;

    }

    getString() {

        return this.string;

    }

    setDate(newDate) {

        this.date = newDate;

    }

    getDate() {

        return this.date;

    }

    setHabit(newHabit) {

        this.habit = newHabit;

    }

    getHabit() {

        return this.habit;

    }


    // checks if another object is a Comment and if two comments are equal
    equals(other) {

        if(this === other) {

            return true;

        }

        if(other instanceof Comment) {

            return(this.string === other.string && this.date === other.date && this.habit === other.habit);

        }

        return false;

    }

}