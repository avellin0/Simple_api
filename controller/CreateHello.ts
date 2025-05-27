import {Request, Response} from "express"

export class CreateHello{
    async handle(req:Request, res:Response){

        res.send("Hello world")
    }
}