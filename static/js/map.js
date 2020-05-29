// Initiation of marker for Google Maps Api
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 52.857500,
            lng: -8.987437
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 52.857500,
        lng: -8.987437
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
