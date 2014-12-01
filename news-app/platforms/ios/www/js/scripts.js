function myCall() {
        var request = $.ajax({
            // url: "http://localhost:8888/news-app-app/test.php",
             url: "http://localhost:8888/news-app-app/rsstest.php",
            type: "GET",            
            dataType: "html"
        });

        request.done(function(msg) {
            $("#feed_results").html(msg);  
            // alert(msg);        
        });

        request.fail(function(jqXHR, textStatus) {
            alert( "Request failed: " + textStatus );
        });
}



$(document).ready(function() {



		/* Show Menu Tags */
        $('#showmenutags').click(function() {

                $('.menutags').slideToggle("fast");
                $('.tags-add').toggleClass('tags-minus');

        });

        /* Show Menu Sites */
           $('#showmenusites').click(function() {

                $('.menusites').slideToggle("fast");
                $('.sites-add').toggleClass('sites-minus');


        });

        




        $('.flyout').click(function() {
        	$('.grayout').fadeIn();
        	$('.menu').animate({left:'100%'});
        	$('#site').css('position','fixed');
        });

        $('.flyout-done').click(function() {
        	$('.grayout').fadeOut();
        	$('.menu').animate({left:'-100%'});
        	$('.menutags').slideUp();
        	$('.menusites').slideUp();
        	$('.article-container').css('position','relative');
            $('.sites-add').removeClass('sites-minus');
            $('.tags-add').removeClass('tags-minus');
       });




        /* Search Bar JS */

        function hoverClickLeft() {
            $('#slide-left').removeClass('slide-left-secondary');
            if ($('#slide-left').hasClass('slid-left')) {} else {
                $('#slide-left').addClass("slid-left");
                $('input[name=search1]').show();
                $('input[name=search1]').focus();
            }
            if ($('#slide-right').hasClass('slid-right')) {
                $('#slide-right').removeClass('slid-right');
                $('input[name=search2]').hide();
            } else {}
            $('#search-text').addClass('search-transition');
    };

      // $('.searchslide').click(function() {
      //           $('.title').hide()
      //   });



    function hoverClickRight() {
        if ($('#slide-right').hasClass('slid-right')) {} else {
            $('#slide-right').addClass("slid-right");
            $('input[name=search2]').show();
            $('input[name=search2]').focus();
        }
        if ($('#slide-left').hasClass('slid-left')) {
            $('#slide-left').removeClass('slid-left');
            $('input[name=search1]').hide();
        } else {}
        $('#slide-left').addClass('slide-left-secondary');
        $('#search-text').addClass('search-transition');
    };


    $(document).ready(function () {
        $('input[name=search1]').hide();
        $('input[name=search2]').hide();
        $('#slide-left').on('click', function () {
            hoverClickLeft();
        });
        $('#slide-right').on('click', function () {
            hoverClickRight();
        });
        $('#search-text').on('click', function() {
            hoverClickLeft();
        });
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.wrapper').length) {
                $('#slide-left').removeClass('slid-left');
                $('#slide-right').removeClass('slid-right');
                $('#slide-left').removeClass('slide-left-secondary');
                $('input[name=search1]').hide();
                $('input[name=search2]').hide();
                $('#search-text').removeClass('search-transition');
            }
        });

    });




        

    });
