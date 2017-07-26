import * as express from 'express';
const session = require('express-session');
import * as path from 'path';

const app = express();

app.get('/api/', function (req, res) {
  res.send('Hello World')
});

if (app.get('env') !== 'development') {
  app.use(express.static(path.join(__dirname, "/../client/dist")));
}


app.listen(3000);