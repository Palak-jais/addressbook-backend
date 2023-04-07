const addressbookModel = require('../models/addressbookModel')
const AddModel=require('../models/addressbookModel')

module.exports.getAddress=async(req,res)=>{
    
    const address=await AddModel.find()
    const result=address.sort((a,b)=>a.name.localeCompare(b.name))
    res.send(result)
}
module.exports.saveAddress=async(req,res)=>{
    const {name}=req.body
    if(!name) return res.json({msg:"please enter name"})
    const {number}=req.body
    if(!number) return res.json({msg:"please enter number"})
    
    const user=await addressbookModel.findOne({number:number})
    if(user){
        return res.send("..number alredy exists")
    }
    AddModel.create({name,number}).then((data)=>{
        console.log("adress added sucessfully");
        res.send(data)
    })
    
}
module.exports.updateAddress=async(req,res)=>{
    const{_id,name,number}=req.body
    addressbookModel
    .findByIdAndUpdate(_id,{name,number})
    .then(()=>{
        res.send("updated successfully..")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.deleteAddress=async(req,res)=>{
    const{_id}=req.body
    addressbookModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send("deleted successfully..")
    })
    .catch((err)=>{
        console.log(err)
    })
}
