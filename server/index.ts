import * as express from 'express';
const session = require('express-session');
import * as path from 'path';

const app = express();

app.get('/api/', function (req, res) {
  res.json({text: 'Hello World'});
});

app.use(express.static(path.join(__dirname, '../..', "client/dist")));

app.listen(3000);