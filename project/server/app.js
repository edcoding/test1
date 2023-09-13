const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(bodyParser.json({limit:'32mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'32mb',extended:true}))
app.use(cors())

const connectDB=async()=>{
    try {
      await  mongoose.connect('mongodb://localhost:27017/testing')
      app.listen(3000,()=>{
        console.log('hello')
      })
    } catch (error) {
        console.log(error.message)
    }
}

connectDB();