export const priceInRands = (value: number) => {
  return `R ${((Math.round(value) * 100) / 100).toFixed(2)}`;
};
