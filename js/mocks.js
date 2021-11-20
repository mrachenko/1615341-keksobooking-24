
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

const LATITUDE = {min:35.65, max:35.70};
const LONGTITUDE = {min:139.7, max:139.8};
const DEFAULT_LAT = 35.67069;
const DEFAULT_LNG = 139.75451;
const LOCATION_VALUE_ACCURACY = 5;

const MAX_AVATAR_INDEX = 10;
const MAX_PRICE = 100;
const MAX_ROOMS = 6;
const MAX_GUESTS = 8;
const PLACE_MAP = {'flat':'Квартира', 'palace':'Дворец', 'house':'Дом', 'bungalow':'Бунгало', 'hotel':'Отель'};
const HOUSING_TYPE = {BUNGALOW:'bungalow', FLAT:'flat', HOTEL:'hotel', HOUSE:'house', PALACE:'palace'};
const ROOM_NUMBER = {ONE:'1', TWO:'2', THREE:'3', ONEHUNDRED:'100'};

const MIN_TITLE_LENGTH = 30;
const MAX_PRICE_VALUE = 1000000;
const DEFAULT_ROOM_VALUE = 1;
const DEFAULT_ROOM_CAPACITY = 1;
const DEFAULT_HOUSING_TYPE = 'flat';
const DEFAULT_HOUSING_PRICE = 1000;

export {DEFAULT_LAT, DEFAULT_LNG, PLACE_MAP, HOUSING_TYPE, ROOM_NUMBER, ADVERTISEMENT_TITLES,ADVERTISEMENT_DESCRIPTIONS,PLACE_TYPES,CHECKIN_CHECKOUT_TIMES,FEATURES_TYPES,PHOTOS_LINKS,LATITUDE,LONGTITUDE,LOCATION_VALUE_ACCURACY,MAX_AVATAR_INDEX,MAX_PRICE,MAX_ROOMS,MAX_GUESTS, MIN_TITLE_LENGTH, MAX_PRICE_VALUE, DEFAULT_ROOM_CAPACITY, DEFAULT_ROOM_VALUE, DEFAULT_HOUSING_TYPE, DEFAULT_HOUSING_PRICE};
