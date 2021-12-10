const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input C: `, (c) => {
  readline.question(`Input K: `, (k) => {
    if(c > k) [c, k] = [k, c];
    var total = 0;
    for (let i = c; i <= k; i++) {
      if (i % 3 === 0) {
        total += parseInt(i);
      }
    }
    console.log(`Hasil: ${total}`);
    readline.close();
  });
});
