import { Router } from "express";
import {CreateHello} from "../controller/CreateHello"
import { GetUsers } from "../controller/GetUsers";

const route = Router()

const hello = new CreateHello()
const user = new GetUsers()


route.get('/', hello.handle)
route.post('/GetUser', user.handle)



export {route}