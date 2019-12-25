/* 
//To get DOM element:
    document.getElementById("content")
//To put data inside DOM element
    document.getElementById("content").innerHTML = 'data'

Leave comment for every function you make
Look out for clean code tutorial!!

For functions leave console log, especially for error handling

*/

//Make update to favicon
function favicon(url) { 
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/jpg';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
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