const express=require('express')
const app=express()
const PORT= 2323
const cors=require('cors')

app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/client/index.html')
})

app.get('/choice', (req,res)=>{
    const queryParams=req.query;
    console.log(queryParams)
    res.sendFile(__dirname + '/index2.html')
})



let path = {

}
let story= {
    'panel1':{
        'prompt':`"A path diverged in a yellow wood, will you take the one least traveled by?"<br><br>"Huh?"You said. Where the hell did that voice come from. You were just hiking with your dog when you came upon a split on the trail. You were checking your phone for directions but the gps app was having trouble displaying your location. Maybe someone near by to ask for directions?
        "Who's there?" you speak with the confidence of someone who thought they were alone. Well except for your dog. You didn't forget to include them, you just kind of look at them as an extension of yourself. It's a compliment your swear. As the narrator I choose for this to be true. Plus, as your 6 year old rotweiler/labrador/pony mutt, it wouldn't exactly be accurate for me to say I havn't done the same to you. But back to the task at hand, who's voice was that?`,
        'opt1':`Wait for a response`,
       'opt2':`Charge blindy forward, taking neither branch of the path, instead striking out on your own, new, totally legit path.`

    },
    'panel-11':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-12':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-111':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-112':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-121':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-122':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },
    'panel-x':{
        'prompt':``,
        'opt1':``,
        'opt2':``,
    },

}

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The server is now running on ${PORT}! Fly port, not aft!`)
})