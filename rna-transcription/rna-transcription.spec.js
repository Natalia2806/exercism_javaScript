import { toRna } from "./rna-transcription";

describe("Transcription", () => {
  test("empty rna sequence", () => {
    expect(toRna("")).toEqual("");
  });

  describe("transcribes cytosine to guanine", () => {
    test("UpperCase", () => {
      expect(toRna("C")).toEqual("G");
    });
    test("LowerCase", () => {
      expect(toRna("c")).toEqual("G");
    });
  });

  describe("transcribes guanine to cytosine", () => {
    test("UpperCase", () => {
      expect(toRna("G")).toEqual("C");
    });
    test("LowerCase", () => {
      expect(toRna("g")).toEqual("C");
    });
  });

  describe("transcribes thymine to adenine", () => {
    test("UpperCase", () => {
      expect(toRna("T")).toEqual("A");
    });
    test("LowerCase", () => {
      expect(toRna("t")).toEqual("A");
    });
  });

  describe("transcribes adenine to uracil", () => {
    test("UpperCase", () => {
      expect(toRna("A")).toEqual("U");
    });
    test("LowerCase", () => {
      expect(toRna("a")).toEqual("U");
    });
  });

  describe("transcribes all dna nucleotides to their rna complements", () => {
    test("UpperCase", () => {
      expect(toRna("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
    });
    test("LowerCase", () => {
      expect(toRna("acgtggtcttaa")).toEqual("UGCACCAGAAUU");
    });
  });
});
