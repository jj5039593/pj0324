"use strict";
//ui event (browser and UI)
// load 자바스크립트 객체(window) load 됐을 때 
//방법 #1
// window.addEventListener('load',f1)
// // f1=>이벤트 핸들러
// function f1(){
//  alert("event handler alert")
// }

// //방법#2
// window.addEventListener('load',function(){
//     f1();
// });
// //= window.addEventListener('load',()=>f1());

// function f1(){
//  alert("event handler alert")
// }


// unload 자바스크립트 객체(window) 꺼질 때 -> 사용을 권장하지 않는다. 
window.addEventListener('unload',()=>{
 alert("log 호출")
});

// error 자바스크립트 객체(window) error를 발생 시켰을 때 

// resize window의 크기가 변경 되었을 때 (잘 쓰지 않음 )
window.addEventListener('resize',(e)=>{

    console.log(e.target)
    console.log(e.target.innerWidth)
    if(e.target.innerWidth<=600){
        document.body.style.backgroundColor="#ff00ff"
    }else{
        document.body.style.backgroundColor="#ffff00"
    }
});

// scroll window의 scroll위치가 변경 되었을 때 

window.addEventListener('scroll',(e)=>{
    const topScroll=document= documnet.documnetElement.scrollTop;
    if(topScroll<=50){
        document.body.style.backgroundColor='#ffffff'
    }
    if(topScroll>50){
        document.body.style.backgroundColor='#ff0'
    }
    if(topScroll>200){
        document.body.style.backgroundColor='#f00'
    }
});