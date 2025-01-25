// const { log } = require('console')
const express = require('express')
const app = express()
app.use(express.json());
const mongoose = require('mongoose')
const Moviemodel = require('./models/Moviemodel')
const cors = require('cors')
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Guys!')
})
mongoose.connect('mongodb+srv://Siddharth:Sidd1242_@cluster.6x3ac.mongodb.net/')
.then(()=>console.log('Connected to MongoDB'));

app.post('/addmoviedata',async (req, res) => {
  try {
     const newdata = new Moviemodel(req.body);
     await newdata.save();
     console.log(req.body);
     res.send('Data saved successfully')

  } catch (error) {
    console.log(err);
  }
})

app.get('/getmoviesdata',async(req,res)=>{
  
  try{
      const newdata= await Moviemodel.find({});
      res.json(newdata)
      console.log("Data Recived")
  }
  catch(err){
      console.log("DATA NOT RECEIVED")
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})