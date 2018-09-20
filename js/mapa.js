function mapa() {
    var opcaomapa = {
        center: new google.maps.LatLng(-23.1175, -46.5567),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    var mapa= new google.maps.Map(document.getElementById("mapa"),opcaomapa);
}
    var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    }   
	else {
        	x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
		x.innerHTML = "Latitude: " + position.coords.latitude + 
   		"<br>Longitude: " + position.coords.longitude; 
}
function showPosition(position) {
    	var latlon = position.coords.latitude + "," + position.coords.longitude;
    	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    	+latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
        document.getElementById("btnMapa").style.visibility="hidden";
            }
            function allowDrop(ev) {
                ev.preventDefault();
         }	

         function drag(ev) {
            
                 ev.dataTransfer.setData("text", ev.target.id);
         }

         function drop(ev) {
             ev.preventDefault();
             var data = ev.dataTransfer.getData("text");
             ev.target.appendChild(document.getElementById(data));
             
    } 
