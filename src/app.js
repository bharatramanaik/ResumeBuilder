const express=require("express");
const path=require("path");
// const bcrypt=require("bcryptjs")
// const crypto=require("crypto");
// const multer=require("multer");
// const gridstorage=require("multer-gridfs-storage");
// const grid=require("gridfs-stream");
// const methover=require("method-override");
const app=express();
 const ejs=require('ejs');
 
require("./db/conn");

const Register=require("./models/registers");

const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
//  const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
// app.use(methover('__method'))
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
 app.set("view engine",'ejs');
app.set("views",template_path);
//  ejs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("signup");
});

app.get("/register",(req,res)=>{
    res.render("signin");
});

app.get("/login",(req,res)=>{
  res.render("resume");
});

app.get("/template",(req,res)=>{
 
  res.render("template");

});
// app.logout() (req, res) => {
//   req.logout();
// }



//creating new user
app.post("/register",async(req,res)=>{
  try {
   const password=req.body.password;
   const cpassword=req.body.confirmpassword;

   if(password===cpassword){
    const registeremp=new Register({
        email:req.body.email,
        password:password,
        confirmpassword:cpassword
    });

   const registered= await registeremp.save();
   res.status(201).render("signin");
   }else{
    res.send("password not matching");
   }

  }
   catch (error) {
    res.status(404).send(`<h1>This user already exists</h1>`);
    // console.log(error);
  }
});

//user athuntication
app.post("/login",async(req,res)=>{
  try {
    const email=req.body.email;
    const password=req.body.password;

   const useremail= await Register.findOne({email:email});
   if (useremail.password==password) {
    res.status(201).render("resume");



   }else{
    res.send("invalid login details")
   }

  } catch (error) {
    res.status(400).send("invalid login details");
  }
});

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})



