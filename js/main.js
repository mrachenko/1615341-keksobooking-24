function randomInteger(from, to) {
  if (from < 0 || to < 0) {
    return 'Введены отрицательные числа!'
  }
  if (from >= to) {
    console.log('Возможно вы перепутали порядок цифр, мы поправим!');
    let buffer = from;
    from = to;
    to = buffer;
  }
  let random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
}

function randomFloat(from, to, count) {
  if (from < 0 || to < 0) {
    return 'Введены отрицательные числа!'
  }
  if (from >= to) {
    console.log('Возможно вы перепутали порядок цифр, мы поправим!');
    let buffer = from;
    from = to;
    to = buffer;
  }
  let random = from + Math.random() * (to - from);
  return Math.floor(random * Math.pow(10, count)) / Math.pow(10, count);
}

console.log(randomInteger(1, 7));
console.log(randomFloat(1.1, 1.2, 4));
