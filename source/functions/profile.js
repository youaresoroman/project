/* 
//To get DOM element:
    document.getElementById("content")
//To put data inside DOM element
    document.getElementById("content").innerHTML = 'data'

Leave comment for every function you make
Look out for clean code tutorial!!

For functions leave console log, especially for error handling

*/

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        favicon(user.picture.medium)
        document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById("social").innerHTML = '<a href="https://www.facebook.com/' + user.login.username + '" class="fa fa-facebook"></a>\n<a href="https://twitter.com/' + user.login.username + '" class="fa fa-twitter"></a>'
    }, "json" );
});

function favicon(url) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/jpg';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}