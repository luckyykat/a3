document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded!");
});

function generateRhombus() {
    let height = parseInt(document.getElementById("height").value);
    let colorOdd = document.getElementById("colorOdd").value;
    let colorEven = document.getElementById("colorEven").value;
    let symbol = document.getElementById("symbol").value;

    let rhombusDiv = document.getElementById("rhombusDisplay");

    if (!rhombusDiv) {
        console.error("Error: rhombus display div missing.");
        return;
    }

    // Clear previous output
    rhombusDiv.innerHTML = "";

    let rhombus = "";

    // Upper part of the rhombus
    for (let i = 1; i <= height; i++) {
        let spaces = "&nbsp;".repeat(height - i); // Adjusted spacing
        let row = buildSymbols(i, colorOdd, colorEven, symbol);
        rhombus += `<p style="font-family: monospace;">${spaces}${row}${spaces}</p>`;
    }

    // Lower part of the rhombus
    for (let i = height - 1; i > 0; i--) {
        let spaces = "&nbsp;".repeat(height - i); // Adjusted spacing
        let row = buildSymbols(i, colorOdd, colorEven, symbol);
        rhombus += `<p style="font-family: monospace;">${spaces}${row}${spaces}</p>`;
    }

    rhombusDiv.innerHTML = rhombus;
}

// Function to generate colored symbols
function buildSymbols(count, colorOdd, colorEven, symbol) {
    let row = "";
    for (let j = 0; j < count; j++) {
        let color = (j % 2 === 0) ? colorOdd : colorEven;
        row += `<span style="color:${color};">${symbol}&nbsp;</span>`;
    }
    return row;
}
