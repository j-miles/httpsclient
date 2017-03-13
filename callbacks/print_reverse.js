var getHTML = require('./http-functions');

function toReverse (html) {
  console.log(html.split("").reverse().join(""));
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions,toReverse);

