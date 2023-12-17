import express, {Application} from 'express'; 
import morgan from 'morgan';
import  dotenv from 'dotenv';
import  path from 'path';
import cookieParser from 'cookie-parser'
import Routers from './routers';
import { connectDB } from './config';
import cors from 'cors';

dotenv.config();
connectDB()

const  app: Application = express();



app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(process.cwd(),'./public')))
app.use(cookieParser());

Routers(app);

app.listen(process.env.PORT,()=>{console.log(`app running on ${process.env.PORT}`)})
export default app;