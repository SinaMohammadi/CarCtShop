import {PrismaClient} from "prisma/prisma-client/index.js";

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
    const {lisingId} = event.context.params

    return prisma.car.delete({
        where: {
            id: +lisingId
        }
    })

})
 