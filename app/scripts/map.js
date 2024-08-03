'use strict'
const styles = {
    default: [],
    silver: [
      {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
    ],
    night: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }],
      },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
    retro: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    hide: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "visibility": "off" }]
        },{
        "featureType": "landscape",
        "stylers": [
            { "visibility": "off" }
        ]
        },{
        "featureType": "road",
        "stylers": [
            { "visibility": "off" }
        ]
        },{
        "featureType": "administrative",
        "stylers": [
            { "visibility": "off" }
        ]
        },{
        "featureType": "poi",
        "stylers": [
            { "visibility": "off" }
        ]
        },{
        "featureType": "administrative",
        "stylers": [
            { "visibility": "off" }
        ]
        },{
        "elementType": "labels",
        "stylers": [
            { "visibility": "off" }
        ]
        }
    ],
};

let map, BOUNDS_INDIA;

function createCenterControl(map) {
    const controlButton = document.createElement("button");
    // Set CSS for the control.
    controlButton.style.cssText = `
        width: fit-content;
        height: fit-content;
        border-radius: 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        background-color: white;
        color: var(--navy-blue);
        font-size: 4em;
        padding: 10px;
        margin-left: 10px;
    `;

    controlButton.innerHTML = "<i class=\"fa-solid fa-location-crosshairs\"></i>";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";
    controlButton.addEventListener("click", () => {
      map.setCenter({ lat: 23.921945, lng: 82.74589});
      map.setZoom(4);
    });
    return controlButton;
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 23.921945, lng: 82.74589},
        minZoom: 4,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        styles: styles["silver"],
    });

    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(centerControlDiv);
    // var geoXml = new geoXML3.parser({map: map, suppressInfoWindows: true, zoom: false,});

    // geoXml.parse("../assets/india_states.kml");

//   map.setOptions({ styles: styles["silver"] });
}

function restaurantMarkers() {
    var restaurants = [[20, 80, "300"], [21, 81, "450"], [22, 82, "290"]];
    restaurants.forEach(r => {
        addMarkers(r[0], r[1], r[2]);
    });
}

function addMarkers(lat, lng, title) {
    var markerLabelSVG = `<svg xmlns="http://www.w3.org/2000/svg"><text x="0" y="12" class="svgpathpin" style="font-family:Arial; opacity:1; font-weight:700">${title}</text></svg>`;

    var icon = {
        url: "../assets/pizza.png", // url
        scaledSize: new google.maps.Size(50, 50), // size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor 
    };
    const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng},
        map: map,
        // icon: { url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(markerLabelSVG), scaledSize: new google.maps.Size(40, 40) },
        icon: icon,
    });
    return marker
}

function addCircle(latlng, radius){
  latlng = {
    lat: parseFloat(latlng[0]),
    lng: parseFloat(latlng[1])
  }
  console.log(latlng)
  const circle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map,
    center: latlng,
    radius: radius * 10000,
  });
return circle;
}

function generateRandomCoordinates(n = 100, seed = 42) {
  const random = d3.randomNormal(seed);
  const coordinates = Array.from({ length: n }, () => [random() * 0.5, random() * 0.5 + 60]);
  return coordinates;
}

// Function to perform k-means clustering and return the centers of clusters
function getCircleCenters(coordinates, radius) {
  const n_clusters = Math.floor(coordinates.length / 10);

  // K-means clustering function
  function kmeans(data, k) {
      const centroids = data.slice(0, k);
      let assignments = new Array(data.length).fill(0);
      let oldAssignments = new Array(data.length).fill(-1);

      while (!arraysEqual(assignments, oldAssignments)) {
          oldAssignments = assignments.slice();

          // Assign points to centroids
          data.forEach((point, i) => {
              let minDist = Infinity;
              centroids.forEach((centroid, j) => {
                  const dist = measure(point[0], point[1], centroid[0], centroid[1]);
                  if (dist < minDist) {
                      minDist = dist;
                      assignments[i] = j;
                  }
              });
          });

          // Recalculate centroids
          centroids.forEach((_, j) => {
              const assignedPoints = data.filter((_, i) => assignments[i] === j);
              if (assignedPoints.length) {
                  const mean = assignedPoints.reduce((acc, point) => [acc[0] + point[0], acc[1] + point[1]], [0, 0]);
                  centroids[j] = [mean[0] / assignedPoints.length, mean[1] / assignedPoints.length];
              }
          });
      }

      return centroids;
  }

  // Helper functions
  function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    console.log(Math.abs(d * 1000))
    return Math.abs(d * 1000); // meters
  }
  // function euclideanDistance(a, b) {
  //     return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
  // }

  function arraysEqual(a, b) {
      return JSON.stringify(a) === JSON.stringify(b);
  }

  return kmeans(coordinates, n_clusters);
}

function draw(){
  coordinates.forEach(cord => {
    addMarkers(cord[0], cord[1], "Hey");
  })
  centers.forEach(center => {
    addCircle(center, 2);
  })
}

// let coordinates = generateRandomCoordinates();
// let centers = getCircleCenters(coordinates, 2);