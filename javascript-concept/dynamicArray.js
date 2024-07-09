// Write dynamic array in javascript

// Define and initialise dynamic array
const dynamicArray = [4, 6, 23, 45, 50];

// Add new element to the dynamic array
dynamicArray.push(70);

// Remove element from last
dynamicArray.pop();

// Get the realtime length of the array

const length = dynamicArray.length;

// Print the current length of dynamic array
console.log("Lenght of dynamicArray is - ", length);

// Iterate dynamicArray elements
dynamicArray.forEach((element) => {
  console.log(element);
});
