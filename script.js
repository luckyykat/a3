function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    let rhombusHTML = "";

    // Generate top-left and top-right
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += upLeft(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += upRight(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    // Generate bottom-left and bottom-right
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += downLeft(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += downRight(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    outputDiv.innerHTML = rhombusHTML;
}

// Upper Left Section
function upLeft(row, height, colorOdd, colorEven, symbol) {
    let leftHTML = "&nbsp;".repeat(height - row); // Add spaces for centering
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        leftHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return leftHTML;
}

// Upper Right Section
function upRight(row, colorOdd, colorEven, symbol) {
    let rightHTML = "";
    for (let j = 1; j < row; j++) { // Starts at 1 to avoid duplicate center
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        rightHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return rightHTML;
}

// Lower Left Section
function downLeft(row, height, colorOdd, colorEven, symbol) {
    let leftHTML = "&nbsp;".repeat(height - row); // Add spaces for centering
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        leftHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return leftHTML;
}

// Lower Right Section
function downRight(row, colorOdd, colorEven, symbol) {
    let rightHTML = "";
    for (let j = 1; j < row; j++) { // Starts at 1 to avoid duplicate center
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        rightHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return rightHTML;
}
