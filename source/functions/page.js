/* 
All functions for "DOMContentLoaded" event
*/

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        favicon(user.picture.medium)
        document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById("social").innerHTML = socialprofiles(user.login.username);
        loadcss(daypart());
    }, "json" );
});

function daypart() {
    var d = new Date();
    var n = d.getHours();
    if (n > 22 && n < 6){
        //night
        return "night";
    }
    if (n > 6 && n < 22) {
        //day
        return "day";
    }
}

function loadcss(time) {
    if (time == "day") {
        var social_css = "source/stylesheets/style.css";
        var style_css = "source/stylesheets/social.css";
    }
    if (time == "night") {
        var social_css = "source/stylesheets/stylenight.css";
        var style_css = "source/stylesheets/socialnight.css";
    }

    $("head").append("<link rel='stylesheet' id='' href='"+ social_css +"' type='text/css' />");
    $("head").append("<link rel='stylesheet' id='' href='"+ style_css +"' type='text/css' />");
}