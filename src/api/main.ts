import * as express from 'express';
import bodyparser from 'body-parser';
import * as queries from './queries.js'


const app = express.default();
const port = 3000;

app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
    extended: true,
  })
)

app.get('/table/:name', queries.getTable)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
