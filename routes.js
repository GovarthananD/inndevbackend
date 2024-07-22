import express from "express";
import { User } from "./models.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/addUser", async (req, res) => {
    try{
        const {id, firstname, lastname,companyname, age, city,state, zip, email,web} = req.body;
        const newUser = new User({
            id,
            firstname,
            lastname,
            companyname,
            age,
            city,
            state,
            zip,
            email,
            web
        });
        const savedUser = await newUser.save();
        res.status(201).send({message:"User Added Successfully", newUser});
    }catch(error){
        res.status(500).send({message:"Internal Server Error"})
    }
});

router.get("/allUsers", async (req, res) => {
   try{
    // User.find().then((data) => res.status(202).send({message:"Data has been retrieved successfully", data:data}));
    const result = await User.aggregate([
        {$sort: {username:1}}
    ]);
    res.status(201).send({message:"All Users", result});
   }catch(error){
    res.status(500).send({message:"Internal Server Error"})
   }
})

router.get(`/allUsers/:id`, async(req, res) => {
    try{
       const user = await User.find({id:req.params.id});
       if(user){
        res.status(201).send({message:"",user});
       }else{
        res.status(404).send({message:"User Not found"});
       }
    }catch(error){
        res.status(500).send({message:"Internal Server Error "+error.message})
    }
});

router.put(`/:id`, async (req, res) => {
    try{
        const {id} = req.params;
        const updatedUser = req.body;
        const result = await User.updateOne({id:id}, {$set:updatedUser});
        res.status(201).send({message:"Updated User Details", result});
    }catch(error){
        res.status(500).send({message:"Internal Server Error"});
    }
})

router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const result = await User.deleteOne({id:id})
    result ? res.status(201).send({message:"User deleted."}) : res.status(404).send({message:"User not found"})
})

export const employee = router;
