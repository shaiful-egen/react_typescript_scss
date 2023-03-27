const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/book', (req, res) => {
  fileRead(res);
})

app.post('/book', (req, res) => {
  console.log(JSON.stringify(req.headers));
  console.log(JSON.stringify(req.query));
  //console.log(req.body);
  //res.json(req.body);
  fileWrite(req.body, res)
})

function fileWrite(v, res) {
  const enc = new TextEncoder();
  const t = enc.encode(JSON.stringify(v));
  fs.writeFile('express_server_db.json', t, (err) => {
    if (err) throw err;
    //console.log('Data written to file');
    res.json(v);
  });
}

async function fileRead(res) {
  await fs.readFile('express_server_db.json', (err, data) => {
    if (err) throw err;
    d = JSON.parse(data);
    console.log(d);
    res.json(d);
  });
}

const port = 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
