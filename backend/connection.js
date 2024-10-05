
var mongoose = require('mongoose')


mongoose.connect("mongodb+srv://aseemaslah4508:aseem4508@cluster0.ymj78.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected")

    })
    .catch((err) => {
        console.log(err)
    })