const input = document.getElementById("userInput");
const para = document.getElementById("displayPara");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
const text = input.value;
para.textContent = text === "" ? "Please type something first!" : text;
            
        
});




