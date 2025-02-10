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
    upLeftDiv.innerHTML = "";
    upRightDiv.innerHTML = "";
    downLeftDiv.innerHTML = "";
    downRightDiv.innerHTML = "";

    // Generate all four sections
    upRightDiv.innerHTML = upRight(height, colorOdd, colorEven, symbol);
    downRightDiv.innerHTML = downRight(height, colorOdd, colorEven, symbol);
    upLeftDiv.innerHTML = upLeft(height, colorOdd, colorEven, symbol);
    downLeftDiv.innerHTML = downLeft(height, colorOdd, colorEven, symbol);
}

// Upper Right Triangle (🔺)
function upRight(height, colorOdd, colorEven, symbol) {
    let rhombusHTML = "";
    for (let i = 1; i <= height; i++) {
        rhombusHTML += "<p style='text-align:center;'>";
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
        rhombusHTML += "<p style='text-align:center;'>";
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
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += "&nbsp;".repeat((height - i) * 2); 
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
        rhombusHTML += "<p style='text-align:center;'>";
        rhombusHTML += "&nbsp;".repeat((height - i) * 2); 
        for (let j = 0; j < i; j++) {
            let color = (j % 2 === 0) ? colorOdd : colorEven;
            rhombusHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += "</p>";
    }
    return rhombusHTML;
}
