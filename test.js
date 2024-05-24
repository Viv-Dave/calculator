function createGrid(rows, cols) {
    
    container.innerHTML = '';

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = i+1;
        container.appendChild(gridItem);
    }
}
createGrid(3, 3);
