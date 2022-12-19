const { render } = require("ejs");
const { application } = require("express");

function addNewWEField() {
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
 }
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating CV
function generateCV() {
    // window.location.href="template";

    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    //contact
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
    //adderss
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    //facebook
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    //insta
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    //linkedin
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
    //objective
    document.getElementById('objetiveT').innerHTML=document.getElementById('objectiveField').value;

    //work experience
    let wes=document.getElementsByClassName('weField');
    let str='';
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
document.getElementById('weT').innerHTML=str;


//academic
let aqs=document.getElementsByClassName('eqField');
let str1='';
for (let e of aqs ) {
    str1+=`<li> ${e.value}</li>`
}
document.getElementById('aqT').innerHTML=str1;
//profile pic
try {
    
let file=document.getElementById('imgField').files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
//set img to template
reader.onload = function () {
    document.getElementById('imgTemplate').src=reader.result;
}

    
} catch (error) {
    console.log(error);
} 
//  app.get("/template",(req,res)=>{
 
//    res.render("template");

//  });

document.getElementById('cv-form').style.display='none';
document.getElementById('cvtemplate').style.display='block';
//  window.location.href="template";




}


//printCV
function printCV(){
    
    window.print();
    // document.getElementById('buttn').style.display='none';
}
