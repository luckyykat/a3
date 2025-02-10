function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    // Clear previous output
    document.getElementById("output").innerHTML = "";

    let rhombusHTML = "";

    // Generate top half (upLeft + upRight)
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p style='text-align:center'>";
        rhombusHTML += createLeftSide(i, height, colorOdd, colorEven, symbol); // Left side
        rhombusHTML += createRightSide(i, colorOdd, colorEven, symbol); // Right side
        rhombusHTML += "</p>";
    }

    // Generate bottom half (downLeft + downRight)
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p style='text-align:center'>";
        rhombusHTML += createLeftSide(i, height, colorOdd, colorEven, symbol); // Left side
        rhombusHTML += createRightSide(i, colorOdd, colorEven, symbol); // Right side
        rhombusHTML += "</p>";
    }

    document.getElementById("output").innerHTML = rhombusHTML;
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
