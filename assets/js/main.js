let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
let turn = 0
let gameActive = true

const container = document.getElementById("grille")
const msgWin = document.getElementById("win")
const restartButton = document.getElementById("restart-button")


function generate() {
    container.innerHTML = ""
    grid.forEach((row, rowIndex) => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row")

        row.forEach((column, colIndex) => {
            const columnDiv = document.createElement("div")
            columnDiv.classList.add("column")
            rowDiv.appendChild(columnDiv)
            columnDiv.addEventListener('click', () => {
                if (gameActive && columnDiv.innerHTML === "") {
                    play(columnDiv, rowIndex, colIndex)
                }
            })
        })
        container.appendChild(rowDiv)
    })
}

function play(columnDiv, rowIndex, colIndex) {
    const winner = turn % 2 === 0 ? "O" : "X"
    const btnPOne = document.createElement('img')
    btnPOne.src = `./assets/images/${turn % 2 === 0 ? 'rondelle.png' : 'croix.webp'}`
    grid[rowIndex][colIndex] = winner
    columnDiv.appendChild(btnPOne)
    turn++

    if (checkWin(winner)) {
        displayMessage(`Le joueur ${winner} a gagné !`)
        gameActive = false
    } else if (checkDraw()) {
        displayMessage("Égalité, merci de rejouer !")
        gameActive = false
    }
}

function checkWin(winner) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === winner && grid[i][1] === winner && grid[i][2] === winner) {
            return true

        }
    }

    for (let i = 0; i < grid.length; i++) {
        if (grid[0][i] === winner && grid[1][i] === winner && grid[2][i] === winner) {
            return true

        }
    }

    if (grid[0][0] === winner && grid[1][1] === winner && grid[2][2] === winner) {
        return true

    }
    if (grid[0][2] === winner && grid[1][1] === winner && grid[2][0] === winner) {
        return true

    }
    return false;

}

function checkDraw() {
    return turn === 9
}

function displayMessage(message) {
    msgWin.innerHTML = `<p>${message}</p>`

}

function resetGame() {
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]

    turn = 0
    gameActive = true
    msgWin.innerHTML = ""
    generate()
}

generate()

restartButton.addEventListener("click", resetGame);




function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function playCpu(columnDiv, rowIndex, colIndex) {
    
}