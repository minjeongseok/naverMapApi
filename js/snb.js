$(function() {

    // 접속한 페이지 경로 찾기
    var pathName = $(location).attr('pathname');
    console.log("pathName == " + pathName);

    // 접속한 페이지 경로안에서 필요없는 문자열 제거, 소문자로 변환
    let currentPage = pathName;
    currentPage = pathName.replace('.html','');
    currentPage = currentPage.toLowerCase();

    console.log("currentPage == " + currentPage);

    // nav_items안에 있는 a 태그 전체 선택
    let navItem = $('.snb-list a');
    let navItemLenght = $(navItem).length;

    console.log("navItemLenght == " + navItemLenght);

    for(var g=0; g<=navItemLenght; g++) {
        // nav_items안에 있는 a 태그의 각 링크값 가져와서 필요없는 문자열 제거, 소문자로 변환(접속한 페이지 경로와 맞추기 위함)
        var navItemHref = $(navItem).eq(g).attr('href');
        navItemHref = (navItemHref)
        navItemHref = navItemHref.replace('.html','');
        navItemHref = navItemHref.toLowerCase();

        console.log(navItemHref);

        // 접속한 페이지 경로랑 현재 페이지 경로 비교
        // console.log('navItemHref = ' + navItemHref);
        // console.log('targetLink = ' + targetLink);

        // 접속한 페이지 경로와 현재 페이지 경로가 같다면,
        if(currentPage == navItemHref) {

            console.log(navItemHref);

            // 접속경로와 현재페이지 경로가 같은 a 태그 호출
            var target = $(navItem).eq(g);

            // 접속경로와 현재페이지 경로가 같은 a 태그(본인, 부모요소 하이라이팅)
            $(target).addClass('current active');
            $(target).parent('li').parent('ul').parent('li').children('a').addClass('current active');
            $(target).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('a').addClass('current active');

            // 접속경로와 현재페이지 경로가 같은 a 태그가 속한 뎁스 고정하기
            $(target).parent('li').parent('ul').addClass("active");
            $(target).parent('li').parent('ul').parent('li').parent('ul').addClass("active");
        }

        // 접속 경로에 현재페이지의 pathname 표기되지 않는 경우(index !)
        if(currentPage == '/') {
            $('.snb-list').children('li').eq(0).children('a').eq(0).addClass('active');
        }
    }
    
});