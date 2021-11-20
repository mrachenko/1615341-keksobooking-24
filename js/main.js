import { generateCardElement } from './cards.js';
import './form.js';
import { sendData } from './load.js';
import { getData } from './load.js';
import './map.js';
import { outputMarkers } from './map.js';
import { showAlert, showSuccess } from './utils.js';


const printMarkers = (markersData) => {
  markersData.forEach(generateCardElement);
  outputMarkers(markersData);
};

const loadMarkers = getData(printMarkers,showAlert);
loadMarkers();
sendData(showSuccess);
