'use strict';

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

// function Post2(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post2.prototype.edit = function (text) {
//     this.text = text;
// }

// function AttachedPost2(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }

// AttachedPost2.prototype = Object.create(Post2.prototype);
// AttachedPost2.prototype.constructor = AttachedPost2;

// AttachedPost2.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// }

const post22 = new Post('apple', 'lorem', '11.12.2022');
console.log(post22);
post22.edit('give me your money');
console.log(post22);