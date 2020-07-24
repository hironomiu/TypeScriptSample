import * as Express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata"; 
import {createExpressServer} from "routing-controllers";
import {RootController} from "./controllers/RootController";
import {UserController} from "./controllers/UserController";

// const app = Express();
// app.use(bodyParser.json());

const app = createExpressServer({
   controllers: [RootController,UserController]
});

export {app};
