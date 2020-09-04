require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT;

const ordersRouter = require('./routers/orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', ordersRouter);

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
