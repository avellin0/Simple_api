import { Router } from "express";
import {CreateHello} from "../controller/CreateHello"
const route = Router()
const hello = new CreateHello()



route.get('/', hello.handle)



export {route}