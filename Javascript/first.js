// console.log("ravi kumar");
// var x=10;
// console.log(x);
// let y=12;
// console.log(y);
// const z=11;//const is always constant .
// console.log(z);
// let a=5;
// let b="5";
// console.log(a===b);// it compare value  and type both.
// console.log(a==b);
// console.log(typeof("ravi"));
// console.log(sum(2,3));
// function sum(x,y){
//     return x+y;
// }

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// };
// arrowSum(3,4);

// const printHello=()=>{
//     console.log("hello world");
// };
// printHello("my nae is ravi kumar");

// function count(str){
//     let count=0;
//     for(const char of str)
//         if(char==="a" || char==="e" || char==="i"){
//             count++;
//         }
//         console.log(count);
// }
// count("aeiouu");


// let arr=[1,2,3,4];
// arr.forEach((val)=>{
//     console.log(val*val)
// });

// let nums=[9,9,16,25];
// nums.map((val)=>{
//     console.log(val);
// });


// let arr=[1,2,6,8,4,3];
// let evenArr=arr.filter((val)=>{
//     return val % 2===0;
// });
// console.log(evenArr);

// let n=prompt("enter a number: ");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (n) => {
  n = parseInt(n); // Convert the input to a number
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }
  console.log(arr);
  rl.close();
});






