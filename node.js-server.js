const express = require('express')
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
// https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  connectionLimit: 5
})

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('select 1 as val;');
    console.log(rows)
  } catch (error) {
    
  }
}

const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000;

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send(req.file)
  return;
  
  fs.createReadStream(req.file.path)
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    var fileName = entry.path;
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (fileName === "this IS the file I'm looking for") {
      entry.pipe(fs.createWriteStream('output/path'));
    } else {
      entry.autodrain();
    }
  });
});

app.post('/versionInfo', (req, res) => {
  res.send('done!')
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
