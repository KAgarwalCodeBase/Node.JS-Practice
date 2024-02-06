import express from 'express';

const apiRouter: express.Router = express.Router();

apiRouter.get('/',(request: express.Request, response: express.Response)=>{
    response.status(200).send('Hello World from API Router');
})


//Adding one additonal route.
apiRouter.get('/test', (request: express.Request, response: express.Response)=>{
    response.status(200).send('Hello World from Test URI');
})

export default apiRouter;
