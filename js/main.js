import { similarCardFragment, cards } from './cards.js';
import { makePageActive, makePageInactive } from './activity.js';
import './form.js';

makePageInactive();

const map = L.map('map-canvas')
  .on('load', () => {
    makePageActive();
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const objectAdress = document.querySelector('#address');
  objectAdress.value = `${evt.target.getLatLng().lat.toFixed(5)},${evt.target.getLatLng().lng.toFixed(5)}`;
});

for (let i=0; i<cards.length-1;i++) {
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: cards[i].location.lat,
      lng: cards[i].location.lng,
    },
    {
      icon,
    },
  );

  marker.addTo(map);
  marker.bindPopup(similarCardFragment.childNodes[i]);
}
// const mapPlace = document.querySelector('.map__canvas');
// mapPlace.appendChild(similarCardFragment.firstElementChild);
//
//
