var quotes = [
// 0
"It is better to be hated for what you are than to be loved for what you are not.\n- Andre Gide",
// 1
"Success is not how high you have climbed, but how you make a positive difference to the world.\n - Roy T. Bennett",
// 2
"A friend is someone who knows all about you and still loves you.\n- Elbert Hubbard",
// 3
"The heart is an arrow. It demands aim to land true.\n- Leigh Bardugo",
// 4
"Things change. And friends leave. Life doesn't stop for anybody.\n - Stephen Chbosky",
// 5
"Trust yourself. You know more than you think you do.\n - Benjamin Spock",
// 6
"The person I needed the most taught me that I don’t need anybody.\n - Nitya Prakash",
// 7
"Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.\n- Roy T. Bennett",
// 8
"Pursue what catches your heart, not what catches your eyes.\n - Roy T. Bennett",
// 9
"Keep your best wishes, close to your heart and watch what happens\n - Tony DeLiso"
  //  quotes.length == 10
  
];
var quote = 0
  function addQuote(){

   quote = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteLocation").innerText = quotes[quote];

  }


