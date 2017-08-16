var express = require('express')

var app = express()

var bodyParser = require('body-parser')

app.use( bodyParser.json() )

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('./public'))

app.get('/', function(req, res){
     res.sendFile('./index.html', {root: './public'})
})

app.post('/validate', function(req, res){
    console.log(req.body)
    if (req.body.totalWeight > 200 | req.body.totalCost > 200){
        res.send({message: "Too Much!"})
    } else {
        res.send('All Good :)')
    }
})

// app.post('/validate', function(req, res){
//     console.log(req.body)
//     if (req.body.totalCost > 200){
//         res.send({message: "Too Much!"})
//     } else {
//         res.send('All Good :)')
//     }
// })
app.listen(8080)