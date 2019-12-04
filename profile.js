//document.getElementById("content").innerHTML =

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById("social").innerHTML = '<a href="https://www.facebook.com/' + user.login.username + '" class="fa fa-facebook"></a>\n<a href="https://twitter.com/' + user.login.username + '" class="fa fa-twitter"></a>'
	}, "json" );
});