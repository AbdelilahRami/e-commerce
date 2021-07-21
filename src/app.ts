import express from 'express';
import * as path from 'path';
import usersRouter from './routes/users';
import {catalogueRouter} from "./routes/catalogues";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', usersRouter);
app.use('/catalogues', catalogueRouter);

export  {app}
