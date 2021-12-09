const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input C: `, (c) => {
  readline.question(`Input K: `, (k) => {
    if (c > k) [c, k] = [k, c];
    var total = 0;
    var check = [];
    for (let i = c; i <= k; i++) {
      if (i % 3 === 0) {
        if (check.length === 0) check[0] = parseInt(i);
        else {
          let checking = true;
          for (let j = 0; j < check.length; j++) {
            let compare1 = String(check[j]).substring(0, 1);
            let compare2 = String(i).substring(0, 1);
            if (compare1 === compare2) checking = false;
          }
          if (checking) check.push(i);
        }
      }
    }
    for (let i = 0; i < check.length; i++) total += check[i];
    console.log(`Hasil: ${total}`);
    readline.close();
  });
});
