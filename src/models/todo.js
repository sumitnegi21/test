class Todo {
    constructor(title, description = '', completed = false) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

module.exports = Todo;