function randomRgbValue(){
    return Math.floor(Math.random() * 255);
}

function generateGrid(gridSize){
    for(let rows = 1; rows <= gridSize; rows++){

        const row = document.createElement("div");
        row.classList.add('row');
        row.setAttribute('id',`row ${rows}`)
        
        for(let columns = 1; columns <= gridSize; columns++){
            const column = document.createElement("div");
            column.classList.add('column');
            column.setAttribute('id', `column ${columns}`);
            
            column.addEventListener('mouseover', (event) => {
                if(event.target.style.backgroundColor === ''){
                    event.target.style.backgroundColor = `rgb(${randomRgbValue()},${randomRgbValue()},${randomRgbValue()})`;
                }
                if (parseFloat(getComputedStyle(column).opacity) < 1.0){
                    let opacity = parseFloat(getComputedStyle(column).opacity);
                    opacity += 0.1;
                    column.style.opacity = opacity;
                }
            });
            row.appendChild(column);
        }
        colorGrid.appendChild(row);
    }
}

const colorGrid = document.querySelector(".color-grid");
const gridSizeButton = document.querySelector(".change-button");

gridSizeButton.addEventListener('click', () => {
        validGridSize = false;

        while(!validGridSize){
            gridSize = parseInt(prompt("Enter the number of squares(1 to 100)",4));
            if (gridSize <= 100){
                validGridSize = true;
            }
            else{
                alert("Enter a valid number (1 to 100) Inclusive")
            }
        }
        while (colorGrid.firstChild) {
            colorGrid.removeChild(colorGrid.firstChild);
        }
        generateGrid(gridSize);
    }
)

generateGrid(4);