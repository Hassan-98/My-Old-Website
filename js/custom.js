// CountTo JS Function
$('#Numbers').on('inview', function (event, visible) {
    if (visible == true) {
        $('.timer').countTo('restart');
    }
});
// PreLoader Function
window.onload = function(){
    document.querySelector('.loader').style.display = 'none';
};
// Contact Me Animation Function
var loop = setInterval(animation , 5000);
function animation(){
    document.querySelector('.contact').style.animation = 'animate 0.55s ease';
    document.querySelector('.message').style.animation = 'animate 0.55s ease 0.75s';
    setTimeout(clear , 1500);
    function clear(){
    document.querySelector('.contact').style.animation = 'none';
    document.querySelector('.message').style.animation = 'none';
    }
}