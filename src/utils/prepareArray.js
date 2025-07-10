export function prepareArray(value, array) {
  let index = -1;
  array.forEach((item, i) => {
    if (item.name === value.name) index = i;
  });

  if (index !== -1) array.splice(index, 1);
  array.unshift(value);
  array.splice(5);

  return array;
}
