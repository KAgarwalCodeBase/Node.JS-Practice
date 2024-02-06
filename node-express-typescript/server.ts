import express from "express";
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';

const app:express.Application = express();
const hostname:string = '127.0.0.1';
const port:number = 3000;

app.get('/', (request: express.Request, response: express.Response)=>{
    response.status(200).send('Hello World!');

})

app.use('/api', apiRouter);
app.use('/user', userRouter);
app.listen(port, hostname, ()=>{
    console.log(`Server start at port ${port}`);
})