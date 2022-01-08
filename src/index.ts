import express from 'express'
import { firebaseApp } from './firebaseApp';

const app = express();
const port = 5000;
app.get('/', (request, response) => {
  response.send('Groggg!');
});
app.listen(port, () => console.log(`Running on port ${port}`));
