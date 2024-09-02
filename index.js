// Selecting the element with the id 'data'
let a = document.getElementById('data');

// Function to dynamically manipulate or return data from the element
function getDataContent() {
    // Accessing the inner text of the element and returning it
    return a.textContent;
}

// Calling the function and logging the result
console.log(getDataContent());
