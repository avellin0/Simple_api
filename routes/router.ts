import { Router } from "express";
import {CreateHello} from "../controller/CreateHello"
import { GetCongrats } from "controller/GetCongrats";

const route = Router()

const hello = new CreateHello()
const congrats = new GetCongrats()


route.get('/', hello.handle)
route.get('/get', congrats.handle)



export {route}