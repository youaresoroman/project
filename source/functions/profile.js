/* 
//To get DOM element:
    document.getElementById("content")
//To put data inside DOM element
    document.getElementById("content").innerHTML = 'data'

Leave comment for every function you make
Look out for clean code tutorial!!

For functions leave console log, especially for error handling

*/

//Fetching user data from API
function fetchuserdata(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        filluserdata(user);
        favicon(user.picture.medium);
    }, "json" );
}

//Filling page with user data
function filluserdata(user) {
    document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;
    document.getElementById("social").innerHTML = socialprofiles(user.login.username);
    document.getElementById("photo_frame").innerHTML = "<img src='https://randomuser.me/api/portraits/women/18.jpg'></img>";
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

function favicon(url) {
    $("head").append("<link rel='shortcut icon' type='image/jpg' href='" + url + "'/>");
}