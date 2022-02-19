module.exports = function toReadable(number) {
  const numbers = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
      100: "hundred",
      1000: "thousand",
      1000000: "million",
  };

  if (number === 0) return "zero";

  const numberTen = (num) => {
      if (num == 0) return "";

      return `${numbers[num]}`;
  };

  const numberHundred = (num) => {
      let n = Math.floor(num / 10) * 10;
      if (num == 0) return "";
      if (num < 20) return `${numbers[num]}`;
      if (num - n !== 0) return `${numbers[n]}` + ` ` + numberTen(num - n);
      return numbers[n];
  };
  const numberThousand = (num) => {
      let n = Math.floor(num / 100);
      if (num - n * 100 !== 0)
          return `${numberTen(n)} hundred ${numberHundred(num - n * 100)}`;
      return `${numberTen(n)} hundred`;
  };

  if (number < 10) return numberTen(number);
  else if (number < 100) return numberHundred(number);
  else return numberThousand(number);
};
    
