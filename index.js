
    document.getElementById('space_btn1').onclick=function(){
        document.getElementsByClassName('img')[0].src="img/index/content_home1.png";
        document.getElementsByClassName('img')[1].src="img/index/content_home2.jpg";
        document.getElementsByClassName('img')[2].src="img/index/content_home3.jpg";
        document.getElementsByClassName('img')[3].src="img/index/content_home4.jpg";
    }
    document.getElementById('space_btn2').onclick=function(){
        document.getElementsByClassName('img')[0].src="img/index/content_game1.png";
        document.getElementsByClassName('img')[1].src="img/index/content_game2.png";
        document.getElementsByClassName('img')[2].src="img/index/content_game3.png";
        document.getElementsByClassName('img')[3].src="img/index/content_game4.png";
    }

    document.getElementById('space_btn3').onclick=function(){
        document.getElementsByClassName('img')[0].src="img/index/content_office1.png";
        document.getElementsByClassName('img')[1].src="img/index/content_office2.png";
        document.getElementsByClassName('img')[2].src="img/index/content_office3.png";
        document.getElementsByClassName('img')[3].src="img/index/content_office4.png";
    }

    document.getElementById('space_btn4').onclick=function(){
        document.getElementsByClassName('img')[0].src="img/index/content_school1.jpg";
        document.getElementsByClassName('img')[1].src="img/index/content_school2.png";
        document.getElementsByClassName('img')[2].src="img/index/content_school3.png";
        document.getElementsByClassName('img')[3].src="img/index/content_school4.png";
    }


    function prev(){
        $('#our_slide_wrab li:last').prependTo('#our.slide_wrab');
        $('#our_slide_wrab').css('margin-left',-1000);
        $('#our_slide_wrab').stop().animate({marginLeft:0},800);
    }

    function next(){
        $('#our_slide_wrab').stop.animate({marginLeft:-1000},function(){
            $('#our_slide_wrab li:first').appendTo('#our_slide_wrab');
            $('#our_slide_wrab').css({marginLeft:0});
        });
    }

    function slide(){
        $('#our_slide_wrab').stop.animate({marginLeft:-1000},function(){
            $('#our_slide_wrab li:first').appendTo('#our_slide_wrab');
            $('#our_slide_wrab').css({marginLeft:0});
        });
    }

    setInterval(slide,3000);

    $('.prev').click*(function(){
        prev();
    });

    $('next').click(function(){
        next();
    });



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


