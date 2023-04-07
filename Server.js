const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const routes=require('./routes/addressRoute')
require('dotenv').config()

const app=express();
const PORT=process.env.port||5000

app.use(express.json())
app.use(cors())
const db=process.env.MONGO_URL;
mongoose.connect(db,{

useNewUrlParser: true, 
useUnifiedTopology: true    
 
}).then(()=>{
    
    console.log("connected")

}).catch((err)=>console.log(err));

//mongodb schema... 
app.use(routes);

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})