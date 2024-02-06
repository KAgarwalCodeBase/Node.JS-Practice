import express from 'express';

const userRouter: express.Router = express.Router();

userRouter.get('/', (request: express.Request, response: express.Response)=>{
    response.status(200).send('Welcome to the User Router');
})

export default userRouter;
