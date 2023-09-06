$(function() {

    // 접속한 페이지 경로 찾기
    var pathName = $(location).attr('pathname');
    // console.log("pathName == " + pathName);

    // 접속한 페이지 경로안에서 필요없는 문자열 제거, 소문자로 변환
    var currentPage = pathName;
    currentPage = pathName.replace('.html', '');
    currentPage = currentPage.toLowerCase();
    // console.log("currentPage == " + currentPage);

    var $nav = $(".snb-list");
    var $navEl = $nav.find("a");

    for(var i=0; i<=$navEl.length; i++) {
        
        // 각 링크값 가져와서 필요없는 문자열 제거, 소문자로 변환(접속한 페이지 경로와 맞추기 위함)
        var navElPath = $navEl.eq(i).attr('href');
        
        if(navElPath == "javascript:void(0)" || navElPath == undefined) { // replace 오류 해결
            continue;
        }

        navElPath = navElPath.replace('.html', '');
        navElPath = navElPath.toLowerCase();

        // 접속한 페이지 경로랑 현재 페이지 경로 비교
        // console.log('navElPath = ' + navElPath);

        // 접속한 페이지 경로와 현재 페이지 경로가 같다면,
        if(currentPage == navElPath) {

            // 접속경로와 현재페이지 경로가 같은 a 태그 호출
            var $target = $navEl.eq(i);

            // 접속경로와 현재페이지 경로가 같은 a 태그(본인, 부모요소 하이라이팅)
            $target.addClass('current active');
            $target.parent('li').parent('ul').parent('li').children('a').addClass('current active');
            $target.parent('li').parent('ul').parent('li').parent('ul').parent('li').children('a').addClass('current active');

            // 접속경로와 현재페이지 경로가 같은 a 태그가 속한 뎁스 고정하기
            $target.parent('li').parent('ul').addClass("active");
            $target.parent('li').parent('ul').parent('li').parent('ul').addClass("active");
        }

        // 접속 경로에 현재페이지의 pathName 표기되지 않는 경우(index !)
        if(currentPage == '/') {
            $('.snb-list').children('li').eq(0).children('a').eq(0).addClass('active');
        }
    }
    
});