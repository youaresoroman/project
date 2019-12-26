/***********************
*******PAGE BLOCK*******
***********************/

//When content fully loaded
$(document).ready(function() {
    loadCSS(daypart()); // loadCSS("night"); for test
    loadingactivity();
    fetchuserdata();
    fetchuseragent();
    finalizepage();
});

function finalizepage() {
    $("#credits").html('This page was made by: Roman Iankovskii, Michał Janaszek, Volodimir Brintsov');
    $("#buttons").html("<a href='#' onclick='visitor()'>About Visitor</a><a href='#' onclick='email()'>Contact</a>");
}

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

    $("head").append("<link rel='stylesheet' id='social_css' href='"+ social_css +"' type='text/css' />");
    $("head").append("<link rel='stylesheet' id='style_css' href='"+ style_css +"' type='text/css' />");
}

function loadingactivity(){
    $("body").addClass("loading");
    setTimeout(function(){ $("body").removeClass("loading"); }, 2000);
}

/***********************
***API USERDATA BLOCK***
***********************/

//Fetching user data from API
function fetchuserdata(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        console.log(user); // DUMMIES GONNA BE DUMB
        filluserdata(user);
        favicon(user.picture.medium);
    }, "json" );
}

//Filling page with user data
function filluserdata(user) {
    $("#my_name").html(user.name.first + ' ' + user.name.last);
    $("#social").html(socialprofiles(user.login.username));
    $("#photo_frame").html("<img src='" + user.picture.large + "'></img>");
}

//Constructor for social profile links
function socialprofiles(nickname) { 
    var profiles = '';
    profiles = profiles + '<a href="https://www.facebook.com/' + nickname + '" class="fa fa-facebook"></a>\n';
    profiles = profiles + '<a href="https://twitter.com/' + nickname + '" class="fa fa-twitter"></a>';
    profiles = profiles + '<a href="https://reddit.com/' + nickname + '" class="fa fa-reddit"></a>';
    profiles = profiles + '<a href="https://vk.com/' + nickname + '" class="fa fa-vk"></a>';
    return profiles;
}

//Show persons email
function email() {
    alert('Show persons email');
}

//Update page icon
function favicon(url) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + url + "'/>");
}

/***********************
**API USERAGENT BLOCK***
***********************/
function fetchuseragent(){
    $.get( "https://yankowski.eu/api/v0/ua", function( data ) {
        var software = data.software;
        var version = data.software_value;
        var os = data.os_name;
        var output = 'I suppose you are using ';

        /*if (software == 'Opera'){
            output = output + "<i class='fab fa-opera' style='font-size:36px'></i>";
        }
        else if (software == 'Mozilla Firefox') {
            output = output + "<i class='fab fa-firefox' style='font-size:36px'></i>";
        }
        else if (software == 'Google Chrome') {
            output = output + "<i class='fab fa-chrome' style='font-size:36px'></i>";
        }
        else if (software == 'Safari') {
            output = output + "<i class='fab fa-safari' style='font-size:36px'></i>";
        }
        else if (software == 'Mobile Safari') {
            output = output + "<i class='fab fa-safari' style='font-size:36px'></i>";
        }
        else if (software == 'Internet Explorer') {
            output = output + "<i class='fab fa-edge' style='font-size:36px'></i>";
        }*/

        output = output + software + " version " + version;

        output = output + " and your platform is " + os + ' ';

        /*if (os == 'Linux'){
            output = output + "<i class='fab fa-linux' style='font-size:36px'></i>";
        }
        else if (os == 'Android') {
            output = output + "<i class='fab fa-android' style='font-size:36px'></i>";
        }
        else if (os == 'IOS') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'iPhone OS') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'Mac OS X') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'Windows NT') {
            output = output + "<i class='fab fa-windows' style='font-size:36px'></i>";
        }
        else if (os == 'Windows Phone') {
            output = output + "<i class='fab fa-windows' style='font-size:36px'></i>";
        }*/

        $("#visitor").html(output); 
    }, "json" );
}

/***********************
****ANIMATION BLOCK*****
***********************/

function visitor() {
    alert('Light up viewers info block');
}