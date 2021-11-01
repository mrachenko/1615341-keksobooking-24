import { similarCardFragment } from './cards.js';
import { makePageActive, makePageInactive } from './activity.js';
import './form.js';

const mapPlace = document.querySelector('.map__canvas');
mapPlace.appendChild(similarCardFragment.firstElementChild);
makePageInactive();
makePageActive();
