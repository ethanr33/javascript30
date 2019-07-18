'use strict';

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
//1. Give us all the inventors born in the 1500s
console.log('All inventors born in the 1500s:');
console.log(inventors.filter(function (person) {
  return Math.floor(person.year / 100) == 15;
}));

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

console.log('All inventors\' first and last names');
inventors.map(function (person) {
  return console.log(person.first + ' ' + person.last);
});

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

console.log('Sorted inventors from oldest to youngest');
console.log(inventors.sort(function (a, b) {
  return a.year - b.year;
}));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

console.log('Age of inventors when they died');
console.log(inventors.reduce(function (total, person) {
  return person.passed - person.year + total;
}, 0));

// 5. Sort the inventors by years lived
console.log('Inventors sorted by years lived, from least to greatest');
console.log(inventors.sort(function (a, b) {
  return a.passed - a.year - (b.passed - b.year);
}));

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log("People sorted by last name:");
console.log(people.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log("Instances of each value in array:");
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
var frequencies = {};

data.forEach(function (obj) {
  if (!frequencies.hasOwnProperty(obj)) {
    frequencies[obj] = 1;
  } else {
    frequencies[obj]++;
  }
});

console.log(frequencies);
