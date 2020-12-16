$( document ).ready(function() {
    $.get( "http://localhost:8080/api/user/", function( data ) {
        $( "#result" ).html( data[0].firstName);
        console.log(data[0].firstName);
    });
});