  var venueMap;                                      // Map() draws a map

function init() {
  var pinLocation = new google.maps.LatLng(43.2188662,-79.9769167);
    
    var mapOptions = {                                 // Set up the map options
    center: new google.maps.LatLng(43.2419705,-79.9323625),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    zoom: 12
  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  var icon = {
        url: "images/ring.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size

    };
var startPosition = new google.maps.Marker({    // Create a new marker
    position: pinLocation,                        // Set its position
    map: venueMap,
    icon: icon// Specify the map
  });
}


function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDBeOx55cRSdN57U-hSSr7m3fO16GmCozc&callback=init';
  document.body.appendChild(script);                 // Add element to page
}


window.onload = loadScript;                          // on load call loadScript()

  $(window).resize(function () {
      var h = $(window).height(),
          offsetTop = 60; // Calculate the top offset

      $('#map').css('height', (h - offsetTop));
  }).resize();