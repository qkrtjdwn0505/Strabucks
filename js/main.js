// main.js

console.log('hello'); // 스크립트가 로드되었음을 확인하기 위한 디버깅 메시지

const searchEl = document.querySelector('.search'); // 검색 영역 요소를 선택
const searchInputEl = searchEl.querySelector('.search input'); // 검색 입력 필드 요소를 선택

console.log(searchEl); // 검색 영역 요소 확인을 위한 디버깅 출력
console.log(searchInputEl); // 검색 입력 필드 요소 확인을 위한 디버깅 출력

searchEl.addEventListener('click', function(){ // 검색 영역 클릭 이벤트 리스너
    searchInputEl.focus(); // 클릭 시 입력 필드에 포커스
});

searchInputEl.addEventListener('focus',function(){ // 입력 필드 포커스 이벤트 리스너
    searchInputEl.setAttribute('placeholder', '통합검색'); // 포커스 시 플레이스홀더 텍스트 설정
    searchEl.classList.add('focused') // 포커스 시 스타일 클래스 추가
});

searchInputEl.addEventListener('blur',function(){ // 입력 필드 블러(포커스 해제) 이벤트 리스너
    searchInputEl.setAttribute('placeholder',''); // 블러 시 플레이스홀더 제거
    searchEl.classList.remove('focused') // 블러 시 스타일 클래스 제거
});

// 순서대로 요소 나타내기
const fadeEls = document.querySelectorAll('.banner .fade-in'); //배열
// console.log(fadeEls);
fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEl);
    // console.log(index);
    gsap.to(fadeEl,1,{
        delay:(index+1) * 0.5,
        opacity:1
    })
});


// 수직 슬라이드 (공지사항) 초기화
new Swiper('.notice_line', {
    direction: 'vertical', // 수직 방향으로 슬라이드
    loop: true, // 무한 반복
    autoplay:true // 자동 재생
});

// 순서대로 요소

// 프로모션 슬라이드 초기화
const promoSwiper = new Swiper('.promotion .swiper-container',{
    slidesPerView:3,    // 한 화면에 보여질 슬라이드 개수
    spaceBetween:10,    // 슬라이드 사이 간격(px)
    centeredSlides:true, // 현재 슬라이드를 중앙에 배치
    loop:true, // 무한 반복
    autoplay:{
        delay:5000 // 5초마다 슬라이드 전환
    },
    pagination:{ // 페이지네이션(하단 점) 설정
        el:'.promotion .swiper-pagination', // 페이지네이션 요소 선택자
        clickable: true // 페이지네이션 클릭 가능하게 설정
    },
    navigation:{ // 네비게이션(이전/다음 버튼) 설정
        prevEl:'.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl:'.promotion .swiper-next' // 다음 버튼 선택자
    }
});

const swiperControlBtn = document.querySelector('.swiper-control-btn'); // 슬라이드 제어 버튼 선택

swiperControlBtn.addEventListener('click', function(){ // 제어 버튼 클릭 이벤트 리스너
    let isSwiperOn = swiperControlBtn.classList.contains('on'); // 현재 슬라이드 상태 확인

    if(isSwiperOn){ // 슬라이드가 진행 중이면
        swiperControlBtn.classList.remove('on'); // 'on' 클래스 제거
        promoSwiper.autoplay.stop(); // 슬라이드 자동 재생 정지
        swiperControlBtn.textContent = 'pause'; // 버튼 텍스트를 'pause'로 변경 (Material Icons에서는 일시정지 아이콘으로 표시)
    }else{ // 슬라이드가 정지 상태면
        swiperControlBtn.classList.add('on'); // 'on' 클래스 추가
        promoSwiper.autoplay.start(); // 슬라이드 자동 재생 시작
        swiperControlBtn.textContent = 'play_arrow'; // 버튼 텍스트를 'play_arrow'로 변경 (Material Icons에서는 재생 아이콘으로 표시)
    }
});

const promotionEl = document.querySelector('.promotion'); // 프로모션 영역 요소 선택
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // 프로모션 토글 버튼 요소 선택
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-symbols-outlined'); // 토글 버튼 내의 아이콘 요소 선택

let isHiddenPromotion = false; // 프로모션 영역 숨김 상태 초기값

promotionToggleBtn.addEventListener('click', function() { // 토글 버튼 클릭 이벤트 리스너
    isHiddenPromotion = !isHiddenPromotion; // 상태 토글
    
    if (isHiddenPromotion) { // 숨겨야 한다면
        promotionEl.classList.add('hide'); // 'hide' 클래스 추가하여 숨김       
        promotionToggleIcon.textContent = 'expand_circle_down'; // 아이콘을 아래쪽 화살표로 변경
    } else { // 보여야 한다면
        promotionEl.classList.remove('hide'); // 'hide' 클래스 제거하여 표시
        promotionToggleIcon.textContent = 'expand_circle_up'; // 아이콘을 위쪽 화살표로 변경
    }
});


//감지할 료수를 검색
const spyEls = document.querySelectorAll('#body_layout .scroll-spy');
// console.log(spyEls);

//각 요소들에 기능 처리
spyEls.forEach(function(spyEl){
    // console.log(spyEl);
    new ScrollMagic.Scene({ //Scene 감지할 요수 추가
        triggerElement: spyEl //보여짐 여부를 감지할 요소
        ,triggerHook : 0.8 //화면 80% 지머에서 보여짐 여부 감지
    })
    .setClassToggle(spyEl, 'show') //요소가 화면애 감지되면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); //코그 내부에 가능 할당(필수~!!)
});


// aword

// 프로모션 슬라이드 초기화
const awordsSwiper = new Swiper('.awords .swiper-container',{
    slidesPerView:5,    // 한 화면에 보여질 슬라이드 개수
    spaceBetween:10,    // 슬라이드 사이 간격(px)
    // centeredSlides:true, // 현재 슬라이드를 중앙에 배치
    loop:true, // 무한 반복
    autoplay:{
        delay:3000 // 3초마다 슬라이드 전환
    },
    navigation:{ // 네비게이션(이전/다음 버튼) 설정
        prevEl:'.awords .swiper-prev', // 이전 버튼 선택자
        nextEl:'.awords .swiper-next' // 다음 버튼 선택자
    }
});

// TO-TOP
const badgeEl = document.querySelector('#head_layout .badges');
// console.log(badgeEl);

window.addEventListener('scroll', _.throttle(function() {
    // console.log(window.scrollY);
    if (window.scrollY > 500) { // 지점 500일때
        // badges 숨김
        gsap.to(badgeEl, 0.6, { // 0.6초 걸려서
            opacity: 0, // 투명도
            display: 'none' // 완전 사라져라
        });
        // badgeEl.style.display = 'none';

        // 상단버튼 보이기
        gsap.to('#to-top', 0.3, {
            x: 0 // 윈도우 밖 >> 원래 위치 값
        });
    } else {
        // badges 보임
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        // badgeEl.style.display = 'block';

        // 상단버튼 숨기기
        gsap.to('#to-top', 0.3, {
            x: 100 // 윈도우 밖
        });
    }
}, 300));


//상단으로 이동

// '#to-top' 요소를 선택하여 toTopEl 변수에 할당
const toTopEl = document.querySelector('#to-top');

// toTopEl에 클릭 이벤트 리스너 추가
toTopEl.addEventListener('click', function() {
    gsap.to(window, 0.7, {
        scrollTo: 0  // 0.7초 동안 화면을 최상단(스크롤 위치 0)으로 애니메이션
    });
});



