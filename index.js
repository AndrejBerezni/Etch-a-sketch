const grid = document.getElementById('grid');
const colorPicker = document.getElementById('color-picker');
const colorMode = document.getElementById('color-mode');
const raindbowMode = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const size = document.getElementById('size');
const sizeIndicator = document.getElementById('size-indicator');

sizeIndicator.innerText = `${size.value} x ${size.value}`

function initializeGrid () {
    grid.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
        sizeIndicator.innerText = `${size.value} x ${size.value}`;
    for (let i = 0; i < size.value * size.value; i++) {
        let gridUnit = document.createElement('div');         
        grid.appendChild(gridUnit);
    }
}

initializeGrid()

size.addEventListener('change', () => {
    grid.innerHTML = '';
    initializeGrid();
});