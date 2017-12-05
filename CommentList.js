class CommentList {

    constructor() {
    
        this.comments = new Array();

    }  

    setComments(newComments) {

        this.comments = newComments;

    }

    getComments() {

        return this.comments;

    }

    // adds a Comment to the CommentList
    addComent(comment) {

        this.comments.push(comment);

    }

    // removes a Comment from the CommentList
    removeComment(comment) {

        var index = this.comments.indexOf(comment);

        if(index >= 0) {

            this.comments.splice(index, 1);

        }

    }

}