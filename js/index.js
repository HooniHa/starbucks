//console.log("test");

window.onload - function(){
    if(window.scrollY > 500){
        //상단버튼 보이기
        gsap.to("#to-top", 0.6,{
            x:0
        });
   
    }else{
        //상단버튼 숨기기
        gsap.to("#to-top", 0.6,{
            x:100
        });
    }

}

const badgeEl = document.querySelector('#top_layout .badges');

// console.log(badgeEl);
window.addEventListener('scroll', _.throttle(function(){
    // console.log(window.scrollY);
    if(window.scrollY > 500){
    //배지 숨기기
    //badgeEl.style.display = 'none';
    // gsap.to(요소,지속시간, 옵션);

    gsap.to(badgeEl,0.6,{
        opacity:0,
        display: 'none'
    });
   //상단 버튼 보이기
    gsap.to("#to-top",0.6,{
        x:0
    });

    }else{
    //배지보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl,0.6,{
        opacity:1,
        display:'block'
    });
    gsap.to("#to-top",0.6,{
        x:100
    });
    }
},300));
//_.throttle(함수,지속시간);

const fadeEls = document.querySelectorAll('#body_layout .fade-in');
console.log(fadeEls);


fadeEls.forEach(function(fadeEl,index){
    //  console.log(fadeEl);
    //  console.log(index);
    //  각 요소들을 순서대로 (dealy) 보여지게 한다 이
    gsap.to(fadeEl,1,{
        opacity:1,
        delay:(index+1) * 0.3
    });
});

//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
            direction : 'vertical',
            autoplay:true, // 자동슬라이드 
            loop:true   // 슬라이드가 끝난후 처음부터 반복
});

new Swiper(".promotion .swiper-container",{
    slidesPerView : 3, //한번 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이스 사이 여백
    centerSlides : true,// 1번 슬라이드가 가운데 보이기
    loop : true,
    
    autoplay:{
        delay : 3000
    },
    pagination:{
        el: '.swiper-pagination', // 페이지 번호 요소 선택자 
        clickable:true // 사용자의 페이지 번호 요소 제어 여부
    },
    navigation:{ // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: 'swiper-button-prev', // 이전 버튼 선택자
        nextEl: 'swiper-button-next', // 다음 버튼 선택자
    },
    loop: true
});

new Swiper('#awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5
    ,navigation : {
        prevEl : '#awards .swiper-prev',
        nextEl : '#awards .swiper-next'
    }
  });

const promotionEl = document.querySelector('promotion');
// console.log(promotionEl);
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// console.log(promotionToggleBtn);
let isHidePromotion = false;
//트루는 숨기기 펄스는 보이기

promotionToggleBtn.addEventListener('click',function(){
        if(isHidePromotion){
            // 요소가 숨겨져야 하면
            promotionEl.classList.add('hide');
        }else{
            //요소가 보여야 하면,
            promotionEl.classList.remove('hide');
        }
})

// 범위 랜덤 함수 (소수점 2자리)
function random(min, max){
        //.toFiexd()를 통해 반환된 문자데이터를
        // parseFloat() 을 통해 소수점을 가지는 숫자제디터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFiexd(2))
}

function floatingObject(selector,delay, size){
    // gsap.to(요소,지속시간, 옵션);
    gsap.to(selector,random(1.5,2.5),{
        y:size,
        repeat:-1,
        yoyo: true,
        ease : Power1.easeInOut,
        delay: random(0,delay)
    });
}


floatingObject('.selector',1,15);
floatingObject('.selector', .5,15);
floatingObject('.selector' , 1.5,20);


const spyEl = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,
        triggerHook: .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

const toTOPEl = document.querySelector("#to-top");

toTOPEl.addEventListener('click' , function(){
    gsap.to(window, 0.7,{
        scrollTo:0
    });
});