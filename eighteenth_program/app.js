 const express = require('express')
 const path = require('path')
 const fs = require('fs')

 const app = express();
const port = 80;

//EXPRESS SPECIFIC 
app.use('/static',express.static('static'))//FOR SERVING STATIC FILES
app.use(express.urlencoded())

//PUG SPECIFIC
app.set('view engine','pug')//SET THE TEMPLATE ENGINE AS PUG
app.set("views",path.join(__dirname,'views'))// SET THE VIEWS DIRECTORY

//ENDPOINTS
app.get('/',(req,res)=>{
   const con = "Thisi is the best content so far"
   const params = {'title':'slow steps long vision','content': con}
   res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
   // console.log(req.body)
   name = req.body.name
   age = req.body.age
   gender = req.body.gender
   address = req.body.address
   more = req.body.more
   let outputToWrite = `the name of the client is ${name},${age} years old,${gender},residing at ${address}, More about him/her ${more}`
   fs.writeFileSync('output.txt', outputToWrite)

   const params = {'message':'Your form has been submitted successfully'}
   res.status(200).render('index.pug',params)
})

// app.get("/demo", (req,res)=>{
//    res.status(200).render('demo',{title:'hey arul',message:'hello arul goyal'})
// }) 

//  app.get("/", (req,res)=>{
//     res.send("This is homepage of the first express app")
//  })
//  app.get("/about", (req,res)=>{
//     res.send("This is about page of the first express app")
//  })
//  app.post("/about", (req,res)=>{
//     res.send("This is post request about page of the first express app")
//  })

 app.listen(port,()=>{
    console.log(`The application started successfulllu on port ${port}`)
 })