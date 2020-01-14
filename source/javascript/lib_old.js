function getDayPart() {
    var d = new Date();
    var n = d.getHours();

    if (n => 22 && n < 6){
        return "night";
    }
    else if (n => 6 && n < 22) {
        return "day";
    }
}

function appendStyleSheet( css_name, theme_name ) {
    $("head").append("<link rel='stylesheet' id='" + css_name + "_css' href='source/stylesheets/" + theme_name + "/" + css_name + ".css' type='text/css' />");
}

function addFavicon( image_url ) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + image_url + "'/>");
}

/**
 * API USERDATA BLOCK
 */

function fetchUserData(){
    $.get( "https://randomuser.me/api/", function( data ) {
        fillWithUserData( data['results'][0] );
    }, "json" );
}

function fillWithUserData(data) {
    addFavicon( data.picture.medium );

    $("#my_name").html( data.name.first + ' ' + data.name.last );
    $("#photo_frame").html("<img src='" + data.picture.large + "'></img>");
    fillGeneralDataBlock( data );

    appendSocialLink( 'facebook', data.login.username );
    appendSocialLink( 'twitter', data.login.username );
    appendSocialLink( 'reddit', data.login.username );
    appendSocialLink( 'vk', data.login.username );
}

function fillGeneralDataBlock( user ) {
    $("#general").append( "<p>Hi there! I'm " + user.name.first + ". I am an artist and small business owner, a lover of family, travel, food, beer, getting out and lounging in." );
    $("#general").append( " I adore my friends, holidays, classic films, historical fiction, and if J Crew makes it I probably want to own it." );
    $("#general").append( " My life is crazy, busy, full of fun. I photograph life's joy-filled moments." );
    $("#general").append( " Now I'm living in " + user.location.city + " in " + user.location.country + "</p>");
    $("#general").append( "Below you can find my social accounts, I will be glad to speak with you</p>" );
    $("#email").append( "Email: " + user.email );
    $("#phone").append( "Phone: " + user.phone );
}

function appendSocialLink( account, username ) {
    $("#social").append( "<a href='https://" + account + ".com/" + username + "' class='fa fa-" + account + "'></a>" );
}

/**
 * API USERAGENT BLOCK
 */
function fetchUserAgentData(){
    $.get( "https://yankowski.eu/api/v0/ua", function( data ) {
        fillUserAgentDataBlock( data );
    }, "json" );
}

function fillUserAgentDataBlock( data ) {
    $("#visitor").html('I suppose you are using ' +  data.software + " version " + data.software_value + " and your platform is " + data.os_name);
}

/**
 * ANIMATION BLOCK
 */
function showLoadingAnimation(){
    $("body").addClass("loading");
    setTimeout(function(){ $("body").removeClass("loading"); }, 2000);
}