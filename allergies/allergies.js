//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(userScore) {
    this.userScore = userScore;
    this.allergenList = {
      eggs          : 1,
      peanuts       : 2,
      shellfish     : 4,
      strawberries  : 8,
      tomatoes      : 16,
      chocolate     : 32,
      pollen        : 64,
      cats          : 128,
    };
  }

  list() {
   return Object.keys(this.allergenList).filter(allergen => {
     return this.allergicTo(allergen)
   });
  }

  allergicTo(potentialAllergen) {
    const allergenValue = this.allergenList[potentialAllergen];
    return Boolean(allergenValue & this.userScore); 
  }
}
