
export const countWords = (string) => {
 
    const wordCount = {};
    string
      .toLowerCase()
      .match(/\w+('\w+)?/g)
      .map((word) => {
        wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1);
      });
    return wordCount;
 
};
