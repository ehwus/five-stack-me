import express from 'express';
const port = 4201;

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send({ data: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
