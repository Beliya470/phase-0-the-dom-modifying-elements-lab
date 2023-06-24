// Remove the 'main' element
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a 'newHeader' element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name

// Append 'newHeader' to the document body
document.body.appendChild(newHeader);
