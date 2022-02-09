'use strict'
// build grid
let grid = document.getElementById('grid')

function buildGrid() {
    for (let i = 0; i < 6; i++){
        let row = document.createElement('div')
        row.className = 'row'
        row.id = `guess${i+1}`
        console.log(row.id)
        for (let j = 0; j < 5; j++){
            let cell = document.createElement('div')
            let letterGuess = document.createElement('input')
            letterGuess.setAttribute('type', 'text')
            letterGuess.setAttribute('maxlength', '1')
            letterGuess.className = 'letter-guess'
            cell.className = 'cell'
            cell.appendChild(letterGuess)
            row.appendChild(cell)
        }
        grid.appendChild(row) 
    }
    
}

buildGrid()

//input auto tab

//keyboard input

//game mechanics