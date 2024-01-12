require('dotenv').config()

const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000

const indexRouter = require('./routers/indexRouter')
const emailRouter = require('./routers/emailRouter')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '1mb'}))

app.use('/', indexRouter)
app.use('/email', emailRouter)

app.get("/emailas", async (req,res) => {
    console.log(req.query)
})

app.listen(PORT, console.log(`SERVER HAS BEEN CONNECTED ON PORT ${PORT}`))