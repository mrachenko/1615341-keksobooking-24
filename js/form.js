import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MAX_PRICE_VALUE} from './mocks.js';

const adTitleInput = document.querySelector('#title');
const adPriceForNight = document.querySelector('#price');
const adRoomNumber = document.querySelector('#room_number');
const adRoomCapacity  = document.querySelector('#capacity');
const adRoomCapacitySelects = adRoomCapacity.querySelectorAll('option');

for (let i = 0; i < adRoomCapacitySelects.length; i++) {
  adRoomCapacity.options[i].removeAttribute('disabled');
  if (adRoomCapacity.options[i].value !== '1') {
    adRoomCapacity.options[i].setAttribute('disabled','disabled');
  }
}

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
