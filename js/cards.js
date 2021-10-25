import {createAdvertisement} from './data.js';

const outputArray = [];
for (let i=0; i<10; i++) {
  outputArray.push(createAdvertisement());
}

const similarCardsTemplate = document.querySelector('#card').content;
const similarCardFragment = document.createDocumentFragment();

outputArray.forEach((outputArrayItem) => {
  const cardElement = similarCardsTemplate.cloneNode(true);
  const featureContainer = cardElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const photoContainer = cardElement.querySelector('.popup__photos');
  let photoList = cardElement.querySelectorAll('.popup__photo');

  cardElement.querySelector('.popup__title').textContent = outputArrayItem.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = outputArrayItem.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${outputArrayItem.offer.price} ₽/ночь`;
  switch (outputArrayItem.offer.type) {
    case 'flat':
      cardElement.querySelector('.popup__text--address').textContent = 'Квартира';
      break;
    case 'palace':
      cardElement.querySelector('.popup__text--address').textContent = 'Дворец';
      break;
    case 'house':
      cardElement.querySelector('.popup__text--address').textContent = 'Дом';
      break;
    case 'bungalow':
      cardElement.querySelector('.popup__text--address').textContent = 'Бунгало';
      break;
    case 'hotel':
      cardElement.querySelector('.popup__text--address').textContent = 'Отель';
      break;
  }
  cardElement.querySelector('.popup__text--capacity').textContent = `${outputArrayItem.offer.rooms} комнаты для ${outputArrayItem.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${outputArrayItem.offer.checkin}, выезд до ${outputArrayItem.offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = outputArrayItem.offer.description;
  cardElement.querySelector('.popup__avatar').src = outputArrayItem.author.avatar;
  featureList.forEach((featureListItem) => {
    const isNecessary = outputArrayItem.offer.features.some(
      (userEmotion) => featureListItem.classList.contains(`popup__feature--${userEmotion}`),
    );
    if (!isNecessary) {
      featureListItem.remove();
    }
  });

  for (let i = 1; i < outputArrayItem.offer.photos.length; i++) {
    const appendPhoto = photoList[0].cloneNode(true);
    photoContainer.appendChild(appendPhoto);
  }

  photoList = cardElement.querySelectorAll('.popup__photo');

  for (let i = 0; i <= photoList.length-1; i++) {
    photoList[i].src = outputArrayItem.offer.photos[i];
  }
  similarCardFragment.appendChild(cardElement);
});

export {outputArray,similarCardFragment};
