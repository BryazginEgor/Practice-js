const http = require('http');
const users = require('./entities.js');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  const os = require('os');
  const fs = require('fs');
  const dataOutput = fs.readFileSync("./text.txt");

    if (url === '/') {
  res.write(dataOutput.toString());
  } else if (url === '/info') {
    const info = JSON.stringify({
      platform: os.platform(),
      arch: os.arch(),
      release: os.release()
    })
    res.write(info);
  } else if (url === '/user') {
    const names = users.map(entity => entity.name).toString();
    res.write(names);
  } else if (url === '/user/id=:id') {
    const id = req.params.id;
    const entity = users.find(entity => entity.id === id);
    res.write(entity);
  } else {
    res.statusCode = 400;
    res.write('unsnupported');  
  }

  res.end();

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});