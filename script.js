// Prompt the user to enter the item they want to delete and store it in the variable 'addData'
var addData = prompt("Enter item Which you want to delete?");

// Define an array 'arr' with initial elements: "one", "two", "three", "four"
var arr = ["one", "two", "three", "four"];

// Find the index of the item to be deleted in the array 'arr' and store it in 'arrData'
// If the item is not found, indexOf returns -1
var arrData = arr.indexOf(addData);

// Check if the item to be deleted was found in the array (index is not -1)
if (arrData !== -1) {
    // If the item is found, remove it from the array using splice
    // This code mistakenly tries to remove all items up to 'arrData' instead of just the item at 'arrData'
    arr.splice(0, arrData);
} else {
    // If the item is not found, alert the user with "User Data not Found"
    alert("User Data not Foud");
}

// Log the updated array to the console
console.log(arr);
