const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact")


let promise=fetch(URL);
console.log(promise);

const getFacts=async()=>{
    console.log("getting data..");
    let response=await fetch(URL);
    console.log(response);
    let data= await response.json;
    console.log(data);
    function getFacts(){
        fetch(URL).then((response));

        //How to send post request.
    
    }
};