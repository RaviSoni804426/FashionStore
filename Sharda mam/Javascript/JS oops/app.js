// const student={
//     fullName:"ravi kuamar",
//     marks:92.2,
//     printMarks: function () {
//         console.log("marks= ",this.marks)
//     },
// };

// class ToyotaCar{
//     constructor(){
//         console.log("creating new object");
//     }

//     start(){
//         console.log("start");
//     }
//     stop(){
//        console.log("stop");
//     }
// }
// let fortuner=new ToyotaCar();




// class Person{
//     constructor(){
//         this.species="homo species"
//     }
//     eat(){
//         console.log("eat")
//     }
// }
// class Engineer extends Person{
//     constructor(branch){
//         super();
//         this.branch=branch;
//     }
//     work(){
//         console.log("solve dsa problem")
//     }
// }
// let engObj=new Engineer("Computer Science")


// let DATA="secret Information";
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;

//     }
//   viewData(){
//     console.log("data")
//   }
// }


// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum)


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         getNextData();
//     },200); 
// }
// getData(1,() =>{
//     getData(2,()=>{
//         getData(3,()=>{

//         });
//     });
// });
// const getPromise=()=>{
// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
// resolve("success");
// });
// };
// let promise=getPromise();
// promise.then(() => {
//     console.log("promise resolved");
// });

// async function Hello(){
//     console.log("Hello");

// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         sertTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }






   