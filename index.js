const cookieParser = require('cookie-parser')
const express=require('express')
const app=express()

const PORT=process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})

