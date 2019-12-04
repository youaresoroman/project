//document.getElementById("content").innerHTML =
function play(){
    console.log('trying');
	$.get( "https://randomuser.me/api/", function( data ) {
        console.log(data['results'][0]);
	}, "json" );
}