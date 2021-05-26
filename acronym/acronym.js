//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  let arr = str
     .replace(/[_-]/g, " ")
     .replace(/[']/g, "")
     .replace(/ {1,}/g, " ");

   return arr
     .split(" ")
     .map((a) => a[0].toUpperCase())
     .join("");
};





