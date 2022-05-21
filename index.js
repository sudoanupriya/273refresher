function save() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;
    var range = document.getElementById("range").value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("tel", tel);
    localStorage.setItem("range", range);
}

function geoFindMe() {

    const status = document.querySelector('#status');

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    status.textContent = 'Locating\.\.\.';
    navigator.geolocation.getCurrentPosition(success, error);


}

