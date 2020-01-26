/**
 * MAIN ACTIVITY
 */
$( document ).ready( function() {
    showLoadingAnimation();
    fetchUserData();
    fetchUserAgentData();
    addCredits();
});

window.onload = function() {
    hideLoadingAnimation();
}

function addCredits() {
    $("#credits").append( "<p>This page was made by: Roman Iankovskii, Michał Janaszek, Volodymyr Brintsov</p>" );
    $("#credits").append( '<p class="w3-medium"><a href="https://github.com/youaresoroman/project" target="_blank" class="w3-hover-text-green">Github project page</a></p>' );
}

function logToConsole( func_name, error=false, message='OK') {
    if (error) {
        console.error( func_name + '(): ' + message );
    }
    else {
        console.info( func_name + '(): ' + message );
    }
}
    
/**
 * API USERDATA BLOCK
 */

function fetchUserData () {
    $.get( "https://randomuser.me/api/", function( data ) { 
        var data = data['results'][0];
        addFavicon( data.picture.medium );
        fillNameAndSurname( data.name.first, data.name.last );
        addAvatar( data.picture.large );
        fillAboutBlock( data );
        fillContactsBlock( data );
        addSocialLink( 'facebook', data.login.username );
        addSocialLink( 'twitter', data.login.username );
        addSocialLink( 'reddit', data.login.username );
        addSocialLink( 'vk', data.login.username );
        addSocialLink( 'github', "youaresoroman/project" );
        logToConsole( "fetchUserData" );
     }, "json" )
     .fail( function() {
        logToConsole( "fetchUserData", true, "Bad connection" );
    });
}

function addFavicon( image_url ) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + image_url + "'/>");
}

function addAvatar( image_url ) {
    $("#avatar").append( '<img src="' + image_url +  '" style="width:100%">' );
}

function fillNameAndSurname( name, surname ) {
    $("#my_name").html( name + ' ' + surname );
}

function fillAboutBlock( data ) {
    $("#about_me").append( "<p>I'm " + data.name.first + ". I am an artist and small business owner, a lover of family, travel, food, beer, getting out and lounging in." );
    $("#about_me").append( " I adore my friends, holidays, classic films, historical fiction, and if J Crew makes it I probably want to own it." );
    $("#about_me").append( " My life is crazy, busy, full of fun. I photograph life's joy-filled moments." );
    $("#about_me").append( " Now I'm living in " + data.location.city + " in " + data.location.country + "</p>");
    $("#about_me").append( "Below you can find my social accounts, I will be glad to speak with you</p>" );
}

function fillContactsBlock( data ) {
    $("#address").append( '<i class="fa fa-map-marker fa-fw color-red w3-xxlarge w3-margin-right"></i> ' + data.location.city + ', ' + data.location.country);
    $("#phone").append( '<i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: <a href="tel:' + data.phone + '">' + data.phone + '</a>' );
    $("#email").append( '<i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i> Email: <a href="mailto:' + data.email + '">' + data.email + '</a>' );
}

function addSocialLink( account, username ) {
    $("#social_links").append('<i class="fa fa-' + account + ' w3-hover-opacity" style="padding:5px" id="' + account + '_link"></i>');
    addSocialLinkClickEvent( account, username );
}

function addSocialLinkClickEvent( account, username ) {
    $("#" + account + "_link").click(function() {
        window.location.href = "https://" + account + ".com/" + username;
    });
}

/**
 * API USERAGENT BLOCK
 */

function fetchUserAgentData() {
    $.get( "https://yankowski.eu/api/v0/ua", function( data ) {
        fillVisitorBlock( data );
        logToConsole( "fetchUserAgentData" );
    }, "json" )
    .fail( function() {
        logToConsole( "fetchUserAgentData", true, "Bad connection" );
    });
}

function fillVisitorBlock( data ) {
    $("#visitor").append( '<p><i class="fa fa-internet-explorer fa-fw w3-xxlarge w3-margin-right"></i>' + data.software + " version " + data.software_value + '</p>');
    $("#visitor").append( '<p><i class="fa fa-desktop fa-fw w3-xxlarge w3-margin-right"></i>' + data.os_name + '</p>');
    $("#visitor").append( '<p><i class="fa fa-gear fa-fw w3-xxlarge w3-margin-right"></i>' + data.os_platform + ' platform </p>');
}

/**
 * ANIMATION BLOCK
 */

function showLoadingAnimation() {
    $("body").addClass("loading");
    
}

function hideLoadingAnimation() {
    setTimeout(function(){ $("body").removeClass("loading") }, 1500);
}