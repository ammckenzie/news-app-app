// IOS SPECIFIC

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function onLoad() {
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {
        console.log("onDeviceReady");
    }

    // Handle the online event
    //
    function onOnline() {
        console.log("onOnline");
    }

    function onOffline() {
        console.log("onOffline");
    }
    
    // Check if phone is connected to www
    function onOnline() {
        console.log("onOnline");
        alert("onOnline");
    }
    function onOffline() {
        console.log("onOffline");
        alert("onOffline");
    }



app.initialize();




// GET FEEDS - PASS to feeds.html
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





// All Other Stuff that fires when the page loads
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

        $('.flyout').click(function() {
        	$('.grayout').fadeIn();
       	$('.flyoutmenu').animate({left:'100%'});
        	$('#site').css('position','fixed');
        });

        $('.flyout-done').click(function() {
        	$('.grayout').fadeOut();
        	$('.flyoutmenu').animate({left:'-100%'});
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
});
