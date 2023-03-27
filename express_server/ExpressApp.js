import express from 'express';
import fs from 'fs';
import cors from 'cors';
import Datastore from 'nedb'

const nedb = new Datastore({filename: 'book.db', autoload: true});
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/book', (req, res) => {
  nedb.find({}, (err, docs) => {
    res.json(docs);
  });
  //fileRead(res);
})

app.post('/book', (req, res) => {
  console.log(JSON.stringify(req.headers));
  console.log(JSON.stringify(req.query));
  //console.log(req.body);
  //res.json(req.body);
  //fileWrite(req.body, res);
  nedb.insert(req.body, (err, newDoc) => {
    console.log(newDoc)
    res.json(newDoc)
  });

})

function fileWrite(v, res) {
  const enc = new TextEncoder();
  const t = enc.encode(JSON.stringify(v));
  fs.writeFile('express_server_file_db.json', t, (err) => {
    if (err) throw err;
    //console.log('Data written to file');
    res.json(v);
  });
}

async function fileRead(res) {
  await fs.readFile('express_server_file_db.json', (err, data) => {
    if (err) throw err;
    const d = JSON.parse(data);
    console.log(d);
    res.json(d);
  });
}

const port = 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
