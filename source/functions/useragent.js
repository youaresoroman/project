/* 
//To get DOM element:
    document.getElementById("content")
//To put data inside DOM element
    document.getElementById("content").innerHTML = 'data'

Leave comment for every function you make
Look out for clean code tutorial!!

For functions leave console log, especially for error handling

*/

document.addEventListener("DOMContentLoaded", function(){
    $.get( "https://yankowski.eu/api/v0/ua", function( data ) {
        document.getElementById("software").innerHTML = "<p>" + data.software + " version " + data.software_value + "</p>Your platform is " + data.os_name; // + ' ' + data.os_name_value;
    }, "json" );
});