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
        var software = data.software;
        var version = data.software_value;
        var os = data.os_name;
        var output = '';
        /*
            <i class='' style='font-size:36px'></i>
            
            
            fa fa-mobile
        */

        if (software == 'Opera'){
            output = output + "<i class='fab fa-opera' style='font-size:36px'></i>";
        }
        else if (software == 'Mozilla Firefox') {
            output = output + "<i class='fa fa-firefox' style='font-size:36px'></i>";
        }
        else if (software == 'Google Chrome') {
            output = output + "<i class='fab fa-chrome' style='font-size:36px'></i>";
        }
        else if (software == 'Safari') {
            output = output + "<i class='fab fa-safari' style='font-size:36px'></i>";
        }
        else if (software == 'Mobile Safari') {
            output = output + "<i class='fab fa-safari' style='font-size:36px'></i>";
        }
        else if (software == 'Internet Explorer') {
            output = output + "<i class='fab fa-edge' style='font-size:36px'></i>";
        }

        output = output + software + " version " + version;

        output = output + " and your platform is " + os;

        if (os == 'Linux'){
            output = output + "<i class='fab fa-linux' style='font-size:36px'></i>";
        }
        else if (os == 'Android') {
            output = output + "<i class='fab fa-android' style='font-size:36px'></i>";
        }
        else if (os == 'IOS') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'iPhone OS') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'Mac OS X') {
            output = output + "<i class='fab fa-apple' style='font-size:36px'></i>";
        }
        else if (os == 'Windows NT') {
            output = output + "<i class='fab fa-windows' style='font-size:36px'></i>";
        }
        else if (os == 'Windows Phone') {
            output = output + "<i class='fab fa-windows' style='font-size:36px'></i>";
        }

        document.getElementById("software").innerHTML = output; 
    }, "json" );
});