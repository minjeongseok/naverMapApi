// common.js

$(function(){

    $("header").load("../header.html");
    $(".snb").load("../snb.html");
    $("#userSettingPanel").load("../userSettingPanel.html");

    // resize
    $(window).on("resize", function() {
        $(".js-remove-all").removeClass("active");
    });

    // scroll
    $(window).on("scroll", function() {
        $(".js-remove-all").removeClass("active");
    });

    // snb
    var toggleSpeed = 200;

    // snb
    $(document).on("click", ".snb-list a", function() {

        $(this).parent('li').parent('ul').children('li').children('a').removeClass('active');
        
        if($(this).siblings('ul').css('display') == 'none') {
            $(this).parent('li').parent('ul').children('li').children('ul').slideUp(toggleSpeed);
            $(this).siblings('ul').slideDown(toggleSpeed);
            $(this).addClass('active');
        } else {
            $(this).siblings('ul').slideUp(toggleSpeed);
            $(this).removeClass('active');
        }

    });

    // 특정 영역 외 클릭시
    $(document).on('click',function(e){

        // dropdown
        if($(e.target).parents(".dropdown").length < 1) {
            $(".dropdown").removeClass("active");
        }

    });

    // dropdown Toggle
    $(document).on("click", ".dropdown-button", function(e) {

        e.stopPropagation();

        var $this = $(this);
        var $dropdown = $this.parent(".dropdown");
        var $dropdownContent = $dropdown.find(".dropdown-content");

        var dropdownId = $this.data("dropdown-target");
        var dropdownSize = $dropdown.data("dropdown-size")

        // 형제요소가 아닐 경우,
        if(dropdownId != undefined) {
            $dropdown = $(".dropdown[data-dropdown-id="+ dropdownId +"]");
        }

        // 사이즈 지정이 필요할 경우,
        if(dropdownSize != undefined) {
            $dropdownContent.css("width", dropdownSize);
        }

        if($dropdown.data("dropdown-position") == "fixed") {

            var posX = $(this).offset().left + $(this).outerWidth() - $dropdownContent.outerWidth();
            var posY = $(this).offset().top + $(this).outerHeight() - $(window).scrollTop();

            $dropdownContent.css("left", posX);
            $dropdownContent.css("top", posY);
        }

        if($dropdown.hasClass("active") == false) {
            $(".dropdown").removeClass("active");
            $dropdown.addClass("active");
        } else {
            $dropdown.removeClass("active");
        }

    });

    // tooltip
    $(document).on({
        mouseenter: function() {

            var tooltipText = $(this).data("tooltip");
            var $tooltip = "<div class=\"tooltip\">" + tooltipText + "</div>";

            $("body").append($tooltip);

            var $tooltipDiv = $(".tooltip");

            var posX = $(this).offset().left + $(this).outerWidth()/2;
                posX = posX - $tooltipDiv.outerWidth()/2;

            var posY = $(this).offset().top + $(this).outerHeight();

            $tooltipDiv.css("left", posX);
            $tooltipDiv.css("top", posY);
            
        },
        mouseleave: function() {
            $(".tooltip").remove();
        }

    }, "[data-tooltip]");

    // checkbox 임시
    $(document).on("click", ".checkbox", function() {

        console.log("checkbox 임시 / checkbox id와 label for사용 권장");

        var $this = $(this);
        var $checkbox = $this.children("input[type='checkbox']")

        var checkboxId = $checkbox.attr("id");

        if(checkboxId == "" || checkboxId == undefined) {
            if($checkbox.prop("checked") == false) {
                $checkbox.prop("checked", true);
            } else {
                $checkbox.prop("checked", false);
            }
        }

    });

    $(document).on("click", "", function() {

    });

});

// 모달 z-index 관리
let modalHighestIdx = 0;

// 모달 열기
function openModal(modalID) {

    for(var i=0; i<$(".modal").length; i++) {
        if($(".modal").eq(i).css("z-index") > modalHighestIdx) {
            modalHighestIdx = Number($(".modal").eq(i).css("z-index"));
        }
    }

    var modal = document.getElementById(modalID);

    modal.style.zIndex = modalHighestIdx++;
    modal.classList.add("active");

    $("html, body").addClass("overflow-hidden");

}

// 모달 닫기
function closeModal(modalID) {

    var modal = document.getElementById(modalID);

    modal.classList.remove("active");

    if($(".modal.active").length == 0) {
        $("html, body").removeClass("overflow-hidden");
    }

}

// 사이드바 열기
function openSidebar(sidebarID) {

    var sidebar = document.getElementById(sidebarID);

    sidebar.classList.add("active");

    $("html, body").addClass("overflow-hidden");
    
}

// 사이드바 닫기
function closeSidebar(sidebarID) {

    var sidebar = document.getElementById(sidebarID);

    sidebar.classList.remove("active");

    $("html, body").removeClass("overflow-hidden");

}