const gridContainer = document.querySelector(".grid-container");
const columnsInput = document.getElementById("columns");
const columnSizeInput = document.getElementById("columnSize");
const rowsInput = document.getElementById("rows");
const rowSizeInput = document.getElementById("rowSize");
const gridAutoFlowSelect = document.getElementById("gridAutoFlow");
const gapRange = document.getElementById("gap");
const gapValue = document.getElementById("gapValue");

// Add event listeners to update grid properties
function updateGrid() {
    const numColumns = columnsInput.value || 4;
    const columnSize = columnSizeInput.value || "1fr";
    const numRows = rowsInput.value || 4;
    const rowSize = rowSizeInput.value || "1fr";

    gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, ${columnSize})`;
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, ${rowSize})`;
    gridContainer.style.gridAutoFlow = gridAutoFlowSelect.value;
}

columnsInput.addEventListener("input", updateGrid);
columnSizeInput.addEventListener("input", updateGrid);
rowsInput.addEventListener("input", updateGrid);
rowSizeInput.addEventListener("input", updateGrid);
gridAutoFlowSelect.addEventListener("change", updateGrid);

gapRange.addEventListener("input", function () {
    gridContainer.style.gap = `${this.value}px`;
    gapValue.textContent = `${this.value}px`;
});

updateGrid();
