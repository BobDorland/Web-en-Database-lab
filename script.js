var habits = [];
var list = new HabitList(habits);

function addPrompt() {
    window.open("newHabit.html", "Window", "height=500, width=600");
}

function deletePrompt() {
    window.open("deleteHabit.html", "Window", "height=500, width=600");
}

function editPrompt() {
    window.open("editHabit.html", "Window", "height=500, width=600");
}

function addForm() {
    //TODO add Habit to database
    window.close();
}

function deleteForm() {
    //TODO delete selected Habits from database
    window.close();
}

function editForm() {
    //TODO edit a specific Habit
    window.close();
}