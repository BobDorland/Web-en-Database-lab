class User {

    constructor(userName, habitList, commentList) {

        this.userName = userName;
        this.habitList = habitList;
        this.commentList = comentList;

    }

    setUserName(newUserName) {

        this.userName = newUserName;

    }

    getUserName() {

        return this.userName;

    }

    setHabitList(newHabitList) {

        this.habitList = newHabitList;

    }

    getHabitList() {

        return this.habitList;

    }

    setCommentList(newCommentList) {

        this.commentList = newCommentList;

    }

    getCommentList() {

        return this.commentList;

    }

}