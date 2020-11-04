import express from 'express';

import {PORT} from './constants/index.js';
import 'dotenv/config.js';

import connectDatabase from './config/db.js';
import poll from './routes/poll.js'



const app = express();
        //       localhost:5000/polls
app.use(`${process.env.BASEURL}polls`, poll)

connectDatabase();

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);