import {createAdvertisement} from './data.js';
import { prepareOutputField as prepareOutputField } from './utils.js';

const cards = [];
for (let i=0; i<10; i++) {
  cards.push(createAdvertisement());
}

const similarCardsTemplate = document.querySelector('#card').content;
const similarCardFragment = document.createDocumentFragment();

const generateCardElement = (arrayItem) => {
  const cardElement = similarCardsTemplate.cloneNode(true);
  const featureContainer = cardElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const photoContainer = cardElement.querySelector('.popup__photos');
  const placeMap = {'flat':'Квартира', 'palace':'Дворец', 'house':'Дом', 'bungalow':'Бунгало', 'hotel':'Отель'};
  let photoList = cardElement.querySelectorAll('.popup__photo');

  const checkFeatureList = (featureListItem) => {
    const isNecessary = arrayItem.offer.features.some(
      (userEmotion) => featureListItem.classList.contains(`popup__feature--${userEmotion}`),
    );
    if (!isNecessary) {
      featureListItem.remove();
    }
  };
  const prepareOutputImage = (photosArray) => {
    if (photosArray.length > 0) {
      for (let i = 1; i < photosArray.length; i++) {
        const appendPhoto = photoList[0].cloneNode(true);
        photoContainer.appendChild(appendPhoto);
      }
      photoList = cardElement.querySelectorAll('.popup__photo');
      for (let i = 0; i <= photoList.length-1; i++) {
        photoList[i].src = photosArray[i];
      }
    }
    else {
      photoContainer.classList.add('hidden');
    }
  };

  prepareOutputField(arrayItem.offer.title, cardElement.querySelector('.popup__title'));
  prepareOutputField(arrayItem.offer.address, cardElement.querySelector('.popup__text--address'));
  prepareOutputField(arrayItem.offer.price, cardElement.querySelector('.popup__text--price'));
  prepareOutputField(arrayItem.offer.type, cardElement.querySelector('.popup__text--address'), placeMap[arrayItem.offer.type]);
  prepareOutputField((arrayItem.offer.rooms || arrayItem.offer.guests), cardElement.querySelector('.popup__text--capacity'), `${arrayItem.offer.rooms} комнаты для ${arrayItem.offer.guests} ${arrayItem.offer.guests > 1 ? 'гостей' : 'гостя'}` );
  prepareOutputField((arrayItem.offer.checkin || arrayItem.offer.checkout), cardElement.querySelector('.popup__text--time'), `Заезд после ${arrayItem.offer.checkin}, выезд до ${arrayItem.offer.checkout}`);
  prepareOutputField(arrayItem.offer.description, cardElement.querySelector('.popup__description'));
  prepareOutputField(arrayItem.author.avatar, cardElement.querySelector('.popup__avatar'));
  arrayItem.offer.features.length > 0 ? featureList.forEach(checkFeatureList) : featureContainer.classList.add('hidden');
  prepareOutputImage(arrayItem.offer.photos);
  similarCardFragment.appendChild(cardElement);
};


cards.forEach(generateCardElement);

export {similarCardFragment};
