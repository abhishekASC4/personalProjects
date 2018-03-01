var aboutMe = `<p class = 'contentText'>lorem ipsum dolor</p>`;
var contactMe = `
    <p class = 'contentText'>Check me out at: <br>
    <img src = "assets/github.svg">
    <img src = "assets/linkedin.svg"></p>
    `;
var skills = `
    <p class = 'contentText'> Proficient in:<br>
    <img src = "assets/html5.svg">
    <img src = "assets/css3.svg"> <br>
    <img src = "assets/javascript.svg">
`;
var defaultContent = `<p class = 'contentText'> A New York based programmer <p>`
function replaceContent(newContent){
    $('#content').replaceWith(` <div class="content bottomRow rhombus" id = "content">
        <div class= "dummy"></div>` + newContent + `</div>`);
    $('#content').css({
        'background-color':'white',
        'margin-top': '-1vh'
    })
    $('.contentText').css({
        'color':'black',
        'width': '11vh',
        'height': '11vh',
        'font-size': '2vh'
    })
}
function setUnderline(target){
    target += ' p';
    $('.rhombus p ').css('text-decoration','none');
    $(target).css('text-decoration','underline');
}
function checkClicks(){
    $("#contact").click(function(){
        $(replaceContent(contactMe));
        $(setUnderline('#contact'))
    })
    $("#about").click(function(){
        $(replaceContent(aboutMe));
        $(setUnderline('#about'))
    })
    $("#skills").click(function(){
        $(replaceContent(skills));
        $(setUnderline('#skills'));
    })
    $(" body > div:not(.main)").click(function(){
        $(replaceContent(defaultContent));
        console.log('out')
    })
}
$(document).ready(function(){
    checkClicks();
})