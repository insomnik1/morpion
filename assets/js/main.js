const grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
let turn = 1


const container = document.getElementById("grille")

grid.forEach((row, rowIndex) => {
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")

    row.forEach((column, colIndex) => {
        const columnDiv = document.createElement("div")
        columnDiv.classList.add("column")
        rowDiv.appendChild(columnDiv)
        columnDiv.addEventListener('click', () => {
            
            if (columnDiv.textContent == "") {
                play(columnDiv, rowIndex, colIndex)

            }

        })
    })
    container.appendChild(rowDiv)
})

function play(columnDiv, rowIndex, colIndex) {
    const btnPOne = document.createElement('img')
    btnPOne.src = `./assets/images/${turn % 2 == 0 ? 'croix.webp' : 'rondelle.png'}`
    grid[rowIndex][colIndex] = turn % 2 == 0 ? "X" : "O"
    columnDiv.appendChild(btnPOne)
    turn++

    checkdraw()

    console.log(grid);

}


function checkdraw() {

    if (turn >= 10) {
        const draw = document.createElement('p')

        draw.textContent = "Egalité , merci de rejouer"
        document.querySelector("#win").appendChild(draw)
    }

}



/*
function win(columnDiv, rowIndex, colIndex) {
    const winner = document.createElement('p')

    if (rowIndex == rowIndex + 1 == rowIndex + 2) {
        winner = "Tu as gagné"
        if (colIndex == colIndex + 1 == colIndex + 2) {
            winner = "Tu as gagné"
            if ([0, 0] == [1, 1] == [2, 2]) {
                winner = "Tu as gagné"
                if ([2, 0] == [1, 1] == [0, 2]) {
                    winner = "Tu as gagné"
                }
            }
        }
    }

}

win()
*/
