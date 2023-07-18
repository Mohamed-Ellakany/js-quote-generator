var quotes = [
  {
    quote: `“I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.”`,

    author: `Herbert Bayard Swope`,
  },

  {
    quote: `“If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.”`,

    author: `W.C. Fields`,
  },
  {
    quote: `“Try not to become a man of success. Rather become a man of value.”`,

    author: `Albert Einstein`,
  },
  {
    quote: `“It is better to fail in originality than to succeed in imitation.”`,

    author: `Herman Melville`,
  },
  {
    quote: `“Success is not how high you have climbed, but how you make a positive difference to the world.”`,

    author: `Roy T. Bennett, The Light in the Heart`,
  },
  {
    quote: `“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”`,

    author: `Steve Maraboli`,
  },
  {
    quote: `“Success is getting what you want, happiness is wanting what you get”`,

    author: `W.P. Kinsella`,
  },
];
var lastNum;
function quoteGenerator() {
  var num = Math.floor(Math.random() * quotes.length);

  while (lastNum === num) {
    num = Math.floor(Math.random() * quotes.length);
  }
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("author").innerHTML = `-- ` + quotes[num].author; 

  console.log(quotes[num].quote + ` ` + quotes[num].author); // *to check repeated quotes
  
  lastNum = num;
}
