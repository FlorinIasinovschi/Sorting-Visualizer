let p = new Promise((resolve, reject) => {
  if (something) {
    resolve("Success")
  }
  else {
    reject("failed")
  }
})

p.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
})