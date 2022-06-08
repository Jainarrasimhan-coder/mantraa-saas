const express= require('express');
const app = express ();
const mongoose= require('mongoose')
const { MONGOURI } = require('./config/Keys')

const port=5000
mongoose.connect( MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("connected to mongo ok vayahoo yeahh")
})
mongoose.connection.on('error', (err) => {
    console.log("error in connection", err)
})

require('./model/user')
require('./model/post')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(port,()=>{
    console.log(`App is running in the port ${port}`)
})