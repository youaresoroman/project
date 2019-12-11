/* 
All functions for "DOMContentLoaded" event
*/

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        favicon(user.picture.medium)
        document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById("social").innerHTML = socialprofiles(user.login.username);
    }, "json" );
});