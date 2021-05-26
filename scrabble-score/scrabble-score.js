export const score = (string) => {
  let result = 0;
  const mapping = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  for (const letter of string) {
    for (const key in mapping) {
      if (mapping[key].includes(letter.toUpperCase())) result += parseInt(key);
    }
  }

  return result;
};
