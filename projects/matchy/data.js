/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog";
animal["name"] = "Rufus";
animal["noises"] = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[noises.length] = "woof";
noises.push("bark");
noises.unshift("howl");
noises[noises.length] = "woof woof";

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
///////////////////////////////////////////////////////////////////
animal.noises = noises;
animal["noises"].push("guau");
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *bracket syntax
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"],
};
animals.push(duck);

var fish = {
  species: "fish",
  name: "Galileo",
  noises: ["gloop", "goop"],
};

var horse = {
  species: "horse",
  name: "Gaston",
  noises: ["neigh", "hough"],
};

animals.push(horse);
animals.push(fish);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// it would be easier to use an array to sore the data 
var friends = [];

function getRandom(array){
 
 
  return Math.floor(Math.random() * array.length)
}
friends.push(animals[3].name)

console.log(friends)
animals[1].friends = friends

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports.animal = animal || null;
  module.exports.noises = noises || null;
  module.exports.animals = animals || null;
  module.exports.friends = friends || null;
  module.exports.getRandom = getRandom || null;
}
