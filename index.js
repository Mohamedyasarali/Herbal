const mongoose=require("mongoose");
const express=require("express");
const cors = require('cors');

const herbsModel=require("./Models/herbsModel")

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/Ayush_Fresh")
.then(()=>{
    console.log("Database Connection Sucessfully");
})
.catch((err)=>{
    console.error(err);
})

const app=express();

app.use(cors())

//Fetching Herbs
app.get("/herbs",(req,res)=>{
    herbsModel.find()
    .then((data)=>{
        res.status(200).send({"Data":data,"Message":"Fetch Data Successfully"})
    })
    .catch((err)=>{
        res.status(404).send({"Message":"Failed To Fetch Data"})
    })
});

//Herbs with name

app.get("/herbs/:name",(req,res)=>{
    herbsModel.find({name:{$regex:req.params.name,$options:"i"}})
    .then((herb)=>{
        if (herb.length!==0){
            res.send(herb)
        }
        else{
            res.status(404).send({"Message":"Herbs Not Found"})
        }
    })
    .catch((err)=>{
        res.status(404).send({"Message":"Some Problem in getting the herbs"})
    })
});


app.listen(8000,()=>{
    console.log("Server Connection Sucessfully");
})

