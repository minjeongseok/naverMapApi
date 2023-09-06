// header.js

// SNB 토글, 값 저장
let snbMode = localStorage.getItem('snbMode');
const snbToggleButton = document.querySelector('#snbToggleButton');

const enableSnbMode = () => {
    document.body.classList.add('snb-min-mode');
    localStorage.setItem('snbMode', 'enabled');
};

const disableSnbMode = () => {
    document.body.classList.remove('snb-min-mode');
    localStorage.setItem('snbMode', null);
};

var screenWidth = window.innerWidth;

if(screenWidth < 1024) {
    snbMode = "enabled";
}

if(snbMode === 'enabled') enableSnbMode();

snbToggleButton.addEventListener('click', () => {

    snbMode = localStorage.getItem('snbMode');

    if(snbMode !== 'enabled') {
        enableSnbMode();
    } else {
        disableSnbMode();
    }

});

var mql = window.matchMedia("screen and (max-width: 1023px)");
mql.addListener(function(e) {
    if(e.matches) {
        enableSnbMode();
    } else {
        disableSnbMode();
    }
});

$(document).on("click", ".snb-close-button", function() {
        
    snbMode = localStorage.getItem('snbMode');

    if(snbMode !== 'enabled') {
        enableSnbMode();
    } else {
        disableSnbMode();
    }

});

// 다크모드 토글, 값 저장
let darkMode = localStorage.getItem('darkMode');
const themeChangeButton = document.querySelector('#themeChangeButton');

const enableDarkMode = () => {
    themeChangeButton.classList.add("active");
    document.querySelector("html").classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    themeChangeButton.classList.remove("active");
    document.querySelector("html").classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') enableDarkMode();

themeChangeButton.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

});