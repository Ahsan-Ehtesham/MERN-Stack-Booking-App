const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("This is auth page")
})

router.get("/register",(req,res)=>{
    res.send("This is register page")
})

module.exports=router;