export default class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toString() {
        // first param value {}
        // second the replacer function
        // third the number of space
        return JSON.stringify({
            title: this.title,
            date: this.date
        }, null, 2)
    }
}