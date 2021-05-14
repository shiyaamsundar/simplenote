const express = require('express')
const Notes = require('../model/notes')
const router = express.Router()
require('dotenv').config()



exports.createnotes=async(req,res)=>{
    console.log(req.body);

    let d=new Date()
    console.log(d);
    req.body.created=Date(d)
    req.body.modified=Date(d)
    req.body.pinned=false

    const notes=new Notes(req.body)

    notes.save((err,notes)=>{
        if(err){
            return res.status(400).json({
                err:"Something went wrong"
            })
        }
        res.json({
            
            message:"notes has been created sccessfully",data:notes
        })
             
    })  
}

exports.modifytags=async(req,res)=>{
    let id=req.params.id
    console.log(req.body.tags);
    await Notes.findByIdAndUpdate(id,{tags:req.body.tags},function(err,data){
        if(err){
            res.send(err)
        }
        else{
        res.send(data)
        }
    })
}

exports.getallnotes=async(req,res)=>{
    console.log("allnotes");
    let allnotes=await Notes.find()

    res.json({data:allnotes})

   
}

exports.modifypin=async(req,res)=>{
    let id=req.params.id
    console.log(req.body.pin);
    await Notes.findByIdAndUpdate(id,{pinned:req.body.pin},function(err,data){
        if(err){
            res.send(err)
        }
        else{
        res.send(data)
        }
    })
}


exports.sortbypinnednotes=async(req,res)=>{
    let allnotes=await Notes.find("$orderby",{pinned:true})
    res.json({data:allnotes})
}



exports.searchbytags=async(req,res)=>{
    const keyword=req.query.name 
    console.log(keyword);
    Notes.find({tags:{$regex:keyword,$options:'$i'}}).then(data=>
        res.send(data)).catch(err=>console.log(err))

}