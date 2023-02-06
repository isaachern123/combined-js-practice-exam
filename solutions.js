"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


//1.

function isBoolean(input) {
    return typeof input === 'boolean';
}

console.log(isBoolean(42))
console.log(isBoolean("true"));
console.log(isBoolean(false));

//2.

function hasBoolean(arr){
    // return (arr.some(el => typeof el === 'boolean'))
    return (arr.some(function (el) {
        return typeof el === 'boolean'
    }))
}

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true


//2.

const people = [ {
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];

function minAge(people) {
    return people.reduce((min, person) => Math.min(min, person.age), Infinity);

    // return people.reduce(function (min, person){
    //     return Math.min(min, person.age)
    // }, Infinity)
}

console.log(minAge(people)); // outputs 18

//3.

function longestName(people) {
    return people.reduce(function (longest,person) {
        return person.name.length > longest.length ? person.name : longest
    },'')
}

console.log(longestName(people)); // outputs Zanzibar


//4.

function createPerson(name,age) {
   return people.push({name, age})
}

const jimbob = createPerson("Jimbob", 22);
console.log(jimbob);
console.log(people)
/* outputs
{
name: "Jimbob",
age: 22
}
*/

//5.

$('#bold-btn').click(function (){
    this.style.fontWeight = "bold";
})

$('#reload-btn').click(function (){
    location.reload()
})

$('.loud-item').click(function () {
    alert($(this).text())
})

$('.data-item').hover(function () {
    $('#data-display').text($(this).data('id'))
})

$('#change-text-btn').click(function () {
    $(this).text($('#change-text-input').val())
})