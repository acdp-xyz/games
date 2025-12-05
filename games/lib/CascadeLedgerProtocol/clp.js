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

//ADD TO URL OLD
// let addtoURL = (attribute, value)=>{
//     const currentURLPath = window.location.href
//     const newURLPath = currentURLPath + '&' + attribute + "=" + value
//     window.location.href = newURLPath
//     //console.log (newURLPath)

// }

//ADD TO URL (Array)
let addtoURL = (JSONData)=>{
    if(Array.isArray(JSONData)){
        const currentURLPath = window.location.href
        let urlAttributes = ""

        JSONData.forEach(([key, value], index) => {
            urlAttributes += `&${key}=${value}`
        })

        const newURLPath = currentURLPath + urlAttributes
        window.location.href = newURLPath
    }
    else{
        console.log("Error: Array Only")
    }
}


//CHECK GAME ID STATUS
if(getURLParam("id") === null){
    gotoURL(setURLParam("id",gameID))
} else{
    gameID = getURLParam("id")
    teamID = generateTeamID()

    //console.log(getURLParam("team"))

    if (getURLParam("team") === null){
        //addtoURL('team',1)
        //ADDING JSON SUPPORT
        let marley = [["x",123],["y",456],["z",789]]
        //marley = "dd"
        addtoURL([["team",1],["user",1]])
    }
    else{
        //gotoURL(setURLParam("team",(getURLParam('team') + 1)))

        //Start Server
        if (getURLParam("team") == 1){
            console.log("Starting Team 1 Server")
        }
        //Start Client
        else{
            console.log("Starting Team X Client")
        }
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