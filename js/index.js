
$(document).ready(function(){
// Bestsellers 슬라이드


    if(window.matchMedia("(max-width:599px)").matches){
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', "-74vw");
            $('.slide').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: "-74vw" }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });

        });
        
    } else if (window.matchMedia("(min-width:600px) and (max-width:1199px)").matches){
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -375);
            $('.slide').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -375 }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });

        });  
    }else if (window.matchMedia("(min-width:1200px)").matches){
        $('.prev').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -375);
            $('.slide').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.slide').stop().animate({ marginLeft: -375 }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });

        });
    };


    //button 클릭시 이미지 변경

    document.getElementById('space_btn1').onclick = function () {
    document.getElementsByClassName('img')[0].src = "img/index/content_home1.png";
    document.getElementsByClassName('img')[1].src = "img/index/content_home2.jpg";
    document.getElementsByClassName('img')[2].src = "img/index/content_home3.jpg";
    document.getElementsByClassName('img')[3].src = "img/index/content_home4.jpg";
}
    document.getElementById('space_btn2').onclick = function () {
        document.getElementsByClassName('img')[0].src = "img/index/content_game1.png";
        document.getElementsByClassName('img')[1].src = "img/index/content_game2.png";
        document.getElementsByClassName('img')[2].src = "img/index/content_game3.png";
        document.getElementsByClassName('img')[3].src = "img/index/content_game4.png";
    }

    document.getElementById('space_btn3').onclick = function () {
        document.getElementsByClassName('img')[0].src = "img/index/content_office1.png";
        document.getElementsByClassName('img')[1].src = "img/index/content_office2.png";
        document.getElementsByClassName('img')[2].src = "img/index/content_office3.png";
        document.getElementsByClassName('img')[3].src = "img/index/content_office4.png";
    }

    document.getElementById('space_btn4').onclick = function () {
        document.getElementsByClassName('img')[0].src = "img/index/content_school1.jpg";
        document.getElementsByClassName('img')[1].src = "img/index/content_school2.png";
        document.getElementsByClassName('img')[2].src = "img/index/content_school3.png";
        document.getElementsByClassName('img')[3].src = "img/index/content_school4.png";
    }

    //checkbox 다중선택 합계 구하기

        var price=0;

        var color=document.querySelectorAll(".color")
        var total =document.querySelector("#total");
        total.value=price+"원";

        for(i=0; i<color.length;i++){
            color[i].onclick=function(){
                if(this.checked==true){
                    price+=parseInt(this.value);
                }
                else{
                    price-=parseInt(this.value);
                }
                total.value=price+"원";
            }
        }





});

// nav myNav Open Close button



function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

