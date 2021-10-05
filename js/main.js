function getRandomInteger(from, to) {
  if (from < 0 || to < 0) {
    return 0;
  }
  return Math.floor(from + Math.random() * (to + 1 - from));
}

function getRandomFloat(from, to, count) {
  if (from < 0 || to < 0) {
    return 0;
  }
  return Math.floor((from + Math.random() * (to - from)) * Math.pow(10, count)) / Math.pow(10, count);
}
getRandomInteger(14, 7);
getRandomFloat(1.1, 1.2, 4);
