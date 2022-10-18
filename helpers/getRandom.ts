const getRandom = (arr: []) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

export default getRandom;
