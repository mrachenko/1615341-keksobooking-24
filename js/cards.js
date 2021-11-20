import { PLACE_MAP } from './mocks.js';
import { prepareOutputField } from './utils.js';

const cards = [];
const similarCardsTemplate = document.querySelector('#card').content.firstElementChild;
const similarCardFragment = document.createDocumentFragment();

const prepareOutputImage = (photosArray, card) => {
  let photoList = card.querySelectorAll('.popup__photo');
  const photoContainer = card.querySelector('.popup__photos');

  for (let i = 1; i < photosArray.length; i++) {
    const appendPhoto = photoList[0].cloneNode(true);
    photoContainer.appendChild(appendPhoto);
  }
  photoList = card.querySelectorAll('.popup__photo');
  for (let i = 0; i <= photoList.length-1; i++) {
    photoList[i].src = photosArray[i];
  }
  return photoList;
};

const checkFeatureList = (feature, checkedItem) => {
  const isNecessary = checkedItem.some(
    (userEmotion) => feature.classList.contains(`popup__feature--${userEmotion}`),
  );
  if (!isNecessary) {
    feature.remove();
  }
};

const generateCardElement = (arrayItem) => {
  const cardElement = similarCardsTemplate.cloneNode(true);
  const featureContainer = cardElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const photoContainer = cardElement.querySelector('.popup__photos');

  prepareOutputField(arrayItem.offer.title, cardElement.querySelector('.popup__title'));
  prepareOutputField(arrayItem.offer.address, cardElement.querySelector('.popup__text--address'));
  prepareOutputField(arrayItem.offer.price, cardElement.querySelector('.popup__text--price'));
  prepareOutputField(arrayItem.offer.type, cardElement.querySelector('.popup__text--address'), PLACE_MAP[arrayItem.offer.type]);
  prepareOutputField((arrayItem.offer.rooms || arrayItem.offer.guests), cardElement.querySelector('.popup__text--capacity'), `${arrayItem.offer.rooms} комнаты для ${arrayItem.offer.guests} ${arrayItem.offer.guests > 1 ? 'гостей' : 'гостя'}` );
  prepareOutputField((arrayItem.offer.checkin || arrayItem.offer.checkout), cardElement.querySelector('.popup__text--time'), `Заезд после ${arrayItem.offer.checkin}, выезд до ${arrayItem.offer.checkout}`);
  prepareOutputField(arrayItem.offer.description, cardElement.querySelector('.popup__description'));
  prepareOutputField(arrayItem.author.avatar, cardElement.querySelector('.popup__avatar'));
  (('features' in arrayItem.offer) && (arrayItem.offer.features.length > 0)) ? featureList.forEach((feature) => checkFeatureList(feature, arrayItem.offer.features)) : featureContainer.classList.add('hidden');
  ('photos' in arrayItem.offer) ? prepareOutputImage(arrayItem.offer.photos, cardElement) : photoContainer.classList.add('hidden');

  similarCardFragment.appendChild(cardElement);
};

export {cards, similarCardFragment, generateCardElement};
