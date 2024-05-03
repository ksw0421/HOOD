function fnDisplay(itemArr,value){             
    for(let idx=0;idx<=itemArr.length-1;idx++){                
        itemArr[idx].style.display=value;
    }
}
function fnActive(naviArray,self){
    for(let idx=0;idx<=naviArray.length-1;idx++){
        naviArray[idx].classList.remove('active');
    }
    self.classList.add('active');
}
function fnCreateEl(){
    let tmp = document.createElement('span');            
    tmp.classList.add('after');
    return tmp;
}
// 모바일 내비게이션 호출
function fnCallNav(){            
    let btnNav = document.querySelector('#btn-nav');
    let headerEl = document.querySelector('#header');        
    btnNav.onclick=function(){
        headerEl.classList.toggle('active');            
    }
}
//내비게이션 항목 활성화 함수
function fnNavActive(){
    let naviList = document.querySelectorAll('nav a');        
    for(let idx=0;idx<=naviList.length-1;idx++){
        naviList[idx].onclick=function(){
            fnActive(naviList,this);
        }            
    }
}
//홈화면 타이핑 효과
function fnTyped(){
    let typeData = document.querySelector('#type-data');
    let newData = typeData.getAttribute('type-data');
    let idx = 0;
    let lastIdx = newData.length-1;
    let outData = '';        
    setInterval(function(){
        if(idx<=lastIdx){
            if(newData.charAt(idx)==','){
                outData = '';
                idx++;
            }else{
                outData += newData.charAt(idx++);
            }
        }else{
            outData = '';
            idx=0;
        }
        typeData.innerHTML=outData;
    },300)
}
//문서 스크롤 효과 함수
function docScroll(){
    document.onscroll=function(){
        let aboutEl = document.querySelector('#about');
        let skillsEl  = document.querySelector('#skills');
        let skillsElCon = document.querySelector('#skills .container');
        let aboutTop = aboutEl.offsetTop;
        let skillsTop  = skillsEl.offsetTop;            
        let wh = window.innerHeight;
        let scrTop = window.scrollY;            
        
        if(aboutTop - wh - 100 <= scrTop){
            aboutEl.style.transform='translateX(0)';
            aboutEl.style.opacity='1';                
        }else{
            aboutEl.style.transform='translateX(-100%)';
            aboutEl.style.opacity='0';               
        }
        if(skillsTop - (wh / 2) <= scrTop){
            skillsElCon.style.transform='rotateX(0deg)';
            skillsElCon.style.opacity='1';              
            fnPrograss();
        }else{
            skillsElCon.style.transform='rotateX(180deg)';
            skillsElCon.style.opacity='0';
        }            
    }
}