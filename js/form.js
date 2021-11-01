import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE_VALUE} from './mocks.js';

const adTitleInput = document.querySelector('#title');
const adPriceForNight = document.querySelector('#price');
const adRoomNumber = document.querySelector('#room_number');
const adRoomCapacity  = document.querySelector('#capacity');
const adRoomCapacitySelects = adRoomCapacity.querySelectorAll('option');
const adHousingType = document.querySelector('#type');
const adHousingPrice = document.querySelector('#price');
const adTimeIn = document.querySelector('#timein');
const adTimeOut = document.querySelector('#timeout');

const setAdDefaultParameters = () => {
  adRoomNumber.value = '1';
  adRoomCapacity.value = '1';
  for (let i = 0; i < adRoomCapacitySelects.length; i++) {
    adRoomCapacity.options[i].removeAttribute('disabled');
    if (adRoomCapacity.options[i].value !== adRoomNumber.value) {
      adRoomCapacity.options[i].setAttribute('disabled','disabled');
    }
  }
  adHousingType.value = 'flat';
  adHousingPrice.setAttribute('min','1000');
  adHousingPrice.setAttribute('placeholder','1000');
};

setAdDefaultParameters();


adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
});

adPriceForNight.addEventListener('input', () => {
  if (adPriceForNight.value > MAX_PRICE_VALUE) {
    adPriceForNight.setCustomValidity('Стоимость не может превышать 1 000 000.');
  } else {
    adPriceForNight.setCustomValidity('');
  }
  adPriceForNight.reportValidity();
});

adRoomNumber.addEventListener('change', () => {
  switch (adRoomNumber.value) {
    case '1':
      for (let i = 0; i < adRoomCapacitySelects.length; i++) {
        adRoomCapacity.options[i].removeAttribute('disabled');
        if (adRoomCapacity.options[i].value !== '1') {
          adRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case '2':
      for (let i = 0; i < adRoomCapacitySelects.length; i++) {
        adRoomCapacity.options[i].removeAttribute('disabled');
        if (adRoomCapacity.options[i].value !== '1' && adRoomCapacity.options[i].value !== '2') {
          adRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case '3':
      for (let i = 0; i < adRoomCapacitySelects.length; i++) {
        adRoomCapacity.options[i].removeAttribute('disabled');
        if (adRoomCapacity.options[i].value !== '1' && adRoomCapacity.options[i].value !== '2' && adRoomCapacity.options[i].value !== '3') {
          adRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
    case '100':
      for (let i = 0; i < adRoomCapacitySelects.length; i++) {
        adRoomCapacity.options[i].removeAttribute('disabled');
        if (adRoomCapacity.options[i].value !== '0') {
          adRoomCapacity.options[i].setAttribute('disabled','disabled');
        }
      }
      break;
  }
});

adHousingType.addEventListener('change', () => {
  switch (adHousingType.value) {
    case 'bungalow':
      adHousingPrice.setAttribute('min','0');
      adHousingPrice.setAttribute('placeholder','0');
      break;
    case 'flat':
      adHousingPrice.setAttribute('min','1000');
      adHousingPrice.setAttribute('placeholder','1000');
      break;
    case 'hotel':
      adHousingPrice.setAttribute('min','3000');
      adHousingPrice.setAttribute('placeholder','3000');
      break;
    case 'house':
      adHousingPrice.setAttribute('min','5000');
      adHousingPrice.setAttribute('placeholder','5000');
      break;
    case 'palace':
      adHousingPrice.setAttribute('min','10000');
      adHousingPrice.setAttribute('placeholder','10000');
      break;
  }
});

adTimeIn.addEventListener('change', () => {
  adTimeOut.value = adTimeIn.value;
});

adTimeOut.addEventListener('change', () => {
  adTimeIn.value = adTimeOut.value;
});
