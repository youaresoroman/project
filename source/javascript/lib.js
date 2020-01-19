function addFavicon( image_url ) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + image_url + "'/>");
}

function openlink (account, username) {
    alert(account + username);
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
    $("#my_name_about").html( data.name.first + ' ' + data.name.last );
    //$("#home").append( '<img src="' + data.picture.large +  '" alt="person" class="w3-image" width="300" height="300">' );
    $("#avatar").append( '<img src="' + data.picture.large +  '" style="width:100%">' );
    fillGeneralDataBlock( data );

    appendSocialLink( 'facebook', data.login.username );
    appendSocialLink( 'twitter', data.login.username );
    appendSocialLink( 'reddit', data.login.username );
    appendSocialLink( 'vk', data.login.username );
    appendSocialLink( 'github', "youaresoroman/project" );
    appendCredits();
}

function fillGeneralDataBlock( user ) {
    $("#about_me").append( "<p>I'm " + user.name.first + ". I am an artist and small business owner, a lover of family, travel, food, beer, getting out and lounging in." );
    $("#about_me").append( " I adore my friends, holidays, classic films, historical fiction, and if J Crew makes it I probably want to own it." );
    $("#about_me").append( " My life is crazy, busy, full of fun. I photograph life's joy-filled moments." );
    $("#about_me").append( " Now I'm living in " + user.location.city + " in " + user.location.country + "</p>");
    $("#about_me").append( "Below you can find my social accounts, I will be glad to speak with you</p>" );
    $("#address").append( '<i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> ' + user.location.city + ', ' + user.location.country);
    $("#phone").append( '<i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: ' + user.phone );
    $("#email").append( '<i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Email: ' + user.email );
}

function appendSocialLink( account, username ) {
    $("#social_links").append('<i class="fa fa-' + account + ' w3-hover-opacity" id="' + account + '_link"></i>');
    $("#" + account + "_link").click(function() {
        window.location.href = "https://" + account + ".com/" + username;
    });
}

function appendCredits() {
    $("#social_links").append( "<p>This page was made by: Roman Iankovskii, Michał Janaszek, Volodimir Brintsov</p>" );
    $("#social_links").append( '<p class="w3-medium"><a href="https://github.com/youaresoroman/project" target="_blank" class="w3-hover-text-green">Github project page</a></p>' );
    $("#social_links").append( '<p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>' );
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
    $("#visitor").append( '<p><i class="fa fa-internet-explorer fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>' + data.software + " version " + data.software_value + '</p>');
    $("#visitor").append( '<p><i class="fa fa-desktop fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>' + data.os_name + '</p>');
    $("#visitor").append( '<p><i class="fa fa-gear fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>' + data.os_platform + ' platform </p>');
}

/**
 * ANIMATION BLOCK
 */
function showLoadingAnimation(){
    $("body").addClass("loading");
    setTimeout(function(){ $("body").removeClass("loading"); }, 2000);
}