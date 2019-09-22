var mymap = L.map('mapid').setView([45.42621, -75.69243], 19);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiZmxvcmlhbi0iLCJhIjoiY2swc2pqMW12MDNjazNsbnZldHN6a3gzcyJ9.ojnQ9jwBTtQv016aDbHjfg'
}).addTo(mymap);

 
 //Get data points
 
 $.getJSON("sample.geojson",function(data){
    L.geoJson(data, {
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng, {
			draggable: true,
			riseOnHover: true
		});
		marker.bindPopup('<strong>' + feature.properties.business_name + '</strong></br>' + feature.properties.street_address); 

		var countHover = 0;
		var countClick = 0;
		marker.on('click', function (e) {
            this.openPopup();
			countClick++;
			if (countClick > 2){
				document.getElementById("hotClick").innerHTML = "Wow! You've clicked marker '" + e.latlng + "' " + countClick + " times.";
			}
        });
        marker.on('click', function (e) {
            this.closePopup();
			if (countHover == 1){
				alert("You've hovered on location '" + e.latlng + "' " + countHover + " time.");
			}
			else{
				alert("You've hovered on location '" + e.latlng + "' " + countHover + " times.");
			}
		});
		marker.on('mouseover', function (e) {
            this.openPopup();
			countHover++;
        });
        marker.on('mouseout', function (e) {
            this.closePopup();
			if (countHover > 4){
				document.getElementById("hotHover").innerHTML = "Wow! You've hovered over point '" + e.latlng + "' " + countHover + " times.";
			}
		});
		
        return marker;
      }
    }).addTo(mymap);
});




var popup = L.popup()

//generate new pinpoints
function onMapClick(e) {
	marker = new L.marker(e.latlng, { draggable: true}).addTo(mymap);
	popup.setLatLng([45.42621, -75.69243])
	popup.setContent("A new pinpoint has been added at " + e.latlng.toString());
	popup.openOn(mymap);
	
	var countHover = 0;
	var countClick = 0;
	marker.on('click', function (e) {
	countClick++;
		if (countClick > 2){
			document.getElementById("hotClick").innerHTML = "Wow! You've clicked the new pinpoint '" + e.latlng + "' " + countClick + " times.";
		}
    });
    marker.on('click', function (e) {
		if (countHover == 1){
			alert("You've hovered on the new location '" + e.latlng + "' " + countHover + " time.");
		}
		else{
			alert("You've hovered on the new location '" + e.latlng + "' " + countHover + " times.");
		}
	});
	marker.on('mouseover', function (e) {
		countHover++;
	});
    marker.on('mouseout', function (e) {
        this.closePopup();
		if (countHover > 4){
			document.getElementById("hotHover").innerHTML = "Wow! You've hovered over the new point '" + e.latlng + "' " + countHover + " times.";
		}
	});
}				

mymap.on('click', onMapClick);

document.getElementById('toggle').onclick = function() {
	if (mymap.hasLayer(marker)){
		mymap.removeLayer(marker);
	}
	else{
		marker.addTo(mymap);
	}
};		
