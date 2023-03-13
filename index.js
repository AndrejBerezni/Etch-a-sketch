const grid = document.getElementById('grid');
const colorPicker = document.getElementById('color-picker');
const colorMode = document.getElementById('color-mode');
const rainbowMode = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const size = document.getElementById('size');
const sizeIndicator = document.getElementById('size-indicator');

colorMode.classList.add('active');

function createRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
}

sizeIndicator.innerText = `${size.value} x ${size.value}`

colorMode.addEventListener('click', () => {
    colorMode.classList.add('active');
    rainbowMode.classList.remove('active')
})

rainbowMode.addEventListener('click', () => {
    rainbowMode.classList.add('active');
    colorMode.classList.remove('active')
})

function initializeGrid() {
    grid.style.gridTemplateColumns = `repeat(${size.value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size.value}, 1fr)`;
    sizeIndicator.innerText = `${size.value} x ${size.value}`;
    for (let i = 0; i < size.value * size.value; i++) {
        let gridUnit = document.createElement('div');
        gridUnit.addEventListener('mouseover', () => {
            if (rainbowMode.classList.contains('active')){
                gridUnit.style.backgroundColor = createRandomColor();
            } else {
                gridUnit.style.backgroundColor = `${colorPicker.value}`
            }
        })
        grid.appendChild(gridUnit);
    }
}

initializeGrid()

size.addEventListener('change', () => {
    grid.innerHTML = '';
    initializeGrid();
});

clear.addEventListener('click', () => {
    grid.innerHTML = '';
    initializeGrid();
})