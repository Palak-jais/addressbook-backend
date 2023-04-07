const mongoose=require('mongoose')

const addressSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Add',addressSchema)