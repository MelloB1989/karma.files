import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
import cors from 'cors';
import upload from './routes/upload';

const uploadConfig = multer();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/health', (req, res) => {res.status(200).json({health: 'ok'})});
app.use('/v1/upload', uploadConfig.single('file'), upload)
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})