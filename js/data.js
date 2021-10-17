import {getPositiveInteger, getPositiveFloat, getRandomItemsArray, MIN_RANDOM_VALUE} from './utils.js';

const ADVERTISEMENT_TITLES = [
  'Самая лучшая квартира',
  'Такой квартиры больше нет',
  'Выбирайте квартиру мечты всех котят',
  'Сдаем только кошатникам',
  'Квартира для кошечек',
];
const ADVERTISEMENT_DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
];
const PLACE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES_TYPES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS_LINKS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN_VALUE = 35.65000;
const LAT_MAX_VALUE = 35.70000;
const LNG_MIN_VALUE = 139.70000;
const LNG_MAX_VALUE = 139.80000;
const LOCATION_VALUE_ACCURACY = 5;

const MAX_AVATAR_INDEX = 10;
const MAX_PRICE = 100;
const MAX_ROOMS = 6;
const MAX_GUESTS = 8;


const createAuthor = () => {
  const avatarIndex =  getPositiveInteger(MIN_RANDOM_VALUE,MAX_AVATAR_INDEX);
  const avatarUrl = 'img/avatars/user';
  return {
    avatar: avatarIndex < 10 ? `${avatarUrl}0${avatarIndex}.png` : `${avatarUrl}${avatarIndex}.png`,
  };
};

const createLocation = () => ({
  lat: getPositiveFloat(LAT_MIN_VALUE, LAT_MAX_VALUE, LOCATION_VALUE_ACCURACY),
  lng: getPositiveFloat(LNG_MIN_VALUE, LNG_MAX_VALUE, LOCATION_VALUE_ACCURACY),
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
