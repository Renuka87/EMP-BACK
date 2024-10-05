//import
express = require('express')
var cors = require('cors')
require("./connection")
const employeeModel = require('./model/employee')
//2.initialize
var app = express()
app.use(express.json())
app.use(cors())
// 3. api creation
app.get('/', (req,res) =>{
    res.send("message from server")
})
app.get('/trial', (req, res) => {
    res.send("this a trial mesage")
})

app.post('/add', async (req,res) => {
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
app.get('/view', async (req, res) => {
    let result = await employeeModel.find();
    res.json(result)
})

//4. port setting
app.listen(3005, () => {
    console.log('listening on port 3005')
})

