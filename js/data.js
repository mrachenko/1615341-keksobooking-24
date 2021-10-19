import {getPositiveInteger, getPositiveFloat, getRandomItemsArray} from './utils.js';
import {MIN_RANDOM_VALUE} from './constants/general.js';
import {ADVERTISEMENT_TITLES,ADVERTISEMENT_DESCRIPTIONS,PLACE_TYPES,CHECKIN_CHECKOUT_TIMES,FEATURES_TYPES,PHOTOS_LINKS,LATITUDE,LONGTITUDE,LOCATION_VALUE_ACCURACY,MAX_AVATAR_INDEX,MAX_PRICE,MAX_ROOMS,MAX_GUESTS} from './mocks.js';

const createAuthor = () => {
  const avatarIndex =  getPositiveInteger(MIN_RANDOM_VALUE,MAX_AVATAR_INDEX);
  const avatarUrl = 'img/avatars/user';
  return {
    avatar: avatarIndex < 10 ? `${avatarUrl}0${avatarIndex}.png` : `${avatarUrl}${avatarIndex}.png`,
  };
};

const createLocation = () => ({
  lat: getPositiveFloat(LATITUDE.min, LONGTITUDE.max, LOCATION_VALUE_ACCURACY),
  lng: getPositiveFloat(LONGTITUDE.min, LONGTITUDE.max, LOCATION_VALUE_ACCURACY),
});

const createOffer = (location) => {
  const titleIndex = getPositiveInteger(0, ADVERTISEMENT_TITLES.length-1);
  const descriptionIndex = getPositiveInteger(0, ADVERTISEMENT_DESCRIPTIONS.length-1);
  const typeIndex = getPositiveInteger(0,PLACE_TYPES.length-1);
  const checkinIndex = getPositiveInteger(0,CHECKIN_CHECKOUT_TIMES.length-1);
  const checkoutIndex = getPositiveInteger(0,CHECKIN_CHECKOUT_TIMES.length-1);
  return {
    title: ADVERTISEMENT_TITLES[titleIndex],
    address:`${location.lat}, ${location.lng}`,
    price: getPositiveInteger(MIN_RANDOM_VALUE, MAX_PRICE),
    type: PLACE_TYPES[typeIndex],
    rooms: getPositiveInteger(MIN_RANDOM_VALUE, MAX_ROOMS),
    guests:  getPositiveInteger(MIN_RANDOM_VALUE, MAX_GUESTS),
    checkin: CHECKIN_CHECKOUT_TIMES[checkinIndex],
    checkout:  CHECKIN_CHECKOUT_TIMES[checkoutIndex],
    features: getRandomItemsArray(FEATURES_TYPES),
    description: ADVERTISEMENT_DESCRIPTIONS[descriptionIndex],
    photos: getRandomItemsArray(PHOTOS_LINKS),
  };
};

const createAdvertisement = () => {
  const currentLocation = createLocation();
  return {
    author: createAuthor(),
    location: currentLocation,
    offer: createOffer(currentLocation),
  };
};

export {createAdvertisement};
