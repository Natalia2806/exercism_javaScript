export class NucleotideCounts {
  static parse(DNA) {
    var countA = (DNA.match(/A/g) || []).length;
    var countC = (DNA.match(/C/g) || []).length;
    var countG = (DNA.match(/G/g) || []).length;
    var countT = (DNA.match(/T/g) || []).length;

    if (DNA.length === countA + countC + countG + countT) {
      return countA + ' ' + countC + ' ' + countG + ' ' + countT;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }
}
