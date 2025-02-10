function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    // Clear previous output
    document.getElementById("upLeft").innerHTML = "";
    document.getElementById("upRight").innerHTML = "";
    document.getElementById("downLeft").innerHTML = "";
    document.getElementById("downRight").innerHTML = "";

    // Generate all four sections
    document.getElementById("upRight").innerHTML = upRight(height, colorOdd, colorEven, symbol);
    document.getElementById("downRight").innerHTML = downRight(height, colorOdd, colorEven, symbol);
    document.getElementById("upLeft").innerHTML = upLeft(height, colorOdd, colorEven, symbol);
    document.getElementById("downLeft").innerHTML = downLeft(height, colorOdd, colorEven, symbol);
}

// Upper Right Triangle (🔺)
function upRight(height, colorOdd, colorEven, symbol) {
    let rhombusHTML = "";
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p>";
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }
    return rhombusHTML;
}

// Lower Right Triangle (🔻)
function downRight(height, colorOdd, colorEven, symbol) {
    let rhombusHTML = "";
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p>";
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }
    return rhombusHTML;
}

// Upper Left Triangle (🔺)
function upLeft(height, colorOdd, colorEven, symbol) {
    let rhombusHTML = "";
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p>";
        for (let j = 0; j < height - i; j++) {
            rhombusHTML += `<span style="visibility:hidden;">${symbol}</span>`; // Adds spacing
        }
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }
    return rhombusHTML;
}

// Lower Left Triangle (🔻)
function downLeft(height, colorOdd, colorEven, symbol) {
    let rhombusHTML = "";
    for (let i = height - 1; i > 0; i--) {
        rhombusHTML += "<p>";
        for (let j = 0; j < height - i; j++) {
            rhombusHTML += `<span style="visibility:hidden;">${symbol}</span>`; // Adds spacing
        }
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }
    return rhombusHTML;
}
