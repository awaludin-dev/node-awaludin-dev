const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input C: `, (c) => {
  readline.question(`Input K: `, (k) => {
    var total = 0;
    var check = [];
    for (let i = c; i <= k; i++) {
      if (i % 3 === 0) {
        if (check.length === 0) check[0] = parseInt(i);
        else {
          let compare1 = parseInt(check[check.length - 1] / 10);
          let compare2 = parseInt(i / 10);
          if (compare1 !== compare2) check.push(i);
        }
      }
    }
    for (let i = 0; i < check.length; i++) total += check[i];
    console.log(`Hasil: ${total}`);
    readline.close();
  });
});
