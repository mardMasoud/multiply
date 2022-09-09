const txt = document.getElementById('textbox')
const score = document.getElementById('score')
const submit1 = document.getElementById('submit')
let number1=document.getElementById('num1')
let number2=document.getElementById('num2')
let x
let s=0

n1 = Math.floor(Math.random() * 11);
number1.textContent=n1

n2 = Math.floor(Math.random() * 11);
number2.textContent=n2


txt.addEventListener('change',(e)=>{
     x = e.target.value
   
})
submit1.addEventListener('click',(e)=>{
    if(x==n1*n2){
        s+=1
    }
    else{
        s-=1
    }
    score.textContent=s
   
   
})