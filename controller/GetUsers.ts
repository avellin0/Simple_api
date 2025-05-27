import { Request, Response } from "express";
import { db } from "../db/database";

export class GetUsers{
    async handle(req: Request, res: Response) {
        try {

            const {id} = req.body

            console.log("this is the id:", id);
            

            const result = db.find((index) => index.id === id)

            if(!result){
                res.status(404).send("Usuario não encontrado")
            }

            res.send(result)

        } catch (error) {
            console.log("this is the error", error);
        }
    }

}