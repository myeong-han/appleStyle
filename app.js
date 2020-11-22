const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');


//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 23000,                   // End point 지점 : 값이 클수록 스크롤이 늘어남
    triggerElement: intro,             // 이벤트 주체 컴포넌트 할당
    triggerHook: 0                     // Trigger point 지점 : 이벤트 시작 위치 0 ~ 1 사이 값
})
    //.addIndicators()                 // 인디케이터 표시
    .setPin(intro)                     // 해당 컴포넌트 이벤트 중(End point 이전)동안 고정
    .addTo(controller);                // controller에 해당 scene 할당



//Text Amimation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 7000,                    // End point 지점 : 값이 클수록 스크롤이 늘어남
    triggerElement: intro,             // 이벤트 주체 컴포넌트 할당
    triggerHook: 0                     // Trigger point 지점 : 이벤트 시작 위치 0 ~ 1 사이 값
})
    .setTween(textAnim)
    .addTo(controller);



//Vedio Animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
    //console.log(e); //scroll pos check                         
});

// vedioframe에 값 세팅 : 스크롤 이벤트
setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    //console.log(scrollPos, delay);

    video.currentTime = delay;
}, 33.3 // 30fps, 1000/sec duration. 1000/30 == 33.3
);