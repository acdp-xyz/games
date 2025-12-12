//GAME BOARD GRID ARRAY
const gameBoardGridColumn = ["A","B","C"]
const gameBoardGridRow = [1,2,3]
let gameBoardGrid = []
let gameBoardGridState = []
let gameBoardGridHistory = []
let gameBoardGridCursor = []
let gameBoardGridCursorSize = 1

//GAME PIECES / TOKENS
let gameBoardToken = ["X","O"]

//GAME PLAYERS
let playerTeam = ["A","B"]
let playerTeamMember = []
let playerTeamMemberLevel = []
let playerTeamCursor = 0
let playerTeamMoves = 0
let playerTeamValidMoves = 1

//INIT GAME BOARD GRID & STATE
for (const row of gameBoardGridRow){
    for (const column of gameBoardGridColumn){
        const coordinate = column + row
        gameBoardGrid.push(coordinate)
        gameBoardGridState.push(null)
    }
}
//INIT GAME BOARD STATE & HISTORY 
if(gameBoardGrid != []){
    gameBoardGridHistory.push(gameBoardGridState)
}

//GAME BOARD CELLS
let gameBoardGridCell = document.getElementsByClassName("game-board-grid-cell")
//GAME BOARD CELLS TEXT
let gameBoardGridCellMgText = document.getElementsByClassName("game-board-grid-cell-mg-text")


for (let cellCount = 0; cellCount < gameBoardGridCell.length; cellCount++){
    gameBoardGridCell[cellCount].addEventListener("click",()=>{
        //GAME BOARD CURSOR VALIDATION
        if (gameBoardGridCursor.length < gameBoardGridCursorSize){
            gameBoardGridCursor.push(gameBoardGrid.indexOf(gameBoardGridCell[cellCount].getAttribute("ID")))
        }
        else{
            gameBoardGridCursor = []
            gameBoardGridCursor.push(gameBoardGrid.indexOf(gameBoardGridCell[cellCount].getAttribute("ID")))
        }
        updateGameState()
        if (playerTeamValidMoves > 0){
            gameBoardGridCellMgText[cellCount].textContent = gameBoardToken[playerTeamCursor]
        }else{}

    })
}

//FUNCTIONS
let updateGameState = function(){
    if (playerTeamValidMoves == 0){

    }
    else if(playerTeamMoves <= (playerTeamValidMoves - 1)){
        playerTeamMoves += 1
    }
    else{
        if(playerTeamCursor < (playerTeam.length - 1)){
            playerTeamCursor += 1
        }
        else{
            playerTeamCursor = 0

        }
        playerTeamMoves = 1
    }   
}

//SEND FORM DATA
let gameForm = document.getElementById("game-form")
let submitBtn = document.getElementById("formSubmit")
gameForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert("Submit Btn Click")
})