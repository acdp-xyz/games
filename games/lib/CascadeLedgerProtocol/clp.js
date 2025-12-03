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
 const gameID = generateGameID()
// console.log(gameID)

 //GET URL
 let getURL = (param)=>{
    const currentURL = new URL(window.location.href)
    const currentURLParams = currentURL.searchParams

    if (param == "href"){
        console.log(currentURL.href)
    }
    else{
        console.log(currentURL)
    }
 }

 getURL("href")