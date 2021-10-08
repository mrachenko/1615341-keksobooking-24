const ADVERTISEMENT_TITLE = [
  'Самая лучшая квартира',
  'Такой квартиры больше нет',
  'Выбирайте квартиру мечты всех котят',
  'Сдаем только кошатникам',
  'Квартира для кошечек',
];
const ADVERTISEMENT_DESCRIPTION = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
];
const PLACE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKIN_CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES_TYPE = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ADDR = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const GEO_COUNT = 5;

const MAX_PRICE = 100;
const MAX_ROOMS = 6;
const MAX_GUESTS = 8;

function getRandomPositiveInteger (a, b = 1) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}


const createAuthor = () => {
  const randomAvatarIndex =  getRandomPositiveInteger(10);
  const avatarUrl = 'img/avatars/user';
  if (randomAvatarIndex < 10) {
    return {
      avatar: `${avatarUrl}0${randomAvatarIndex}.png`,
    };
  }
  return {
    avatar: `${avatarUrl}${randomAvatarIndex}.png`,
  };
};

const createLocation = () => ({
  lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, GEO_COUNT),
  lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, GEO_COUNT),
});

const getArrayRandomItemsCount = (array) => {
  const randomCount = getRandomPositiveInteger(1,array.length-1);
  const featuresArray = array.slice();
  const resultArray = [];
  for (let i = 0; i < randomCount; i++ ) {
    const randomId = getRandomPositiveInteger(featuresArray.length-1);
    resultArray.push(featuresArray[randomId]);
    featuresArray.splice(randomId, 1);
  }
  return resultArray;
};

const createOffer = (location) => {
  const randomTitleIndex = getRandomPositiveInteger(0, ADVERTISEMENT_TITLE.length-1);
  const randomDescriptionIndex = getRandomPositiveInteger(0, ADVERTISEMENT_DESCRIPTION.length-1);
  const randomTypeIndex = getRandomPositiveInteger(0,PLACE_TYPE.length-1);
  const randomCheckinIndex = getRandomPositiveInteger(0,CHECKIN_CHECKOUT_TIME.length-1);
  const randomCheckoutIndex = getRandomPositiveInteger(0,CHECKIN_CHECKOUT_TIME.length-1);
  return {
    title: ADVERTISEMENT_TITLE[randomTitleIndex],
    address:`${location.lat}, ${location.lng}`,
    price: getRandomPositiveInteger(MAX_PRICE),
    type: PLACE_TYPE[randomTypeIndex],
    rooms: getRandomPositiveInteger(MAX_ROOMS),
    guests:  getRandomPositiveInteger(MAX_GUESTS),
    checkin: CHECKIN_CHECKOUT_TIME[randomCheckinIndex],
    checkout:  CHECKIN_CHECKOUT_TIME[randomCheckoutIndex],
    features: getArrayRandomItemsCount(FEATURES_TYPE),
    description: ADVERTISEMENT_DESCRIPTION[randomDescriptionIndex],
    photos: getArrayRandomItemsCount(PHOTOS_ADDR),
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

const outputArray = [];
for (let i=0; i<10; i++) {
  outputArray.push(createAdvertisement());
}
