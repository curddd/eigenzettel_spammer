function generateRandomString(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// call the function with the desired length
var randomString = generateRandomString(1024);
console.log(randomString);
var eig = fetch('/eigenstart.js').then((res) =>
  res.text().then((text) => eval(text))
);
