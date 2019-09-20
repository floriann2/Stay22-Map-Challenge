var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZmxvcmlhbi0iLCJhIjoiY2swc2pqMW12MDNjazNsbnZldHN6a3gzcyJ9.ojnQ9jwBTtQv016aDbHjfg'
}).addTo(mymap);
				
var marker = L.marker([51.5, -0.09]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent("Welcome Trevor!")
	.openOn(mymap);
				
	function onMapClick(e) {
		popup.setLatLng(e.latlng)
		popup.setContent("You clicked the map at " + e.latlng.toString())
		popup.openOn(mymap);
		}

	mymap.on('click', onMapClick);
				