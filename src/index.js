const express = require('express')
require('./db/mongoose')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')


const app = express()
const port = process.env.PORT

app.use((req, res, next) => {    
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-control-Allow-Methods", "*")
    next() 
    
}) 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

