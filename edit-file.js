'use strict';

const fs = require('fs');
let file = `${__dirname}/files/test.txt`;

fs.readFile(file, (err,data) => {
  if(err) { console.error(err); return; }
  console.log('Before', data.toString());
  let contents = Math.random().toString();
  fs.writeFile(file, Buffer.from(contents), (err,data) => {
    if(err) { console.error(err); return; }
    fs.readFile(file, (err,data) => {
      if(err) { console.error(err); return; }
      console.log('After', data.toString());
    });
  });
});



