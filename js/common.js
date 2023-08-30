$(function(){

    $(".snb").load("../snb.html");

    // 리사이징시
    $(window).on("resize", function() {
        modalSizeSet();
    });

    var $toggleSpeed = 200;

    // snb
    $(document).on("click", ".snb-list a", function(e) {
        e.stopPropagation();
    
        $(this).parent('li').parent('ul').children('li').children('a').removeClass('active');
        
        if($(this).siblings('ul').css('display') == 'none') {
            $(this).parent('li').parent('ul').children('li').children('ul').slideUp($toggleSpeed);
            $(this).siblings('ul').slideDown($toggleSpeed);
            $(this).addClass('active');

        } else {
            $(this).siblings('ul').slideUp($toggleSpeed);
            $(this).removeClass('active');
        }
    });

});

// 모달 z-index 관리
let modalHighestIdx = 0;

// 모달 열기
function openModal(modalId) {

    for(var i=0; i<$(".modal").length; i++) {
        if($(".modal").eq(i).css("z-index") > modalHighestIdx) {
            modalHighestIdx = Number($(".modal").eq(i).css("z-index"));
        }
    }

    var modal = document.getElementById(modalId);

    modal.style.zIndex = modalHighestIdx++;
    modal.classList.add("active");

    modalSizeSet();

    $("html, body").addClass("overflow-hidden");

}

// 모달 닫기
function closeModal(modalId) {

    var modal = document.getElementById(modalId);

    modal.classList.remove("active");

    if($(".modal.active").length == 0) {
        $("html, body").removeClass("overflow-hidden");
    }

}

// 모달 사이즈 셋팅
function modalSizeSet() {
    $(".modal").css("height", $(window).outerHeight());
}

/*
// 다크모드 토글, 값 저장
let darkMode = localStorage.getItem('darkMode');

const themeRadios = document.querySelectorAll("input[name='theme']");

themeRadios.forEach((theme) => {
    theme.addEventListener("change", (e) => {
        if(theme.value == 'darkMode') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

const enableDarkMode = () => {
    document.querySelector("html").classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    document.querySelector("#darkMode").checked = true;
};

const disableDarkMode = () => {
    document.querySelector("html").classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') enableDarkMode();

// SNB 토글, 값 저장
let snbMode = localStorage.getItem('snbMode');
const snbModeToggle = document.querySelector('#snbToggle');

const enableSnbMode = () => {
    document.body.classList.add('snb-mini-mode');
    localStorage.setItem('snbMode', 'enabled');
};

const disableSnbMode = () => {
    document.body.classList.remove('snb-mini-mode');
    localStorage.setItem('snbMode', null);
};

if (snbMode === 'enabled') enableSnbMode();

snbModeToggle.addEventListener('click', () => {
    snbMode = localStorage.getItem('snbMode');
    if (snbMode !== 'enabled') {
        enableSnbMode();
    } else {
        disableSnbMode();
    }
});
*/

// 준비중 Alert
function readyAlert() {
    alert("준비중입니다.");
}