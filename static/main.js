let nava=document.querySelectorAll('.nav-cnt a')
let traveloTitle=document.querySelector('.travelo-title')
let inittravelo=traveloTitle.innerText
let inittravelospans=[]
inittravelo.split("").forEach((a,i)=>{inittravelospans=[...inittravelospans,`<span style=" transition: ease .${i}s;  ">${a}</span>`]})

nava.forEach(a=>{
let text=a.innerText
let spans=[]
  text.split("").forEach((a,i)=>{spans=[...spans,`<span style=" transition: ease .${i*2}s;  ">${a}</span>`]})


    a.addEventListener('mouseover',()=>{
        console.log(spans.join('')) 

        traveloTitle.classList.add('hidden')
        traveloTitle.innerHTML=spans.join('')

        setTimeout(()=>{
            traveloTitle.style.opacity=.4
            // traveloTitle.style.filter= "blur(0px)";;
            traveloTitle.classList.remove('hidden')
            // isOut=false
        },200)  
    })
    a.addEventListener('mouseout',()=>{
        traveloTitle.innerHTML=inittravelospans.join('')     
        traveloTitle.classList.add('hidden')
     setTimeout(()=>{
        traveloTitle.style.opacity=.4
        setTimeout(()=>{
        traveloTitle.classList.remove('hidden')
    }
    ,100)  
    }
     ,100) 
      
    })


})