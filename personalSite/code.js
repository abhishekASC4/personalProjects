
var htmlIcon = `<img class = 'html'src="assets/html5.svg" alt="html 5">`;
var cssIcon = `<img class = 'css' src="assets/css3.svg" alt="css 3">`;
var jsIcon = `<img class = 'js' src="assets/javascript.svg" alt="javascript">`;
function animateIn(target){
    $(target).animate({
        height: '+=5vh',
    })
}
function addIcons(){
    $('.iconLine1').append(htmlIcon);
    animateIn('.html');
    $('.iconLine1').append(cssIcon);
    animateIn('.css');
    $('.iconLine1').append(jsIcon);
    animateIn('.js');

}
$(document).ready(function(){
    $('.button').click(function(){
        addIcons();
    })
});