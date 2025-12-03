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
 let gameID = generateGameID()

 //GET URL PARAMs DATA
 let getURLParam = (param)=>{
    const currentURLParams = new URLSearchParams(window.location.search)

    if (param == "id"){
        //console.log(currentURLParams.get(param))
        return currentURLParams.get(param)
    }
    else{
        console.log(currentURL)
        return null
    }
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

//CHECK GAME ID STATUS
if(getURLParam("id") === null){
    gotoURL(setURLParam("id",gameID))
} else{
    gameID = getURLParam("id")
}