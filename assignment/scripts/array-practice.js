console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['ice cream', 'pasta', 'chips'];


// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log ( 'Food is:', favoriteFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');


// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log ('Number of favorite foods:', favoriteFoods.length)

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])
console.log ('First food is', favoriteFoods [0] )

// 3.a. TODO: Log the second animal in the array 
console.log ('Second food is', favoriteFoods [1] )

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log ('Last food is', favoriteFoods [2])

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log ('Last food is', favoriteFoods.length+1)


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);



// 4.a. TODO: Add a new food at the end of your array & log the array

favoriteFoods.push ('popcorn');
console.log ('Added an food to the end', favoriteFoods)

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favoriteFoods.pop();
console.log ('Removed the last food', removedFood);
console.log ( 'The foods are now', favoriteFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift ('sushi')
console.log (`Added food to the beginning:' ${favoriteFoods}`)

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = favoriteFoods.shift ();
console.log ('Remove the first food', removedFood);
console.log ('The foods are now', favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

removedFood = favoriteFoods[1];
//removedFood = favoriteFoods.shift (2);
console.log ('Remove the second food', removedFood)
console.log ('The foods are now', favoriteFoods)


// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
//sortfavoritefood = favoriteFoods.sort()
//console.log ('Sort favorite food in reverse', sortfavoritefood);
//console.log ('The foods are now', favoriteFoods );

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.



// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']