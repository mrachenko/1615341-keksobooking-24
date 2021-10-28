import {MIN_RANDOM_VALUE} from './constants/general.js';

export const getPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getPositiveFloat = (min, max, digits) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

export const getRandomItemsArray = (array) => {
  const items = array.slice();
  if (items.length === 0) {
    return 0;
  }
  const randomCount = getPositiveInteger(MIN_RANDOM_VALUE, array.length);
  const resultArray = [];
  for (let i = 0; i < randomCount; i++ ) {
    const randomId = getPositiveInteger(0, items.length-1);
    resultArray.push(items[randomId]);
    items.splice(randomId, 1);
  }
  return resultArray;
};

export const prepareOutputField = (checkValue, element, outputValue = checkValue) => checkValue ? element.textContent = outputValue : element.classList.add('hidden');
