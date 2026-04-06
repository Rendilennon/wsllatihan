import http from 'http'; // atau pakai require kalau belum set "type": "module"

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let a = 5;
  let b = 6;

  function pengurangan() {
    const hasil = a - b;
    return hasil;      
  }

  res.end(String(pengurangan())); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});