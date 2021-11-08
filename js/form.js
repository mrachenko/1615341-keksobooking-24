import {MIN_TITLE_LENGTH, MAX_PRICE_VALUE, DEFAULT_ROOM_VALUE, DEFAULT_ROOM_CAPACITY, DEFAULT_HOUSING_TYPE, DEFAULT_HOUSING_PRICE, HOUSING_TYPE, ROOM_NUMBER} from './mocks.js';

const advertisingTitleInput = document.querySelector('#title');
const advertisingPriceForNight = document.querySelector('#price');
const advertisingRoomNumber = document.querySelector('#room_number');
const advertisingRoomCapacity  = document.querySelector('#capacity');
const advertisingRoomCapacitySelects = advertisingRoomCapacity.querySelectorAll('option');
const advertisingHousingType = document.querySelector('#type');
const advertisingHousingPrice = document.querySelector('#price');
const advertisingTimeIn = document.querySelector('#timein');
const advertisingTimeOut = document.querySelector('#timeout');

const setadvertisingDefaultParameters = () => {
  advertisingRoomNumber.value = DEFAULT_ROOM_VALUE;
  advertisingRoomCapacity.value = DEFAULT_ROOM_CAPACITY;
  for (let i = 0; i < advertisingRoomCapacitySelects.length; i++) {
    advertisingRoomCapacity.options[i].removeAttribute('disabled');
    if (advertisingRoomCapacity.options[i].value !== advertisingRoomNumber.value) {
      advertisingRoomCapacity.options[i].setAttribute('disabled','disabled');
    }
  }
  advertisingHousingType.value = DEFAULT_HOUSING_TYPE;
  advertisingHousingPrice.setAttribute('min', DEFAULT_HOUSING_PRICE);
  advertisingHousingPrice.setAttribute('placeholder', DEFAULT_HOUSING_PRICE);
};

setadvertisingDefaultParameters();


advertisingTitleInput.addEventListener('input', () => {
  const valueLength = advertisingTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    advertisingTitleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else {
    advertisingTitleInput.setCustomValidity('');
  }
  advertisingTitleInput.reportValidity();
});

advertisingPriceForNight.addEventListener('input', () => {
  const minAdvertisingPrice = advertisingPriceForNight.getAttribute('min');
  if (advertisingPriceForNight.value > MAX_PRICE_VALUE) {
    advertisingPriceForNight.setCustomValidity('Стоимость не может превышать 1 000 000.');
  } else if (advertisingPriceForNight.value < minAdvertisingPrice) {
    advertisingPriceForNight.setCustomValidity(`Стоимость не может быть ниже ${minAdvertisingPrice}.`);
  } else {
    advertisingPriceForNight.setCustomValidity('');
  }
  advertisingPriceForNight.reportValidity();
});

advertisingRoomNumber.addEventListener('change', () => {
  switch (advertisingRoomNumber.value) {
    case ROOM_NUMBER.ONE:
      for (let i = 0; i < advertisingRoomCapacitySelects.length; i++) {
        advertisingRoomCapacity.options[i].removeAttribute('disabled');
        if (advertisingRoomCapacity.options[i].value && advertisingRoomCapacity.options[i].value !== '1') {
          advertisingRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case ROOM_NUMBER.TWO:
      for (let i = 0; i < advertisingRoomCapacitySelects.length; i++) {
        advertisingRoomCapacity.options[i].removeAttribute('disabled');
        if (advertisingRoomCapacity.options[i].value && advertisingRoomCapacity.options[i].value !== '1' && advertisingRoomCapacity.options[i].value !== '2') {
          advertisingRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case ROOM_NUMBER.THREE:
      for (let i = 0; i < advertisingRoomCapacitySelects.length; i++) {
        advertisingRoomCapacity.options[i].removeAttribute('disabled');
        if (advertisingRoomCapacity.options[i].value && advertisingRoomCapacity.options[i].value !== '100') {
          advertisingRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case ROOM_NUMBER.ONEHUNDRED:
      for (let i = 0; i < advertisingRoomCapacitySelects.length; i++) {
        advertisingRoomCapacity.options[i].removeAttribute('disabled');
        if (advertisingRoomCapacity.options[i].value && advertisingRoomCapacity.options[i].value !== '0') {
          advertisingRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
  }
});

advertisingHousingType.addEventListener('change', () => {
  switch (advertisingHousingType.value) {
    case HOUSING_TYPE.BUNGALOW:
      advertisingHousingPrice.setAttribute('min','0');
      advertisingHousingPrice.setAttribute('placeholder','0');
      break;
    case HOUSING_TYPE.FLAT:
      advertisingHousingPrice.setAttribute('min','1000');
      advertisingHousingPrice.setAttribute('placeholder','1000');
      break;
    case HOUSING_TYPE.HOTEL:
      advertisingHousingPrice.setAttribute('min','3000');
      advertisingHousingPrice.setAttribute('placeholder','3000');
      break;
    case HOUSING_TYPE.HOUSE:
      advertisingHousingPrice.setAttribute('min','5000');
      advertisingHousingPrice.setAttribute('placeholder','5000');
      break;
    case HOUSING_TYPE.PALACE:
      advertisingHousingPrice.setAttribute('min','10000');
      advertisingHousingPrice.setAttribute('placeholder','10000');
      break;
  }
});

advertisingTimeIn.addEventListener('change', () => {
  advertisingTimeOut.value = advertisingTimeIn.value;
});

advertisingTimeOut.addEventListener('change', () => {
  advertisingTimeIn.value = advertisingTimeOut.value;
});
gi
