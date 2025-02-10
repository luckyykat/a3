function generateRhombus() {
    console.log("Script is running!"); // Debugging check

    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    console.log(`Height: ${height}, Colors: ${colorOdd}, ${colorEven}, Symbol: ${symbol}`);

    let outputDiv = document.getElementById("output");
    if (!outputDiv) {
        console.error("Error: Output div not found!");
        return;
    }

    outputDiv.innerHTML = ""; // Clear previous output
    let rhombusHTML = "";

    // Generate top half
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p style='text-align:center'>";
        rhombusHTML += createLeftSide(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += createRightSide(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    // Generate bottom half
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p style='text-align:center'>";
        rhombusHTML += createLeftSide(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += createRightSide(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    console.log("Rhombus generated successfully!");
    outputDiv.innerHTML = rhombusHTML;
}

// Left side of rhombus (upLeft & downLeft)
function createLeftSide(row, height, colorOdd, colorEven, symbol) {
    let leftHTML = "";
    // Add spaces for alignment
    for (let j = 0; j < height - row; j++) {
        leftHTML += `<span style="visibility:hidden;">${symbol}</span>`;
    }
    // Add symbols
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        leftHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return leftHTML;
}

// Right side of rhombus (upRight & downRight)
function createRightSide(row, colorOdd, colorEven, symbol) {
    let rightHTML = "";
    // Add symbols
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        rightHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return rightHTML;
}
