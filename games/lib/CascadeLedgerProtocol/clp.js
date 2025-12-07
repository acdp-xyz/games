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

 //SERVER - CLIENT VARIABLES
 let serverStatus = 0
 let clientStatus = 0
 let serverData = ""

 //SERVER - CLIENT FX

 //SERVER
let startServer = ()=>{
    clientStatus = 0
    serverStatus = 1
    serverData = "Server Data Init"
    console.log("Server Started")
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
    clientStatus = 1
    serverStatus = 0
    console.log("Client Started")
}

let stopClient = ()=>{
    console.log("Stop Client")
}

let findClients = ()=>{
    console.log("Find Client")
}

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
            startServer()
        }
        //Start Client
        else{
            startClient()
            findServer()
        }
    }

}

//CHECK GAME TEAM STATUS
setInterval(() => {
    //console.log(teamID)
}, 4000);
