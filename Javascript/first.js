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

function count(str){
    let count=0;
    for(const char of str)
        if(char==="a" || char==="e" || char==="i"){
            count++;
        }
        console.log(count);
}
count("aeiouu");






