// let div=document.querySelector("div");
// div.style.color="pink";
// div.style.backgroundColor="blue;"

// let newBtn=document.createElement('button');
// newBtn.textContent="click me!"
// console.log(newBtn);

// let div=document.querySelector("div");
// div.prepend(newBtn);


// let newHeading=document.createElement("h1");
// newHeading.innerText="hardwork is the path of get success!";
// document.querySelector("body").prepend(newHeading);


// Project1
// let newBtn=document.createElement("button");
// newBtn.innerText="Click me";
//  newBtn.style.color="white";
//  newBtn.style.backgroundColor="red";

//  document.querySelector("body").prepend(newBtn)
 

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
// };


let modeBtn=document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click",()=>{
   if(currMode==="light"){
      currMode="dark";
      document.querySelector("body").style.backgroundColor="black";
   }
   else{
      currMode="light";
      document.querySelector("body").style.backgroundColor="pink";
   }
   console.log(currMode)

});

