document.getElementById('left').addEventListener('click', left)
document.getElementById('right').addEventListener('click', right)

//Setting js variable to local mem value if available, otherwise set to 1
localStorage.setItem('panel','panel-1')
let locPan=localStorage.getItem('panel')
if(!locPan){
    locPan='1'
}
console.log(locPan)

let url=`http://localhost:2323/choice/panel-1`
if(document.getElementById('prompt').innerText==''){
    starter()
}

async function starter(){
    url=`http://localhost:2323/choice/${locPan}`
    console.log(url)
    localStorage.setItem('panel',locPan )
    try {
        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
        document.getElementById('prompt').innerText=data.prompt
        document.getElementById('opt1').innerText=data.opt1
        document.getElementById('opt2').innerText=data.opt2
        //yayo

    }catch(error){
        console.log(error)
    }
}
async function left(){
    locPan=locPan+'1'
    url=`http://localhost:2323/choice/${locPan}`
    console.log(url)
    localStorage.setItem('panel',locPan )
    try {
        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
        document.getElementById('prompt').innerText=data.prompt
        document.getElementById('opt1').innerText=data.opt1
        document.getElementById('opt2').innerText=data.opt2

    }catch(error){
        console.log(error)
    }
}

async function right(){
    locPanel=locPanel.concat('2')
    localStorage.setItem(panelChoice, locPan )
    try {
        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
        document.querySelector('#result').innerText=data
    }catch(error){
        console.log(error)
    }
}