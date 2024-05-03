
    fnCallNav();
fnNavActive();
fnTyped();
docScroll();


let insertEls = document.querySelectorAll('#skills li');
for(let idx=0;idx<=insertEls.length-1;idx++){
    insertEls[idx].append(fnCreateEl());
}



let t=0;
function fnPrograss(){
    for(let idx=0;idx<=9;idx++){
        $('.after').eq(idx).css({
            transitionDelay:`${t+=0.2}s`,
        })
        let widVal = $('.after').eq(idx).prev().text();   
        $('.after').eq(idx).css({
            width:widVal,
        });
    }
}


let portNav = document.querySelectorAll('#portfolio .tab-nav li');

for(let idx=0;idx<=portNav.length-1;idx++){
    portNav[idx].onclick=function(){
        let selectClass = this.innerHTML;
        let portAll = document.querySelectorAll('.all');                
        let portView = document.querySelectorAll(`.${selectClass}`);                
        fnActive(portNav,this);
        fnDisplay(portAll,'none');                                
        fnDisplay(portView,'block');
    }
}   