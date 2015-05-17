jQuery(document).ready(function($){
    "use strict"; 
    if($(window).height() > 428) {
        $('.homeoverlay').css('height', $(window).height());
    }

// menu fixed

    var offset = $(window).height();
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#fixed-nav').addClass('fixed');
        } else {
            jQuery('#fixed-nav').removeClass('fixed');
            }
        });

// menu fixed

// google map inject start
    
    $('#map-trigger').on('click', function(){
        if($('#mapbar').hasClass('mapbar-expand')){
            $('#mapbar').removeClass('mapbar-expand');
        } else {
            $('#mapbar').addClass('mapbar-expand');
        }
        
        $('#map-trigger').toggleClass('click');

    })

    $('#mapbar iframe').height($('#question').height());

// google map inject end


// CSS3 Amination Trigger

//all effects class list
var effects = ['flipInX', 'flipInY', 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUpBig', 'fadeInDownBig', 'fadeInLeftBig', 'fadeInRightBig', 'slideInDown', 'slideInLeft', 'slideInRight', 'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'rotateIn', 'rotateInUpLeft', 'rotateInDownLeft', 'rotateInUpRight', 'rotateInDownRight', 'lightSpeedIn', 'rollIn'];
var lastScrollTop = 0;


jQuery(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        jQuery.each(effects, function(index, effect ){

        jQuery('.'+ effect +'Trigger').each(function(){ //action for the class or id

        var contentPos = jQuery(this).offset().top; //distance between the content from top
        var topOfWindow = jQuery(window).scrollTop(); //the actual position of your screen

            if (contentPos < topOfWindow+800 ) {                    
                jQuery(this).addClass(effect); //add the class to the content
            }//else {
            //  jQuery(this).removeClass(effect);

            // }
        });
        // */
        });

  }
});

// CSS3 Amination Trigger


// smothscroll
        $('.scroll').on('click',function (e) {
            e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': $($(this).attr('href')).offset().top
            }, 500, 'swing', function () {});
        });
// smothscroll

//nicescroll start

    $("html").niceScroll({
        styler:"fb",
        cursorcolor :"#44d2bc",
        cursorborder : "0px",
        cursoropacitymin : 0.3,
        //bouncescroll : true,
        spacebarenabled : true,
        scrollspeed : 40,
        mousescrollstep : 45,
        zindex : 99999,
        cursorborderradius : 0,
        cursorwidth : 10,
        enabletranslate3d : false,
        //smoothscroll : false
        hidecursordelay : 150
    });


    // contact form start
    $('#contact').submit(function(){
        var fromData = $('#contact').serialize();
        // var confirmMSG = '<div id="contact-confirm" class="animated fadeIn"><div class="confirm-inner animated fadeInUp">Your message sent successfully <a id="closebtn" class="btn btn-warning btn-lg btn-block">Close</a></div></div>';

        $(document.body).on('click', '#closebtn', function(){
            $('#contact-confirm').remove();
        });

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: fromData,
            success : function( data ) {
                // $('.contact-form-wrapper').append(confirmMSG);
                // $(confirmMSG).insertAfter('#footer');
                alert('Your Message Sent successfully');
            },
            error   : function( xhr, err ) {
                         alert(fromData);     
            }
        });

        return false;
    });
    // contact form end
})



// google map start

google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(23.825527, 90.429862),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: false,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [ 
    { featureType: "administrative", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 20 } ] },
    { featureType: "road", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 40 } ] },
    { featureType: "water", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -10 }, { lightness: 30 } ] },
    { featureType: "landscape.man_made", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 10 } ] },
    { featureType: "landscape.natural", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 60 } ] },
    { featureType: "poi", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }, 
    { featureType: "transit", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }
],
    
    }

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
        ['', 23.825527, 90.429862]
    ];

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            icon: 'assets/img/map-marker.png',
            animation: google.maps.Animation.BOUNCE,
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
        });
    }
    // google map end
}

