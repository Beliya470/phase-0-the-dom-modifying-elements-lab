// Remove the 'main' element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a 'newHeader' element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Anne Anziya is the champion"; 

// Append 'newHeader' to the document body
document.body.appendChild(newHeader);
