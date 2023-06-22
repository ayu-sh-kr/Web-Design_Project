const slides=document.querySelectorAll(".slide")
const bttnr=document.getElementById('dotr')
const bttnl=document.getElementById('dotl')


var counter=0
// console.log(slides)
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
}
)
const goprev =()=>{
    if(counter==1){
    counter--
    slideImage()
    bttnl.style.backgroundColor="white"
    bttnr.style.backgroundColor="transparent"
    }
}

const gonext =()=>{
    if(counter==0){
    counter++
    slideImage()
    bttnr.style.backgroundColor="white"
    bttnl.style.backgroundColor="transparent"
    }

    }

const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
    })
}


setInterval(gonext,7000)
setInterval(goprev,11000)









