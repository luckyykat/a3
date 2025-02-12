document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded!");
});

function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    let upLeftDiv = document.getElementById("upLeft");
    let upRightDiv = document.getElementById("upRight");
    let downLeftDiv = document.getElementById("downLeft");
    let downRightDiv = document.getElementById("downRight");

    if (!upLeftDiv || !upRightDiv || !downLeftDiv || !downRightDiv) {
        console.error("Error: One or more required divs are missing.");
        return;
    }

    // Clear previous output
    upLeftDiv.textContent = "";
    upRightDiv.textContent = "";
    downLeftDiv.textContent = "";
    downRightDiv.textContent = "";

    // Generate all four sections
    upRightDiv.textContent = upRight(height, colorOdd, colorEven, symbol);
    downRightDiv.textContent = downRight(height, colorOdd, colorEven, symbol);
    upLeftDiv.textContent = upLeft(height, colorOdd, colorEven, symbol);
    downLeftDiv.textContent = downLeft(height, colorOdd, colorEven, symbol);
}

// Upper Right Triangle
function upRight(height, colorOdd, colorEven, symbol) {
    let rhombusText = "";
    for (let i = 1; i <= height; i++) {
        rhombusText += " ".repeat(height - i);
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusText += `%c${symbol} `;
        }
        rhombusText += "\n";
    }
    return rhombusText;
}

// Lower Right Triangle
function downRight(height, colorOdd, colorEven, symbol) {
    let rhombusText = "";
    for (let i = height - 1; i > 0; i--) {
        rhombusText += " ".repeat(height - i);
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusText += `%c${symbol} `;
        }
        rhombusText += "\n";
    }
    return rhombusText;
}

// Upper Left Triangle
function upLeft(height, colorOdd, colorEven, symbol) {
    let rhombusText = "";
    for (let i = 1; i <= height; i++) {
        rhombusText += " ".repeat(height - i);  // Fixed spacing
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusText += `%c${symbol} `;
        }
        rhombusText += "\n";
    }
    return rhombusText;
}

// Lower Left Triangle
function downLeft(height, colorOdd, colorEven, symbol) {
    let rhombusText = "";
    for (let i = height - 1; i > 0; i--) {
        rhombusText += " ".repeat(height - i);  // Fixed spacing
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusText += `%c${symbol} `;
        }
        rhombusText += "\n";
    }
    return rhombusText;
}
