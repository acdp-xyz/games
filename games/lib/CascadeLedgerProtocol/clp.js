//GENERATE UNIQUE GAME ID
let generateGameID = ()=>{
    const randomNum1 = Math.floor(Math.random() * 16777216)
    const randomNum2 = Math.floor(Math.random() * 16777216)
    let hex1 = randomNum1.toString(16)
    let hex2 = randomNum2.toString(16)
    while(hex1.length < 6){
        hex1 = "0" + hex1;
    }
    while(hex2.length < 6){
        hex2 = "0" + hex2;
    }
    return hex1+hex2
}

//GENERATE UNIQUE TEAM ID
let generateTeamID = ()=>{
    const randomNum1 = Math.floor(Math.random() * 16777216)
    let hex1 = randomNum1.toString(16)
    while(hex1.length < 6){
        hex1 = "0" + hex1;
    }
    return hex1
}

//GAME MULTIPLAYER & TEAM 
 let gameID = generateGameID()
 let teamID = 0
 let userID = 0

 //GET URL PARAMs DATA
 let getURLParam = (param)=>{
    const currentURLParams = new URLSearchParams(window.location.search)
    return currentURLParams.get(param)
 }

 //SET URL PARAMs DATA
let setURLParam = (attribute, value)=>{
    const currentURLParams = new URLSearchParams(window.location.search)
    currentURLParams.set(attribute,value)
    //console.log (currentURLParams.toString())
    return currentURLParams.toString()
 }

//GO TO URL
let gotoURL = (attribute)=>{
    const currentURLPath = window.location.origin + window.location.pathname
    const newURLPath = currentURLPath + '?' + attribute
    window.location.href = newURLPath
}

//ADD TO URL
let addtoURL = (attribute, value)=>{
    const currentURLPath = window.location.href
    const newURLPath = currentURLPath + '&' + attribute + "=" + value
    window.location.href = newURLPath
    //console.log (newURLPath)

}

//CHECK GAME ID STATUS
if(getURLParam("id") === null){
    gotoURL(setURLParam("id",gameID))
} else{
    gameID = getURLParam("id")
    teamID = generateTeamID()

    //console.log(getURLParam("team"))

    if (getURLParam("team") === null){
        addtoURL('team',1)
        //console.log("No Team")
    }
    else{
        //gotoURL(setURLParam("team",(getURLParam('team') + 1)))
        console.log("Yes Team")
    }

}

//CHECK GAME TEAM STATUS
setInterval(() => {
    //console.log(teamID)
}, 4000);


//SERVER
let startServer = ()=>{
    console.log("server Started")
}

let stopServer = ()=>{
    console.log("Stop Server")
}

let findServer = ()=>{
    console.log("Finding Server")
}

let joinServer = ()=>{
    console.log("Join Server")
}

let leaveServer = ()=>{
    console.log("Leave Server")
}


//CLIENT
let startClient = ()=>{
    console.log("Start Client")
}

let stopClient = ()=>{
    console.log("Stop Client")
}

let findClients = ()=>{
    console.log("Find Client")
}