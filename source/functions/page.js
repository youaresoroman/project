/* 
All functions for "DOMContentLoaded" event
*/

//When content loaded
document.addEventListener("DOMContentLoaded", function(){
    fetchuserdata();
});

//On the start of page loading
document.addEventListener('readystatechange', () => {
    if (document.readyState == 'interactive') {
        loadCSS(daypart());
        loadingactivity(true);
    }
});

//When page is fully loaded
window.addEventListener('load', () => {
    var timer = setInterval(loadingactivity(false), 2000);
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

function loadCSS(time) {
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

function loadingactivity(onoff){
    if (onoff == true) {
        $("body").addClass("loading");    
    }
    if (onoff == false){
        $("body").removeClass("loading");    
    }
}

