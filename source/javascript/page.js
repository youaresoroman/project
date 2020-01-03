//When content fully loaded
$(document).ready(function() {
    loadCSS(daypart()); // loadCSS("night"); for test
    loadingactivity(); //Loading sequence
    fetchuserdata();
    fetchuseragent();
    finalizepage();
});

function finalizepage() {
    $("#credits").html('This page was made by: Roman Iankovskii, Michał Janaszek, Volodimir Brintsov');
    $("#buttons").html("<a href='#', id = 'about_visitior'>About Visitor</a><a href='#', id = 'email'>Contact</a>");
}

function daypart() {
    var d = new Date();
    var n = d.getHours();
    if (n => 22 && n < 6){
        //night
        return "night";
    }
    if (n => 6 && n < 22) {
        //day
        return "day";
    }
}

function loadCSS(time) {
    console.log('Page theme name is "' + time + '"'); //Console message

    if (time == "day") {
        var social_css = "style.css";
        var style_css = "social.css";
    }
    if (time == "night") {
        var social_css = "stylenight.css";
        var style_css = "socialnight.css";
    }

    $("head").append("<link rel='stylesheet' id='social_css' href='source/stylesheets/"+ social_css +"' type='text/css' />");
    $("head").append("<link rel='stylesheet' id='style_css' href='source/stylesheets/"+ style_css +"' type='text/css' />");
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
    console.log("Fetching userdata ..."); //Console message

    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];

        //Show persons email
        var email = document.getElementById("email")
        email.onclick = function () {
          par = "You can write me on: " + user.email + ". Or you can call me on: " + user.phone + ", " + user.cell + ". Below you can find my social, I will be glad to speak with you"
          $("#general").html(par)


        }

        //Show persons data
        var about_visitior = document.getElementById('about_visitior')
        about_visitior.onclick = function () {

          var name = user['name']
          p = "Hi! I am " + name.first + " " + name.last + ". Nice to meet you!:) From above you can find my photo. I am from " + user.location.city + ", " + user.location.country + "."
          $("#general").html(p)

        }

        console.log(user); // DUMMIES GONNA BE DUMB
        filluserdata(user);
        favicon(user.picture.medium);
    }, "json" );
}

//Filling page with user data
function filluserdata(user) {
    console.log("Filling userdata ..."); //Console message

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

//Update page icon
function favicon(url) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + url + "'/>");
}

/***********************
**API USERAGENT BLOCK***
***********************/
function fetchuseragent(){
    console.log("Fetching user agent info ..."); //Console message

    $.get( "https://yankowski.eu/api/v0/ua", function( data ) {
        var software = data.software;
        var version = data.software_value;
        var os = data.os_name;
        $("#visitor").html('I suppose you are using ' + software + " version " + version + " and your platform is " + os);
    }, "json" );
}

/***********************
****ANIMATION BLOCK*****
***********************/
