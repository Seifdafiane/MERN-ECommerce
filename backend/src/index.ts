import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRouter } from './Routers/productRouter';
import seedRouter from './Routers/seedRouter';
import { userRouter } from './Routers/userRouter';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Erreur : MONGODB_URI non défini dans le fichier .env');
  process.exit(1);
}

// Options recommandées pour MongoDB Atlas
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('strictQuery', true);

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173'], // frontend URL
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

