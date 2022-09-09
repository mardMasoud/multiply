const txt = document.getElementById('textbox')
const score = document.getElementById('score')
const submit1 = document.getElementById('submit')
let number1=document.getElementById('num1')
let number2=document.getElementById('num2')
//localStorage.setItem('multiply','score')
let multiply = {
    score:0
}



let x
let s = 0

let multiplyJson = localStorage.getItem("multiply")
console.log(multiplyJson)
if(!multiplyJson){
    multiplyJson = JSON.stringify(multiply)
    localStorage.setItem('multiply',multiplyJson)

    
     console.log('if')    
}
else{
    console.log('else')
    multiply=JSON.parse(multiplyJson)
  }


score.textContent= multiply.score
n1 = Math.floor(Math.random() * 11);
number1.textContent=n1

n2 = Math.floor(Math.random() * 11);
number2.textContent=n2


txt.addEventListener('change',(e)=>{
     x = e.target.value
   
})
submit1.addEventListener('click',(e)=>{
    if(x==n1*n2){
        multiply.score+=1
    }
    else{
        multiply.score-=1
    }
   console.log(multiply.score)
    
    const multiplyJson = JSON.stringify(multiply)
    localStorage.setItem('multiply',multiplyJson)
   
   
})
