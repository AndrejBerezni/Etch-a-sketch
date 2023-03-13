const grid = document.getElementById('grid');
const colorPicker = document.getElementById('color-picker');
const colorMode = document.getElementById('color-mode');
const raindbowMode = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const size = document.getElementById('size');
const sizeIndicator = document.getElementById('size-indicator');

sizeIndicator.innerText = `${size.value} x ${size.value}`

let initializeGrid = () => {
    for (let i = 0; i < size.value * size.value; i++) {
        let gridUnit = document.createElement('div');
        gridUnit.style.height = `${grid.clientHeight / size.value}`;
        gridUnit.style.width = `${grid.clientWidth / size.value}`;
        // gridUnit.style.border = '1px solid black';
        grid.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size.value}, 1fr)`
        sizeIndicator.innerText = `${size.value} x ${size.value}`
        grid.appendChild(gridUnit);
    }
}

initializeGrid()

size.addEventListener('change', () => {
    grid.innerHTML = '';
    initializeGrid();
});