export const parse = (string) => {
  let acronym = string
    .toUpperCase()
    .replace(/[_']/, "")
    .match(/\b[a-z]/gi)
    .join("");

  return acronym;
};
