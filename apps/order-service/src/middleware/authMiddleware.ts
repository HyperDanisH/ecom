import { getAuth } from "@clerk/fastify";
import { FastifyReply, FastifyRequest } from "fastify";

declare module "fastify" {
    interface FastifyRequest {
        userId?: string
    }
}

export const shouldBeUser = async (req: FastifyRequest, reqply: FastifyReply) => {
    const { userId } = getAuth(req)

    if(!userId) {
        return reqply.send({ message: "You are not logged in!"})
    }

    req.userId = userId
}