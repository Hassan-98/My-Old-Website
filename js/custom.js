// CountTo JS Function
$('.Work-Numbers').on('inview', function (event, visible) {
    if (visible == true) {
        $('.timer').countTo('restart');
    }
});
// PreLoader Function
window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
    $(function(){
        $(".typed").typed({
            strings: ["I'm Hassan Ali", " ", "Web Developer", "Civil Engineer"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 25,
            // time before typing starts
            startDelay: 10,
            // backspacing speed
            backSpeed: 1,
            // time before backspacing
            backDelay: 3000,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'text',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });
};

// Some Animations With Animate.css

    // Contact Me Animation Function
var loop = setInterval(animation , 5000);
function animation(){
    document.querySelector('.contact').classList.add('animated');
    document.querySelector('.contact').classList.add('bounce');
    document.querySelector('.message').style.animationDelay = '1.2s';
    document.querySelector('.message').classList.add('animated');
    document.querySelector('.message').classList.add('bounce');
    setTimeout(clear , 2800);
    function clear(){
        document.querySelector('.contact').classList.remove('animated');
        document.querySelector('.contact').classList.remove('bounce');
        document.querySelector('.message').classList.remove('animated');
        document.querySelector('.message').classList.remove('bounce');
    }
}
    // My Services Animation Function
$('.My-Services').on('inview', function (event, visible) {
    var servicesRight = document.querySelectorAll('.right');
    var servicesLeft = document.querySelectorAll('.left');
    if (visible == true) {
        for(var i = 0; i < servicesRight.length; i++){
            servicesRight[i].classList.add('animated');
            servicesRight[i].classList.add('fadeInRight');
            servicesRight[i].style.animationDuration = '1.2s';
        }
        for(var i = 0; i < servicesLeft.length; i++){
            servicesLeft[i].classList.add('animated');
            servicesLeft[i].classList.add('fadeInLeft');
            servicesLeft[i].style.animationDuration = '1.2s';
        }
    } else {
        for(var i = 0; i < servicesRight.length; i++){
            servicesRight[i].classList.remove('animated');
            servicesRight[i].classList.remove('fadeInRight');
        }
        for(var i = 0; i < servicesLeft.length; i++){
            servicesLeft[i].classList.remove('animated');
            servicesLeft[i].classList.remove('fadeInLeft');
        }
    }
});
    // My Portfolio Animation Function
$('.Portfolio').on('inview', function (event, visible) {
    var portfolioItem = document.querySelectorAll('.image');
    if (visible == true) {
        for(var i = 0; i < portfolioItem.length; i++){
            portfolioItem[i].classList.add('animated');
            portfolioItem[i].classList.add('zoomIn');
            portfolioItem[i].style.animationDuration = '1.6s';
        }
    } else {
        for(var i = 0; i < portfolioItem.length; i++){
            portfolioItem[i].classList.remove('animated');
            portfolioItem[i].classList.remove('zoomIn');
        }
    }
});
    // My Certificates Animation Function
$('.Certificates').on('inview', function (event, visible) {
    var certificate = document.querySelectorAll('.image');
    if (visible == true) {
        for(var i = 0; i < certificate.length; i++){
            certificate[i].classList.add('animated');
            certificate[i].classList.add('bounceIn');
        }
    } else {
        for(var i = 0; i < certificate.length; i++){
            certificate[i].classList.remove('animated');
            certificate[i].classList.remove('bounceIn');
        }
    }
});

// TypedJS Function