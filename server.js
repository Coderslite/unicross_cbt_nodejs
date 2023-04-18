import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import questionRouter from './routes/question_routers.js';
import connect from './database/conn.js';

const app = express();

// app middlewares

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
config();




// application port
const port = process.env.PORT ||8080;

connect();



app.use('/api/questions',questionRouter)



app.get('/',(req,res)=>{
    try {
        console.log("server get request")
        res.json('get request')
    } catch (error) { 
      res.json(error)
    }
})


app.listen(port,()=>{
    console.log(`Server Connected ${port}`);
})