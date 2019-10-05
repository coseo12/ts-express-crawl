import express from 'express';
import httpErrors from 'http-errors';
import { crawl } from './crawl';
import { extract } from './extract';

const app = express();

app.get('/crawl', async (req, res) => {
  try {
    const result = await crawl();
    res.send(extract(result).join(', '));
  } catch (err) {
    console.log(err);
  }
});
app.use((req, res, next) => {
  res.status(404).send('Not Found 404');
  next(httpErrors(404));
});

app.listen(3000, () => {
  console.log('Server Started 3000');
});
