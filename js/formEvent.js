"use strict";
const search=document.querySelector('#search');
const searchCon=search.querySelector('#searchCon');
const searchBtn=search.querySelector('#searchBtn');

//강추 

searchCon.addEventListener('keydown',(e)=>{
           //event 종류, event가 직접 적용된 객체, 이벤트가 적용된 객체의 값 
    // console.log(e.type,e.target,e.target.value)
    console.log(e.type,e.target.value)
});
//검색 기능, 게임 key event 중에 가장 자주 쓰임 
searchCon.addEventListener('keyup',(e)=>{
    console.log(e.type,e.target.value)
    
})
searchCon.addEventListener('keypress',(e)=>{
    // console.log(e.type,e.target,e.target.value)
    console.log(e.type,e.target.value)
    
});

//seachBtn click 하면 -> 이벤트

searchBtn.addEventListener('click',(e)=>{
    console.log(e.type);
    alert('검색어를 서버에 전송합니다.');
    // search.submit();//서버에 사용자 입력 정보 전송 
});

//focus가 설정 
searchCon.addEventListener('focus',(e)=>{
    console.log(e.type,e.target.value);
    e.target.style.backgroundColor='#00f'
});
//focus가 없어졌을 때 
searchCon.addEventListener('blur',(e)=>{
    console.log(e.type,e.target.value);
    // e.target.value= '';// focus 이동시 빈칸 처리 
    e.target.style.backgroundColor='#00f5'
});

//값을 입력했을 때 
searchCon.addEventListener('input',(e)=>{
    console.log(e.type,e.target.value);
});

searchCon.addEventListener('change',(e)=>{
    console.log(e.type,e.target.value);

});

const joinForm =document.querySelector('#joinForm');
const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPw');
const userPw2 = document.querySelector('#userPw2');
const city = document.querySelector('#city');
const joinBtn = document.querySelector('#joinBtn');
const pCheck = document.querySelector('p.checked');

userId.addEventListener('change',(e)=>{
    // console.log(e.type,e.target.value);
});
userPw.addEventListener('change',(e)=>{
    // console.log(e.type,e.target.value);
});
userPw2.addEventListener('keyup',(e)=>{
    // console.log(e.type,e.target.value);
    //userPw2.value userPw.value 가 같지 않으면 
    //p.checked에 "비밀번호가 틀립니다" 표시    
    //userPw2.value userPw.value 가 같지 않으면 
    //p.checked에 "같습니다." 표시    
    if(userPw2.value===userPw.value){
        pCheck.innerText="비밀번호가 같습니다."
        pCheck.style.color='#0ff'
    }else{
        pCheck.innerText="비밀번호가 다릅니다."
        pCheck.style.color='#f00'

    }
});
city.addEventListener('change',(e)=>{
    // console.log(e.type,e.target.value);
});
// joinForm.addEventListener('click',(e)=>{
//     console.log(`주소 ->${city.value}`);
//     if(city.value==''){
//         alert('주소를 선택해 주세요')
//         city.focus();
//         return false;
//     };
//     alert('가입 실행')
//     joinForm.submit();
// });