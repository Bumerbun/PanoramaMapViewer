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
app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/assets', express.static('./src/assets'))
app.get('/', (_request, response) => {
  response.status(200).send("sucsessfull request")
})
app.get('/table/:name', queries.getTable)
app.get('/table/:name/selectRows', queries.selectRows)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
