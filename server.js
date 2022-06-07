const express = require('express');

const cors= require('cors')

const app = express()

app.use(cors())

const PORT = process.env.port || 8000

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))

const myJungleChamps = {
"diana" : {
"skill" : 'medium',
"op.gg-tier" : 2,
"counters": ["xin zhao", 'mordekaiser', "lillia"],
"strong against": ['everything if u play it right', "tank jgs"]
},
"kha" : {
    "skill" : 'medium',
    "op.gg-tier" : 3,
    "counters": ["shyvana", 'fiddle', "poppy"],
    "strong against": ['everything if u play it right', "tank jgs"]
    },
"ekko" : {
    "skill" : 'hardish',
    "op.gg-tier" : 3,
    "counters": ["shyvana", 'fiddle', "poppy"],
    "strong against": ["squishy champs"]
 },  
 "wukong" : {
    "skill" : 'brain-dead',
    "op.gg-tier" : 'op',
    "counters": ["lillia", "taliyah", 'nothing else bc this champ is so easy    '],
    "strong against": ['everything if u play it right', "tank jgs"]
    },  
"kindred" : {
    "skill" : "hard",
    "op.gg-tier" : 1,
    "counters" : ['wukong',"olaf", "shaco"],
    "stronga aginst" : ['lillia', 'eve', 'late game jgs']
},
"nocturne" : {
    "skill" : "easy",
    "op.gg-tier" : 3,
    "counters" : ['udyr',"amumu", "warwick"],
    "stronga aginst" : ['lillia', 'eve', 'late game jgs']
},
"evelynn" : {
    "skill" : "medium",
    "op.gg-tier" : 4,
    "counters" : ['gwen',"fiddlesticks", "warwick"],
    "stronga aginst" : ['lillia', 'lee sin', 'xin zhao']
},
"viego" : {
    "skill" : "hard",
    "op.gg-tier" : 1,
    "counters" : ['rek sai',"rammus", "ivern"],
    "stronga aginst" : ['olaf', 'mordekaiser', 'xin zhao']
}
}

app.get('/', (req, res) => {
 res.sendFile(__dirname + "/index.html")
});

app.get("/api/:name", (req,res) => {
const champName = req.params.name.toLowerCase()
myJungleChamps[champName] ? res.json(myJungleChamps[champName]) : res.json(`${champName} not found`)

});
