export const toRna = (rna) => {
  const letters = {
    C: "G",
    G: "C",
    T: "A",
    A: "U",
  };
  let trans = "";
  for (let i of rna) {
    let u = i.toUpperCase();
    trans += letters[u];
  }
  return trans;
};
