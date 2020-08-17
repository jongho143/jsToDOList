const noteBookCount = 80;

const noteBook = () => {
  const array = [];

  for (let i = 0; i < noteBookCount; i++) {
    const price = Math.random() * 1000000;

    array.push({
      name: `${i} 번째 노트북`,
      price: `${price.toFixed(0)} 원`,
    });
  }

  return array;
};
