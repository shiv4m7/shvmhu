function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendLocation);
  }
}
function sendLocation(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var location = lat + "," + lon;
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/location", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("location=" + location);
}
