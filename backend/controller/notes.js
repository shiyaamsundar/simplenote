const express = require('express')
const Notes = require('../model/notes')
const router = express.Router()
require('dotenv').config()



exports.createnotes=async(req,res)=>{


    let d=new Date()
    req.body.created=Date(d)
    req.body.modified=Date(d)
    req.body.pinned=false
    // if(!req.body.data){
    //     req.body.data=""
    // }
    // console.log(req.body.data);

    const notes=new Notes(req.body)

    // console.log("addnote");

    notes.save((err,notes)=>{
        if(err){
            return res.status(400).json({
                err:"Something went wrong"
            })
        }
        console.log(notes,"created");
        res.json({
            
            message:"notes has been created sccessfully",data:notes
        })
             
    })  
}

exports.getallnotes=async(req,res)=>{
    
    let allnotes=await Notes.find({}).sort([["modified",1]]).exec((err,data)=>{
        if(!err)
        {
            res.json({
                data:data
            })
        }

    })

    // res.json({data:allnotes})
 
}

exports.getnote=async(req,res)=>{

    Notes.findById(req.params.id).exec((err,data)=>{
        if(err || !data){
            return res.status(400).json({
                error:err
            })
        }
        res.json({
            data:data
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

exports.updatenotes=(req,res)=>{

    console.log("update notes",req.params.id,req.body);



    Notes.findByIdAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        {new:true,useFindAndModify:false},(err,data)=>{
            if(err){
                return res.status(400).json({
                    error:"Unable to process your request"
                })
            }
            res.json(data)

        }
      
    )


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