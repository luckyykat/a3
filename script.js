function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    let rhombusHTML = "";

    // Upper half of rhombus
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p>";
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }

    // Lower half of rhombus
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p>";
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }

    outputDiv.innerHTML = rhombusHTML;
}
