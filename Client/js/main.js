document.getElementById('left').addEventListener('click', left)
document.getElementById('right').addEventListener('click', right)
let locPanel=localStorage.getItem('panel')
if(!locPanel){
    locPanel='1'
}
console.log(locPanel)

let url=`https://localhost:2323/choice`


async function left(){
    locPan=locPan.concat('1')
    url=url.concat(`?${locPan}`)
    localStorage.setItem(panelChoice,locPan )
    try {
        const response= await fetch(url)
        const data = await response.json()
        console.log(data)
        document.querySelector('#prompt').innerText=data
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
    }catch(eror){
        console.log(error)
    }
}