const { readFile } = require("fs");

let readFilePromise = new Promise((resolve, reject) => {
  // 當非同步作業成功時，呼叫 resolve(...),而失敗時則呼叫 reject(...)。

  readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
    // insert to mysql
  });
});

readFilePromise.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  });
