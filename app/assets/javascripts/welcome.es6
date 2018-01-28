jQuery(() => $(document).on('turbolinks:load', e => {

  const accessToken = "pk.eyJ1IjoiYmlsbGhvcnNtYW4iLCJhIjoiMjlKTlJlSSJ9.-ZHUvVedER6HD-MhM0gvOw";

  const gladiCoords = [8.553, -13.076];
  const lungiCoords = [8.6154128, -13.2005981];
  const tagrinCoords = [8.5182972,-13.1504148];

  const locations = {
    'island': { 'coords': [8.553, -13.076], 'name': 'Gladi Island'},
    'kissi': { 'coords': [8.545671264243902, -13.06227207183838], 'name': 'Kissi Camp'},
    'gladi': { 'coords': [8.56370736408942, -13.085918426513674], 'name': 'Gladi Town'},
    'oku': { 'coords': [8.55318287312815, -13.062744140625002], 'name': 'Oku Town'},
    'sangbalima': { 'coords': [8.563367868922992, -13.063945770263674], 'name': 'Sangbalima'},
    'lungi': { 'coords': [8.6154128, -13.2005981], 'name': 'Lungi International Airport'},
    'tagrin': { 'coords': [8.5182972,-13.1504148], 'name': 'Tagrin Ferry Terminal'}
  }

  $('.js-map').each((index, el) => {
    const $map = $(el);
    const id = $map.uniqueId().attr('id');
    const focus = $map.data('focus');

    const markers = {};
    const popups = {};

    let zoomControl = true;
    let tileId = 'streets';

    if (focus == 'island') {
      zoomControl = false;
    }

    const map = L.map(id, {
      dragging: !L.Browser.mobile,
      zoomControl: zoomControl,
      scrollWheelZoom: false,
      maxZoom: 17
    });

    function add({name, open}) {
      const location = locations[name];
      const marker = L.marker(location.coords).addTo(map);
      const popup = marker.bindPopup(location.name);
      if (open) {
        popup.openPopup();
      }
      markers[name] = marker;
      popups[name] = popup;
    }

    if (focus == 'island') {
      map.setView(locations['island'].coords, 14);
      add({name: 'kissi', open: true});
      add({name: 'gladi'});
      add({name: 'oku'});
      add({name: 'sangbalima'});
      tileId = 'satellite';
    } else {
      map.setView(locations['island'].coords, 10);
      add({name: 'lungi'});
      add({name: 'tagrin'});
      add({name: 'gladi', open: true});
    }

    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

    L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${accessToken}`, {
        maxZoom: 18,
        id: `mapbox.${tileId}`,
        accessToken: accessToken
    }).addTo(map);

    map.on('click', (e) => {
      console.log(`${e.latlng.lat}, ${e.latlng.lng}`);
    });

    $('.js-show-marker').on('click', (e) => {
      e.preventDefault();
      const name = $(e.target).data('marker');
      popups[name].openPopup();
      map.setView(markers[name].getLatLng(), 11);
    });
  });

  return;

  const circle = L.circle(gladiCoords, {
    stroke: false,
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 2200
  });

  function showCircle() {
    if (map.getZoom() < 13) {
      map.addLayer(circle);
    } else {
      map.removeLayer(circle);
    }
  }
  showCircle();

  map.on('zoomend', () => {
    showCircle();
  });

}));
