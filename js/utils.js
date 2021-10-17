const MIN_RANDOM_VALUE = 1;

function getPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getPositiveFloat (min, max, digits) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomItemsArray = (array) => {
  const items = array.slice();
  const randomCount = getPositiveInteger(MIN_RANDOM_VALUE,array.length-1);
  const resultArray = [];
  for (let i = 0; i < randomCount; i++ ) {
    const randomId = getPositiveInteger(items.length-1);
    resultArray.push(items[randomId]);
    items.splice(randomId, 1);
  }
  return resultArray;
};

export {getPositiveInteger, getPositiveFloat, getRandomItemsArray, MIN_RANDOM_VALUE};
