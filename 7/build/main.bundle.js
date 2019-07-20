'use strict';

// ## Array Cardio Day 2
var people = [{ name: 'Wes', year: 1988 }, { name: 'Kait', year: 1986 }, { name: 'Irv', year: 1970 }, { name: 'Lux', year: 2015 }];
var comments = [{ text: 'Love this!', id: 523423 }, { text: 'Super good', id: 823423 }, { text: 'You are the best', id: 2039842 }, { text: 'Ramen is my fav food ever', id: 123523 }, { text: 'Nice Nice Nice!', id: 542328 }];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log("Is at least one person over 18?");
console.log(people.some(function (person) {
    return new Date().getFullYear() - person.year > 18;
}));

// Array.prototype.every() // is everyone 19 or older?
console.log("Is everyone over 18?");
console.log(people.every(function (person) {
    return new Date().getFullYear() - person.year > 18;
}));
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log("Find the comment with an ID of 823423");
console.log(comments.find(function (comment) {
    return comment.id == 823423;
}));
// Array.prototype.findIndex()
// Find the comment with this ID
console.log("Find the index of the comment with this ID");
var index = comments.findIndex(function (comment) {
    return comment.id == 823423;
});
console.log(index);

// delete the comment with the ID of 823423
console.log("Delete the comment with an ID of 823423");
comments.splice(index, 1);
console.log(comments);
