function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    let rhombusHTML = "";

    // Generate top-left and top-right (upper part of rhombus)
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += upLeft(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += upRight(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    // Generate bottom-left and bottom-right (lower part of rhombus)
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += downLeft(i, height, colorOdd, colorEven, symbol);
        rhombusHTML += downRight(i, colorOdd, colorEven, symbol);
        rhombusHTML += "</p>";
    }

    outputDiv.innerHTML = rhombusHTML;
}

// Upper Left Section (adds spaces for centering)
function upLeft(row, height, colorOdd, colorEven, symbol) {
    let leftHTML = "&nbsp;".repeat((height - row) * 2); // Double the spacing for centering
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        leftHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return leftHTML;
}

// Upper Right Section (connects to left side)
function upRight(row, colorOdd, colorEven, symbol) {
    let rightHTML = "";
    for (let j = 0; j < row - 1; j++) { // Start at 0 to connect with left side
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        rightHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return rightHTML;
}

// Lower Left Section (adds spaces for centering)
function downLeft(row, height, colorOdd, colorEven, symbol) {
    let leftHTML = "&nbsp;".repeat((height - row) * 2); // Double the spacing for centering
    for (let j = 0; j < row; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        leftHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return leftHTML;
}

// Lower Right Section (connects to left side)
function downRight(row, colorOdd, colorEven, symbol) {
    let rightHTML = "";
    for (let j = 0; j < row - 1; j++) { // Start at 0 to connect with left side
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        rightHTML += `<span style="color:${color};">${symbol}</span>`;
    }
    return rightHTML;
}
