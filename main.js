


const view = countN =>{
 return (`\tcount: ${countN}\n\t(+)(-) \n\t(q) for quit\n What would you do?`);
    }  

const update = (oldValue,msg)=>{
    if (msg === "+")return oldValue+=1;
    else{
        if (msg === "-")return oldValue-=1;
        else return oldValue; 
    }}
let prompt = require('prompt-sync')();
console.clear();  
//let n = prompt('');
const app = counter =>{
    console.clear();
    console.log(view(counter));
    let answer = prompt('');
    if (answer === "q") return;
    app(update(counter,answer));
}

app(0);
