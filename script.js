const input = document.querySelector('#input')
const output = document.querySelector('#output')
const btn = document.querySelector('#btn')
const btnm = document.querySelector('#btnm')

function first(){
    var x = input.value;
    //  console.log(x)
     output.innerHTML= x;
     return x;
}
var pixcel= 2;
function testCase() {
    
    var test = first(); 
    console.log(test);
    pixcel=pixcel+2;
    output.style.color="green";
    output.style.fontSize=`${pixcel}rem`
  }

  function testCasetwo() {
    
    var test = first(); 
    console.log(test);
    pixcel=pixcel-2;
    output.style.color="red";
    output.style.fontSize=`${pixcel}rem`
  }

input.addEventListener("input",first)
btn.addEventListener("click",testCase)
btnm.addEventListener("click",testCasetwo)

const loadr = document.querySelector("#load")
const stop = document.querySelector("#stop")

function offer(){
//  loadr.style.color="white";
loadr.innerHTML=" ";
}

stop.addEventListener("click",offer)


// third

function checklength(){

    var a = input2.value;
    a = a.length;
    // console.log(a);
    if(a < 10){
        // submit.style.backgroundColor="red"
        submit. disabled = true
    }
    else{
        // submit.style.backgroundColor="green"
        submit. disabled = false

    }
     return a;

}

function check(){
    var b = checklength();
    console.log(b);
    if(b < 10){
        output2.innerHTML=" NOT DONE"
    }
    else{
        output2.innerHTML="DONE"
    }
    
}


const input2 = document.querySelector("#input2")
const submit = document.querySelector("#submit")

input2.addEventListener("input",checklength)
submit.addEventListener("click",check)


//fourth api 
const input3 = document.querySelector("#input3")
const show = document.querySelector("#show")
const message = document.querySelector("#message")


var serverurl ="https://randomuser.me/api/";


function gettheurl(){
    return serverurl  
}

function errorHandler(error){
    message.innerText = "Some error occured, " + error.message;
   }
   function displayName(name){
    message.innerHTML = `<h1>${name}</h1>` 
  }
function clickhandler(){
  fetch(gettheurl())
    .then(Response=>Response.json())
    .then(data=> displayName( data.results[0].name.first))
    .catch(errorHandler)
}



show.addEventListener("click",clickhandler)














const show2 = document.querySelector("#show2")
const messageEl= document.querySelector("#messageEl")



function clickhandler2(){
    fetch("https://randomuser.me/api/user/")
    .then(res => {
        if(res.status === 404){
            messageEl.innerHTML=`<h1>Page is not found</h1>`
        
        }else if(res.status === 401){
            messageEl.innerHTML =`<h1>You're not logged in.</h1>`
        }else
        {
            return res.json();
        }
    })
    .then(data=> displayName(data.results[0].name.first))
    .catch(errorHandler)
}








show2.addEventListener("click",clickhandler2)


