/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { after } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, animalName) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === animalName) {
      return arr[i];
    }
  }
  return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animal, name, replacement){
  for (var i = 0; i < animal.length; i++){
    if (animal[i].name === name){
        animal[i] = replacement
    }
  }
   
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animal, namew){
  
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports.search = search || null;
  module.exports.replace = replace || null;
  module.exports.remove = remove || null;
  module.exports.add = add || null;
}
