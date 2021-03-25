import express from 'express';
import cors from 'cors';

const port = 4201;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send({ data: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
