//document.getElementById("content").innerHTML =

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://randomuser.me/api/", function( data ) {
        var user = data['results'][0];
        document.getElementById("my_name").innerHTML = user.name.first + ' ' + user.name.last;

	}, "json" );
});