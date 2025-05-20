import express from 'express';
import dotenv from 'dotenv';
import identifyRoute from './routes/identifyRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/', identifyRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
