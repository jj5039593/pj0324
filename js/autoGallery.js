"use strict";
const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');

const liSize=galleryLi.length

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/a${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background = arrBg[i];
}

let i=-1

function autoGallery(){
    i++
    const gap= galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    const goto =(-i*gap)+'px'

    gallery.style.left=goto;
    gallery.style.transition='all 0.5s'

    if(i>=liSize-1){ i=-1};

}

let setIn=setInterval(autoGallery,1000);


const arrow=document.querySelectorAll('span.arrow');

arrow.forEach(el=>el.addEventListener('mouseover',()=>{
    console.log(event.type)
    console.log(event.type,event.target)

    clearInterval(setIn);
}));

// arrow[0].addEventListener('mouseover',arrowOver)
// arrow[1].addEventListener('mouseover',arrowOver)

// function arrowOver(){
//     console.log(event.type)
//     console.log(event.type,event.target)

//     clearInterval(setIn);
// }

// arrow.forEach(el=>el.addEventListener('mouseout',()=>{
//     console.log(event.type,event.target)
//     setIn=setInterval(autoGallery,1000);
// }));

arrow.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,1000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn)});
});

// arrow[0].addEventListener('mouseout',arrowOut)
// arrow[1].addEventListener('mouseout',arrowOut)


// function arrowOut(){
//     console.log(event.type,event.target)
//     setIn=setInterval(autoGallery,1000);

// }


//item>ul>li를 호버하면  setInterval 중지 
//item>ul>li를 아웃시  setInterval 다시 시작 
//item>ul>li를 클릭시  같은 인덱스로 이동 

const itemsLi=document.querySelectorAll('.bcon>.items>ul>li')

// itemsLi[0].addEventListener('mouseover',itemsOver)
// itemsLi[1].addEventListener('mouseover',itemsOver)
// itemsLi[2].addEventListener('mouseover',itemsOver)
// itemsLi[3].addEventListener('mouseover',itemsOver)
// itemsLi[4].addEventListener('mouseover',itemsOver)

// itemsLi.forEach(el=>el.addEventListener('mouseover',itemsOver));


// function itemsOver(){
//     console.log(event.type)
//     console.log(event.type,event.target)

//     clearInterval(setIn);
// }

// itemsLi[0].addEventListener('mouseout',itemsOut)
// itemsLi[1].addEventListener('mouseout',itemsOut)
// itemsLi[2].addEventListener('mouseout',itemsOut)
// itemsLi[3].addEventListener('mouseout',itemsOut)
// itemsLi[4].addEventListener('mouseout',itemsOut)


// itemsLi.forEach(el=>el.addEventListener('mouseout',itemsOut));

// function itemsOut(){
//     console.log(event.type,event.target)
//     setIn=setInterval(autoGallery,1000);

// };


itemsLi.forEach(el=>{
    el.addEventListener('mouseout',()=>{setIn=setInterval(autoGallery,1000)})
    el.addEventListener('mouseover',()=>{clearInterval(setIn);})
});

(()=>autoGallery())();
